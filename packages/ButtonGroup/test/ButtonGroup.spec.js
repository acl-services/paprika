import React from "react";
import { render } from "@testing-library/react";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import ButtonGroup from "../src";

const noop = () => {};

function renderComponent(props = {}) {
  const defaultProps = {
    size: ShirtSizes.LARGE,
    onChange: noop,
  };

  return render(
    <ButtonGroup {...defaultProps} {...props}>
      <ButtonGroup.Button>Button 2</ButtonGroup.Button>
      <ButtonGroup.Button>Button 2</ButtonGroup.Button>
    </ButtonGroup>
  );
}

describe("ButtonGroup", () => {
  it("Renders with default props", () => {
    const { container } = renderComponent();
    expect(container.querySelector("button")).toBeInTheDocument();
  });
});
