import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../../components/Form";

describe("Form", () => {
  let handleSubmitMock;
  let historyMock;

  beforeEach(() => {
    // Arrange: Set up the necessary mocks and render the component
    handleSubmitMock = jest.fn();
    historyMock = { push: jest.fn() };
    render(<Form handleSubmit={handleSubmitMock} history={historyMock} />);
  });

  afterEach(() => {
    // Clean up mocks after each test
    jest.resetAllMocks();
  });

  it("should update search input value", () => {
    // Arrange: Get the search input element
    const searchInput = screen.getByPlaceholderText("Search...");

    // Act: Simulate a change event on the search input
    fireEvent.change(searchInput, { target: { value: "example" } });

    // Assert: Verify that the search input value has been updated correctly
    expect(searchInput.value).toBe("example");
  });

  it("should call handleSubmit on form submit", () => {
    // Arrange: Get the search input element and its parent form element
    const searchInput = screen.getByPlaceholderText("Search...");
    const form = searchInput.closest("form");

    // Act: Simulate a change event on the search input and a form submit event
    fireEvent.change(searchInput, { target: { value: "example" } });
    fireEvent.submit(form);

    // Assert: Verify that handleSubmit has been called with the expected arguments
    expect(handleSubmitMock).toHaveBeenCalledTimes(1);
    expect(handleSubmitMock).toHaveBeenCalledWith(
      expect.anything(),
      historyMock,
      "example"
    );
  });

  it("should disable button when search entry is empty", () => {
    // Arrange: Get the button element
    const button = screen.getByRole("button");

    // Assert: Verify that the button is disabled when the search entry is empty
    expect(button.disabled).toBe(true);
  });

  it("should enable button when search entry is not empty", () => {
    // Arrange: Get the button element and the search input element
    const button = screen.getByRole("button");
    const searchInput = screen.getByPlaceholderText("Search...");

    // Act: Simulate a change event on the search input
    fireEvent.change(searchInput, { target: { value: "example" } });

    // Assert: Verify that the button is enabled when the search entry is not empty
    expect(button.disabled).toBe(false);
  });
});
