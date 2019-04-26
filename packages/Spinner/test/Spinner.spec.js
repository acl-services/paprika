import React from "react";
import { render } from "react-testing-library";
import Spinner from "../src";

describe("Spinner", () => {
  it("should render caption", () => {
    const { getByText } = render(<Spinner caption="Spin me" />);

    expect(getByText(/Spin me/i)).toBeVisible();
  });
});
