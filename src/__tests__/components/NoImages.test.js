import React from "react";
import { render } from "@testing-library/react";
import NoImages from "../../components/NoImages";

describe("NoImages component", () => {
  test("renders correctly", () => {
    render(<NoImages />);
    const headerElement = document.querySelector("h2");
    const paragraphElement = document.querySelector("p");
    
    expect(headerElement).toBeInTheDocument();
    expect(headerElement.textContent).toBe("No Images Found");
    
    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement.textContent).toBe("Please try a different search term");
  });
});
