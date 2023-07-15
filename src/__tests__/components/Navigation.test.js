import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from '../../components/Navigation';

describe('Navigation component', () => {
  test('renders correctly', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const mountainLink = screen.getByRole('link', { name: /mountain/i });
    const beachLink = screen.getByRole('link', { name: /beaches/i });
    const birdLink = screen.getByRole('link', { name: /birds/i });
    const foodLink = screen.getByRole('link', { name: /food/i });

    expect(mountainLink).toBeInTheDocument();
    expect(beachLink).toBeInTheDocument();
    expect(birdLink).toBeInTheDocument();
    expect(foodLink).toBeInTheDocument();
  });
});
