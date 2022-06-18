import { render, screen, fireEvent } from "@testing-library/react";
import Inputbox from "../Inputbox";

const mockOnChange = jest.fn();

describe("Inputbox", () => {
  it("should render Inputbox", () => {
    render(<Inputbox onChange={mockOnChange} />);
    const inputElement = screen.getByPlaceholderText(/Enter crypto name/i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should be able to type into input", () => {
    render(<Inputbox onChange={mockOnChange} />);
    const inputElement = screen.getByPlaceholderText(/Enter crypto name/i);
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, {
      target: { value: "bitcoin" },
    });
    expect(inputElement.value).toBe("bitcoin");
  });
});
