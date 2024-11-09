import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Header from '@/components/Header';

import es from '@/helper/i18n/translation/es.json';

describe('Header', () => {
  it('should render the logo', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>);
    const alt = screen.getByAltText(es['app.header.img.alt']);
    expect(alt).toBeInTheDocument();
  });
});