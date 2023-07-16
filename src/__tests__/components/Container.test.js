import React from 'react';
import { render, screen } from '@testing-library/react';
import { PhotoContext } from '../../context/PhotoContext';
import Container from '../../components/Container';

// Mock del componente Gallery
jest.mock('../../components/Gallery', () => {
  return jest.fn(() => <div>Mocked Gallery</div>);
});

// Mock del componente Loader
jest.mock('../../components/Loader', () => {
  return jest.fn(() => <div>Mocked Loader</div>);
});

describe('Container', () => {
  test('should render Loader when loading is true', () => {
    const mockRunSearch = jest.fn();
    const mockImages = [];
    const mockLoading = true;

    render(
      <PhotoContext.Provider value={{ images: mockImages, loading: mockLoading, runSearch: mockRunSearch }}>
        <Container searchTerm="cats" />
      </PhotoContext.Provider>
    );

    expect(screen.getByText('Mocked Loader')).toBeInTheDocument();
    expect(screen.queryByText('Mocked Gallery')).not.toBeInTheDocument();
  });

  test('should render Gallery when loading is false', () => {
    const mockRunSearch = jest.fn();
    const mockImages = [
      { title: 'Cat 1', url: 'https://example.com/cat1.jpg' },
      { title: 'Cat 2', url: 'https://example.com/cat2.jpg' },
    ];
    const mockLoading = false;

    render(
      <PhotoContext.Provider value={{ images: mockImages, loading: mockLoading, runSearch: mockRunSearch }}>
        <Container searchTerm="cats" />
      </PhotoContext.Provider>
    );

    expect(screen.queryByText('Mocked Loader')).not.toBeInTheDocument();
    expect(screen.getByText('Mocked Gallery')).toBeInTheDocument();
  });
});
