import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Loader from '../../components/Loader';

describe('Loader', () => {
  test('should render the Loader component', () => {
    const { container } = render(<Loader />);
    const loaderElement = container.querySelector('.loader');

    expect(loaderElement).toBeInTheDocument();
  });
  
  test('should match snapshot', () => {
    const component = renderer.create(<Loader />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
});
