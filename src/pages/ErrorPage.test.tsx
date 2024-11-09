import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, Mock } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import { useRouteError, useNavigate } from 'react-router-dom';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...actual,
    useRouteError: vi.fn(),
    useNavigate: vi.fn(),
  };
});

describe('ErrorPage', () => {
  it('should render the error page with default error message', () => {
    (useRouteError as Mock).mockReturnValue({ statusText: 'Not Found', message: 'Page not found' });

    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );

    expect(screen.getByText('Not Found')).toBeInTheDocument();
  });

  it('should render the error page with custom error message', () => {
    (useRouteError as Mock).mockReturnValueOnce({ message: 'Custom error message' });

    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );

    expect(screen.getByText('Custom error message')).toBeInTheDocument();
  });

  it('should navigate to home when "Go to Home" button is clicked', () => {
    const navigate = vi.fn();
    (useNavigate as Mock).mockReturnValueOnce(navigate);

    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );

    const button = screen.getByText('Go to Home');
    button.click();

    expect(navigate).toHaveBeenCalledWith('/');
  });

  it('should render the error page with default error message when error is undefined', () => {
    (useRouteError as Mock).mockReturnValue(undefined);

    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    );

    expect(screen.getByText('Not Found')).toBeInTheDocument();
  });
});