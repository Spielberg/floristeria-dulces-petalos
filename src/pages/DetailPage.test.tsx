import { render, screen, waitFor, act } from '@testing-library/react';
import { MemoryRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { describe, it, expect, vi, Mock } from 'vitest';
import DetailPage from './DetailPage';
import es from '@/helper/i18n/translation/es.json';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Product } from '@/types';

const mockProduct: Product = {
  id: '1',
  name: 'Monstera Deliciosa',
  binomialName: 'MonsterDeliciosa',
  price: 200,
  imgUrl: 'https://via.placeholder.com/150',
  wateringsPerWeek: 2,
  fertilizerType: 'nitrogen',
  heightInCm: 200,
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

vi.mock('@/api/products', () => ({
  fetchProduct: vi.fn((productId) => {
    return productId === '1' ? Promise.resolve(mockProduct) : Promise.resolve(null);
  }),
}));

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...actual,
    useRouteError: vi.fn(),
    useNavigate: vi.fn(),
  };
});

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);

describe('DetailPage', () => {
  it('renders name & binomialName', async () => {
    render(
      <MemoryRouter initialEntries={['/details/1']}>
        <Routes>
          <Route path="/details/:id" element={<DetailPage />} />
        </Routes>
      </MemoryRouter>, 
      { wrapper }
    );

    await waitFor(() => {  
      const nameElements = screen.getAllByText(mockProduct.name);
      expect(nameElements).toHaveLength(2);
      expect(screen.getByText(mockProduct.binomialName)).toBeInTheDocument();
    });
  });

  it('renders back button with correct text', () => {
    render(
      <MemoryRouter initialEntries={['/details/1']}>
        <Routes>
          <Route path="/details/:id" element={<DetailPage />} />
        </Routes>
      </MemoryRouter>, 
      { wrapper }
    );

    expect(screen.getByText(es['app.page.details.btn.back'])).toBeInTheDocument();
  });

  it('renders image section', () => {
    render(
      <MemoryRouter initialEntries={['/flor/1']}>
        <Routes>
          <Route path="/flor/:id" element={<DetailPage />} />
        </Routes>
      </MemoryRouter>, 
      { wrapper }
    );

    expect(screen.getByRole('img', { name: mockProduct.name })).toBeInTheDocument();
  });

  it('navigates back when back button is clicked', () => {
    const navigate = vi.fn();
    (useNavigate as Mock).mockReturnValue(navigate);

    render(
      <MemoryRouter initialEntries={['/details/1']}>
        <Routes>
          <Route path="/details/:id" element={<DetailPage />} />
        </Routes>
      </MemoryRouter>, 
      { wrapper }
    );

    const button = screen.getByText(es['app.page.details.btn.back']);
    act(() => {
      button.click();
    });

    expect(navigate).toHaveBeenCalledWith('/');
  });
});