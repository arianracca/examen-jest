import React from 'react';
import { render, screen } from '@testing-library/react';
import { PhotoContext } from '../../context/PhotoContext';
import Container from '../../components/Container';

jest.mock('../../components/Gallery', () => {
  return jest.fn(() => <div>Mocked Gallery</div>);
});

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
      { title: 'Mock 1', url: 'https://mocking.com/mock1.jpg' },
      { title: 'Mock 2', url: 'https://mocking.com/mock2.jpg' },
    ];
    const mockLoading = false;

    render(
      <PhotoContext.Provider value={{ images: mockImages, loading: mockLoading, runSearch: mockRunSearch }}>
        <Container searchTerm="mocks" />
      </PhotoContext.Provider>
    );

    expect(screen.queryByText('Mocked Loader')).not.toBeInTheDocument();
    expect(screen.getByText('Mocked Gallery')).toBeInTheDocument();
  });
});
