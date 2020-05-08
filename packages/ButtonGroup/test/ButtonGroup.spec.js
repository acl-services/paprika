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
      <ButtonGroup.Item value="1">Button 1</ButtonGroup.Item>
      <ButtonGroup.Item value="2">Button 2</ButtonGroup.Item>
    </ButtonGroup>
  );
}

describe("ButtonGroup", () => {
  it("Renders with default props", () => {
    const { container } = renderComponent();
    expect(container.querySelector("button")).toBeInTheDocument();
  });
});
