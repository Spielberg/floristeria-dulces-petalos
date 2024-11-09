import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import Search from './Search';

import es from '@/helper/i18n/translation/es.json';

describe('Search Component', () => {
  const SearchWithState = () => {
    const [filter, setFilter] = React.useState('');
    return <Search filter={filter} setFilter={setFilter} />;
  };

  it('should render the search input with placeholder', () => {
    render(<Search filter="" setFilter={() => {}}  />);

    const inputElement = screen.getByPlaceholderText(es['app.search.input.placeholder']);
    expect(inputElement).toBeInTheDocument();
  });

  it('should render the search icon button', () => {
    render(<Search filter="" setFilter={() => {}}  />);

    const icon = screen.getByLabelText('search icon');
    expect(icon).toBeInTheDocument();
  });

  it('should update the input value', () => {
    render(<SearchWithState />);

    const inputElement = screen.getByPlaceholderText(es['app.search.input.placeholder']) as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: 'test' } });

    expect(inputElement.value).toBe('test');

    fireEvent.change(inputElement, { target: { value: '' } });

    expect(inputElement.value).toBe('');
  });
});