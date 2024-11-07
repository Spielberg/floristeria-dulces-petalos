import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from '@/components/Header';

import es from '@/helper/i18n/translation/es.json';

describe('Header', () => {
  it('should render the title', () => {
    render(<Header />);
    const title = screen.getByText(es['app.header.title']);
    expect(title).toBeInTheDocument();
  });
});