import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from '@/components/Header';

describe('Header', () => {
  it('should render the title', () => {
    render(<Header />);
    const title = screen.getByText('app.header.title');
    expect(title).toBeInTheDocument();
  });
});