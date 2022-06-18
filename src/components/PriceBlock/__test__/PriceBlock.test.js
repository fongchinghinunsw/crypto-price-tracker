import { render, screen } from "@testing-library/react";
import PriceBlock from "../PriceBlock";

const drop = {
  id: "bitcoin",
  name: "Bitcoin",
  price: 20000,
  volume: 12004041094,
  change: -12241,
};

const rise = {
  id: "bitcoin",
  name: "Bitcoin",
  price: 20000,
  volume: 12004041094,
  change: 12241,
};

describe("PriceBlock", () => {
  it("should render the Bitcoin price block", () => {
    render(
      <PriceBlock
        id={drop.id}
        name={drop.name}
        price={drop.price}
        volume={drop.volume}
        change={drop.change}
      />
    );
    let pb = screen.getByTestId("price-section");
    expect(pb).toHaveTextContent("Bitcoin");
    expect(pb).toHaveTextContent("20000");
    expect(pb).toHaveTextContent("12004041094");
    expect(pb).toHaveTextContent("-12241");
  });

  it("price should be red", () => {
    render(
      <PriceBlock
        id={drop.id}
        name={drop.name}
        price={drop.price}
        volume={drop.volume}
        change={drop.change}
      />
    );
    let pb = screen.getByText("-12241");
    expect(pb).toHaveClass("down");
  });

  it("price should be green", () => {
    render(
      <PriceBlock
        id={rise.id}
        name={rise.name}
        price={rise.price}
        volume={rise.volume}
        change={rise.change}
      />
    );
    let pb = screen.getByText("12241");
    expect(pb).toHaveClass("up");
  });
});
