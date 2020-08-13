import React from "react";
import { render } from "@testing-library/react";
import Pagination from "../src/Pagination";

function renderComponent() {
  return render(<Pagination totalPages={12} currentPage={2} />);
}

describe("Pagination", () => {
  it("Should render", () => {
    const { getByText, getAllByRole } = renderComponent();
    expect(getByText("1")).toBeVisible();
    expect(getByText("2")).toBeVisible();
    expect(getByText("3")).toBeVisible();
    expect(getByText("4")).toBeVisible();
    expect(getByText("12")).toBeVisible();
    expect(getAllByRole("button")[0]).toBeVisible();
    expect(getAllByRole("button")[1]).toBeVisible();
  });
  it("Should highlight current page", () => {});
});
