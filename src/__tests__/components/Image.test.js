import React from "react";
import renderer from 'react-test-renderer';
import { render } from "@testing-library/react";
import Image from "../../components/Image";

describe("Image component", () => {
  test("renders correctly", () => {
    const url = "https://mocking.com/mock.jpg";
    const title = "Example Image";
    
    render(<Image url={url} title={title} />);
    const imageItem = document.querySelector("img");
    
    expect(imageItem).toBeInTheDocument();
    expect(imageItem.src).toBe(url);
    expect(imageItem.alt).toBe(title);
  });

  test('should match snapshot', () => {
    const props = {
      url: 'https://mocking.com/mock.jpg',
      alt: 'Mock Image',
    };

    const component = renderer.create(<Image {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
