import React from "react";
import { render } from "@testing-library/react";
import NotFound from '../../components/NotFound';

describe("NotFound component", () => {
    
  test("renders correctly", () => {
    render(<NotFound />);
    const headerElement = document.getElementById("h2");
    
    expect(headerElement).toBeInTheDocument();
    expect(headerElement.textContent).toBe("Page Not Found");
  });
});
