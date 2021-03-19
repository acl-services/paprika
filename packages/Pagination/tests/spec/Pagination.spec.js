import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import Pagination from "../../src/Pagination";

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

  it("Should highlight current page", () => {
    const { getByText, getAllByRole } = renderComponent();

    expect(getByText("2")).toHaveStyle("background-color:	#785cba");
    expect(getAllByRole("button")[2]).toHaveAttribute("aria-current", "true");
  });

  it("should not fail any accessibility tests", async () => {
    const { container } = renderComponent({ a11yText: "custom label" });
    expect(await axe(container)).toHaveNoViolations();
  });
});
