import React from 'react';
import { render } from '@testing-library/react';
import Header from '../../components/Header';
import Form from '../../components/Form';
import Navigation from '../../components/Navigation';

jest.mock('../../components/Navigation', () => ({
  __esModule: true,
  default: jest.fn(() => <div>Mocked Navigation</div>),
}));

jest.mock('../../components/Form', () => ({
  __esModule: true,
  default: jest.fn(() => <div>Mocked Form</div>),
}));

describe('Header', () => {
  test('should render the Header component with mocked Form and Navigation', () => {
    const historyMock = {};
    const handleSubmitMock = jest.fn();
    render(<Header history={historyMock} handleSubmit={handleSubmitMock} />);
    
    expect(Form).toHaveBeenCalledTimes(1);
    expect(Navigation).toHaveBeenCalledTimes(1);
  });
});
