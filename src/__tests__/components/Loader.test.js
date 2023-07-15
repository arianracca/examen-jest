import React from 'react';
import { render } from '@testing-library/react';
import Loader from '../../components/Loader';

describe('Loader', () => {
  it('should render the Loader component', () => {
    const { container } = render(<Loader />);
    const loaderElement = container.querySelector('.loader');

    expect(loaderElement).toBeInTheDocument();
  });
});
