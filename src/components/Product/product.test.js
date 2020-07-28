import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import Product from "./Product";

const data = { name: "T-shirt", count: 3, price: 20, promotionalPrice: 15 };

describe("Render Product", () => {
  function renderProduct (callback) {
    render(
      <Product
        name={data.name}
        count={data.count}
        price={data.price}
        promotionalPrice={data.promotionalPrice}
      />
    );
  }
  it("Render Name", () => {
    renderProduct();
    expect(screen.getByText(data.name)).toBeInTheDocument();
  });
  it("Render Count", () => {
    renderProduct();
    expect(screen.getByText(data.count.toString())).toBeInTheDocument();
  });
  it("Render Price", () => {
    renderProduct();
    expect(screen.getByText(data.price.toString())).toBeInTheDocument();
  });
  it("Render Promotional Price", () => {
    renderProduct();
    expect(screen.getByText(data.promotionalPrice.toString())).toBeInTheDocument();
  });
});
