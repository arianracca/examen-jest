import React from 'react';
import { render } from '@testing-library/react';
import Search from '../../components/Search';
import Container from '../../components/Container';

jest.mock('../../components/Container', () => ({
  __esModule: true,
  default: jest.fn(() => <div>Mocked Container</div>),
}));

describe('Search', () => {
  test('should render the Search component with the correct searchTerm', () => {
    const searchTermMock = 'mock';
    render(<Search searchTerm={searchTermMock} />);
    
    expect(Container).toHaveBeenCalledTimes(1);
    expect(Container.mock.calls[0][0].searchTerm).toEqual(searchTermMock);
  });
});
