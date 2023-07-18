import React from 'react';
import { render } from '@testing-library/react';
import Item from '../../components/Item';
import Container from '../../components/Container';

jest.mock('../../components/Container', () => ({
  __esModule: true,
  default: jest.fn(() => <div>Mocked Container</div>),
}));

describe('Item', () => {
  test('should render the Item component with the correct searchTerm', () => {
    const searchTerm = 'mocking';
    const { getByText } = render(<Item searchTerm={searchTerm} />);
    
    const titleElement = getByText(`${searchTerm} Pictures`);
    const containerElement = getByText('Mocked Container');

    expect(titleElement).toBeInTheDocument();
    expect(containerElement).toBeInTheDocument();

    expect(Container).toHaveBeenCalledTimes(1);
    expect(Container.mock.calls[0][0]).toEqual({ searchTerm });
  });
});
