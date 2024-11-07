import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('renders the search component', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders 8 items', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    const items = screen.getAllByText(/Item \d/);
    expect(items).toHaveLength(8);
  });

  it('renders links for each item', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(8);
    links.forEach((link, index) => {
      expect(link).toHaveAttribute('href', `/flor/${index + 1}`);
    });
  });
});