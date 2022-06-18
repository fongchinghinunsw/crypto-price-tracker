import { render, screen, fireEvent } from "@testing-library/react";
import RealtimePrice from "../RealtimePrice";

describe("Realtime Price", () => {
  it("should render the Bitcoin price block", async () => {
    render(<RealtimePrice />);
    const bpb = await screen.findByText("Bitcoin");
    expect(bpb).toBeInTheDocument();
    const spb = await screen.findByText("Solana");
    expect(spb).toBeInTheDocument();
  });

  it("should show only btc and ltc", async () => {
    render(<RealtimePrice />);
    const inputElement = screen.getByPlaceholderText(/Enter crypto name/i);
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, {
      target: { value: "it" },
    });
    const bpb = await screen.findByText("Bitcoin");
    expect(bpb).toBeInTheDocument();
    // screen.debug();
    const lpb = await screen.findByText("Litecoin");
    expect(lpb).toBeInTheDocument();
    const spb = screen.queryByText("Solana");
    expect(spb).not.toBeInTheDocument();
  });
});
