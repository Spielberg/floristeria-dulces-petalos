import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Search from './Search';

import es from '@/helper/i18n/translation/es.json';

describe('Search Component', () => {
  it('should render the search input with placeholder', () => {
    render(<Search />);

    const inputElement = screen.getByPlaceholderText(es['app.search.input.placeholder']);
    expect(inputElement).toBeInTheDocument();
  });

  it('should render the search icon button', () => {
    render(<Search />);

    const iconButton = screen.getByRole('button');
    expect(iconButton).toBeInTheDocument();
  });
});