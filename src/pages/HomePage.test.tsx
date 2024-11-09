import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import HomePage from './HomePage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import es from '@/helper/i18n/translation/es.json';

const mockProducts = [
  { id: 1, name: 'Flor 1', description: 'Descripción de Flor 1', price: 10 },
  { id: 2, name: 'Flor 2', description: 'Descripción de Flor 2', price: 15 },
  { id: 3, name: 'Flor 3', description: 'Descripción de Flor 3', price: 20 },
  { id: 4, name: 'Flor 4', description: 'Descripción de Flor 4', price: 25 },
  { id: 5, name: 'Flor 5', description: 'Descripción de Flor 5', price: 30 },
  { id: 6, name: 'Flor 6', description: 'Descripción de Flor 6', price: 35 },
  { id: 7, name: 'Flor 7', description: 'Descripción de Flor 7', price: 40 },
  { id: 8, name: 'Flor 8', description: 'Descripción de Flor 8', price: 45 },
];

vi.mock('@/api/products', () => ({
  fetchAll: vi.fn(() => Promise.resolve(mockProducts)),
}));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  </BrowserRouter>
);

describe('HomePage', () => {
  it('renders the search component', () => {
    render(
      <HomePage />,
      { wrapper }
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders 8 items', async () => {
    render(<HomePage />, { wrapper });

    await waitFor(() => {
      const items = screen.getAllByText(/Flor \d/);
      expect(items).toHaveLength(mockProducts.length);
    });
  });

  it('renders links for each item', async () => {
    render(<HomePage />, { wrapper });

    await waitFor(() => {
      const links = screen.getAllByText(es['app.page.home.btn.details']);
      expect(links).toHaveLength(mockProducts.length);
      links.forEach((link, index) => {
        expect(link.parentElement).toHaveAttribute('href', `/flor/${mockProducts[index].id}`);
      });
    });
  });
});