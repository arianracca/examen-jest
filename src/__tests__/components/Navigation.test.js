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

    const beach = screen.getByRole('link', { name: /beaches/i });
    const bird = screen.getByRole('link', { name: /birds/i });
    const mountain = screen.getByRole('link', { name: /mountain/i });
    const food = screen.getByRole('link', { name: /food/i });

    expect(beach).toBeInTheDocument();
    expect(bird).toBeInTheDocument();
    expect(mountain).toBeInTheDocument();
    expect(food).toBeInTheDocument();
  });
});
