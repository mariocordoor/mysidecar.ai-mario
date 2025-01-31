import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { FormInput } from "./FormInput";

describe("test FormInput Component", () => {
  it("renders correctly with given props", () => {
    render(
      <FormInput name="test-input" type="text" placeholder="Enter text" />,
    );

    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("name", "test-input");
    expect(inputElement).toHaveAttribute("type", "text");
  });

  it("applies custom className correctly", () => {
    render(
      <FormInput
        placeholder="Enter a value"
        name="test-input"
        type="text"
        className="custom-class"
      />,
    );

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveClass("custom-class");
  });

  it("calls onChange handler when input value changes", () => {
    const handleChange = jest.fn();

    render(
      <FormInput
        placeholder="Enter a value"
        name="test-input"
        type="text"
        onChange={handleChange}
      />,
    );

    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "new value" } });

    expect(handleChange).toHaveBeenCalledTimes(1);

    expect(inputElement).not.toHaveValue("old value or empty");
    expect(inputElement).toHaveValue("new value");
  });

  it("renders as required when required prop is set", () => {
    render(
      <FormInput
        placeholder="Enter a value"
        name="test-input"
        type="text"
        required
      />,
    );

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeRequired();
  });
});
