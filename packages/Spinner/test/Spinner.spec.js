import React from "react";
import { render, cleanup } from "@testing-library/react";
import Spinner from "../src";

beforeEach(cleanup);

describe("Spinner", () => {
  it("should render caption", () => {
    const { getAllByText } = render(<Spinner caption="Spin me" />);
    expect(getAllByText(/Spin me/i).length).toBe(2);
  });
});
