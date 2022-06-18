import { render, screen, fireEvent } from "@testing-library/react";
import Selectbox from "../Selectbox";

const mockOnChange = jest.fn();
const options = ["usd", "hkd", "aud"];

describe("Selectbox", () => {
  it("should select the correct option", () => {
    render(
      <Selectbox
        defaultOption={options[0]}
        options={options}
        onChange={mockOnChange}
      />
    );
    const selectElement = screen.getByTestId("select");
    fireEvent.change(selectElement, { target: { value: "hkd" } });
    let selectOptions = screen.getAllByTestId("select-option");
    expect(selectOptions[0].selected).toBeFalsy();
    expect(selectOptions[1].selected).toBeTruthy();
    expect(selectOptions[2].selected).toBeFalsy();
  });
});
