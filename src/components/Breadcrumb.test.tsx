import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Breadcrumb from './Breadcrumb';
import es from '@/helper/i18n/translation/es.json';

describe('Breadcrumb component', () => {
  it('renders home link correctly', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Breadcrumb />
      </MemoryRouter>
    );
    expect(getByText(es['app.breadcrumb.links.home'])).toBeInTheDocument();
  });

  it('renders provided links correctly', () => {
    const links = [
      { to: '/about', label: 'About' },
      { to: '/contact', label: 'Contact' },
    ];
    const { getByText } = render(
      <MemoryRouter>
        <Breadcrumb links={links} />
      </MemoryRouter>
    );
    expect(getByText('About')).toBeInTheDocument();
    expect(getByText('Contact')).toBeInTheDocument();
  });

  it('renders no additional links when none are provided', () => {
    const { container } = render(
      <MemoryRouter>
        <Breadcrumb />
      </MemoryRouter>
    );
    const links = container.querySelectorAll('a');
    expect(links.length).toBe(1); // Only the home link should be present
  });
});
