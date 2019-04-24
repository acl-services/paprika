import React from "react";
import { render } from "react-testing-library";
import Heading from "../Heading";

describe("Heading", () => {
  it("should render content", () => {
    const { getByText } = render(<Heading level={1}>Hello this is me</Heading>);

    expect(getByText(/hello this is me/i)).toBeVisible();
  });

  it("should provide a safe level value if given value is out of bounds", () => {
    const { container } = render(<Heading level={99}>Nice</Heading>);

    expect(container.querySelector("h6")).toBeInTheDocument();
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
