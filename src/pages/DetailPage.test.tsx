import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { describe, it, expect, vi, Mock } from 'vitest';
import DetailPage from './DetailPage';
import es from '@/helper/i18n/translation/es.json';

// Mock the `useRouteError` and `useNavigate` hooks from react-router-dom
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...actual,
    useRouteError: vi.fn(),
    useNavigate: vi.fn(),
  };
});

describe('DetailPage', () => {
  it('renders title', () => {
    render(
      <MemoryRouter initialEntries={['/details/1']}>
        <Routes>
          <Route path="/details/:id" element={<DetailPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Flor: 1')).toBeInTheDocument();
  });

  it('renders back button with correct text', () => {
    render(
      <MemoryRouter initialEntries={['/details/1']}>
        <Routes>
          <Route path="/details/:id" element={<DetailPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(es['app.page.details.btn.back'])).toBeInTheDocument();
  });

  it('renders image section', () => {
    render(
      <MemoryRouter initialEntries={['/details/1']}>
        <Routes>
          <Route path="/details/:id" element={<DetailPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Imagen')).toBeInTheDocument();
  });

  it('renders description section', () => {
    render(
      <MemoryRouter initialEntries={['/details/1']}>
        <Routes>
          <Route path="/details/:id" element={<DetailPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Descripción detallada del ítem seleccionado.')).toBeInTheDocument();
  });

  it('navigates back when back button is clicked', () => {
    const navigate = vi.fn();
    (useNavigate as Mock).mockReturnValue(navigate);

    render(
      <MemoryRouter initialEntries={['/details/1']}>
        <Routes>
          <Route path="/details/:id" element={<DetailPage />} />
        </Routes>
      </MemoryRouter>
    );

    const button = screen.getByText(es['app.page.details.btn.back']);
    button.click();

    expect(navigate).toHaveBeenCalledWith(-1);
  });
});