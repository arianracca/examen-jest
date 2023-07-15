import React from "react";
import { render } from "@testing-library/react";
import Image from "../../components/Image";

describe("Image component", () => {
  test("renders correctly", () => {
    const url = "https://example.com/image.jpg";
    const title = "Example Image";
    
    render(<Image url={url} title={title} />);
    const imageElement = document.querySelector("img");
    
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.src).toBe(url);
    expect(imageElement.alt).toBe(title);
  });
});
