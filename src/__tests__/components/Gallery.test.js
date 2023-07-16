import React from 'react';
import { render, screen } from '@testing-library/react';
import Gallery from '../../components/Gallery';

// Mock del componente NoImages
jest.mock('../../components/NoImages', () => ({
  __esModule: true,
  default: () => <div>No Images Found</div>,
}));

// Mock del componente Image
jest.mock('../../components/Image', () => {
  return {
    __esModule: true,
    default: ({ url, title }) => (
      <li key={title}>
        <img src={url} alt={title} />
      </li>
    ),
  };
});

describe('Gallery', () => {
  it('should render images when data is provided', () => {
    const mockData = [
      { title: 'Sonegg', key: 53044318799, url: 'https://farm66.staticflickr.com/65535/53044318799_e9c0e9b94f_m.jpg' },
      { title: 'Sonegg back', key: 53044631403, url: 'https://farm66.staticflickr.com/65535/53044631403_b88ea0d890_m.jpg' },
    ];
    render(<Gallery data={mockData} />);

    const images = screen.queryAllByRole('img');
    expect(images).toHaveLength(2);

    images.forEach((image) => {
      expect(image).toBeInTheDocument();
    });

    expect(screen.queryByText('No Images Found')).not.toBeInTheDocument();
  });

  it('should render NoImages when no data is provided', () => {
    const data = [];

    render(<Gallery data={data} />);

    expect(screen.getByText('No Images Found')).toBeInTheDocument();
    expect(screen.queryByAltText(/Image \d+/)).not.toBeInTheDocument();
  });
});
