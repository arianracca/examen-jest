import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../../components/Form";

describe("Form", () => {
  let handleSubmitMock;
  let historyMock;

  beforeEach(() => {
    handleSubmitMock = jest.fn();
    historyMock = { push: jest.fn() };
    render(<Form handleSubmit={handleSubmitMock} history={historyMock} />);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("should update search input value", () => {
    const searchInput = screen.getByPlaceholderText("Search...");

    fireEvent.change(searchInput, { target: { value: "mock" } });

    expect(searchInput.value).toBe("mock");
  });

  test("should call handleSubmit on form submit", () => {
    const searchInput = screen.getByPlaceholderText("Search...");
    const form = searchInput.closest("form");

    fireEvent.change(searchInput, { target: { value: "mock" } });
    fireEvent.submit(form);

    expect(handleSubmitMock).toHaveBeenCalledTimes(1);
    expect(handleSubmitMock).toHaveBeenCalledWith(
      expect.anything(),
      historyMock,
      "mock"
    );
  });

  test("should disable button when search entry is empty", () => {
    const button = screen.getByRole("button");

    expect(button.disabled).toBe(true);
  });

  test("should enable button when search entry is not empty", () => {
    const button = screen.getByRole("button");
    const searchInput = screen.getByPlaceholderText("Search...");

    fireEvent.change(searchInput, { target: { value: "example" } });

    expect(button.disabled).toBe(false);
  });
});
