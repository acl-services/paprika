import React from "react";
import { render } from "@testing-library/react";
import Heading from "../src";

describe("Heading", () => {
  it("should render content", () => {
    const { getByText } = render(<Heading level={1}>Hello this is me</Heading>);

    expect(getByText(/hello this is me/i)).toBeVisible();
  });

  it("should provide a safe level value if given value is out of bounds", () => {
    const temp = console.error;
    // avoid the error Proptype error console.error when Heading level is > 6
    console.error = () => {};

    const { container } = render(<Heading level={99}>Nice</Heading>);

    expect(container.querySelector("h6")).toBeInTheDocument();
    // restoring console error
    console.error = temp;
  });

  it("should render div element if isSemantic is false", () => {
    const { container } = render(
      <Heading level={1} isSemantic={false}>
        Awesome
      </Heading>
    );

    expect(container.querySelector("div[role='heading']")).toBeInTheDocument();
  });
});
