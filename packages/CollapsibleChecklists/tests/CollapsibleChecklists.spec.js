import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CollapsibleChecklists from "../src";

const defaultProps = {
  onChange: () => {},
};

function renderComponent(overrideProps) {
  return render(
    <CollapsibleChecklists {...defaultProps} {...overrideProps}>
      <CollapsibleChecklists.Heading>Flowers</CollapsibleChecklists.Heading>
      <CollapsibleChecklists.Group title="Roses">
        <CollapsibleChecklists.Item isChecked>Damask</CollapsibleChecklists.Item>
        <CollapsibleChecklists.Item isChecked>Eden</CollapsibleChecklists.Item>
        <CollapsibleChecklists.Item isChecked>Lady Banks</CollapsibleChecklists.Item>
      </CollapsibleChecklists.Group>

      <CollapsibleChecklists.Group title="Irises">
        <CollapsibleChecklists.Item isChecked>Siberian</CollapsibleChecklists.Item>
        <CollapsibleChecklists.Item>Yellow</CollapsibleChecklists.Item>
        <CollapsibleChecklists.Item isDisabled>Bearded</CollapsibleChecklists.Item>
        <CollapsibleChecklists.Item>Netted</CollapsibleChecklists.Item>
      </CollapsibleChecklists.Group>

      <CollapsibleChecklists.Group title="Lilies" isDisabled>
        <CollapsibleChecklists.Item>Easter</CollapsibleChecklists.Item>
        <CollapsibleChecklists.Item>Madonna</CollapsibleChecklists.Item>
        <CollapsibleChecklists.Item>Stargazer</CollapsibleChecklists.Item>
        <CollapsibleChecklists.Item>Tiger</CollapsibleChecklists.Item>
        <CollapsibleChecklists.Item>Turks Cap</CollapsibleChecklists.Item>
      </CollapsibleChecklists.Group>
    </CollapsibleChecklists>
  );
}

describe("CollapsibleChecklists", () => {
  it("shows heading name", () => {
    const { getByText } = renderComponent();
    expect(getByText(/flowers/i)).toBeVisible();
  });

  it("shows enabled group name", () => {
    const { getByText } = renderComponent();
    expect(getByText(/roses/i)).toBeVisible();
  });

  it("shows disabled group name", () => {
    const { getByText } = renderComponent();
    expect(getByText(/lilies/i)).toBeVisible();
  });

  it("initially, does not show group items", () => {
    const { getByText } = renderComponent();
    expect(getByText(/damask/i)).not.toBeVisible();
  });

  it("after expand, does show group items", () => {
    const { getByText, getByRole } = renderComponent();
    fireEvent.click(getByRole(/button/i));
    expect(getByText(/damask/i)).toBeVisible();
  });

  it("cannot expand a disabled group", () => {
    const { getByText, container } = renderComponent();
    expect(getByText(/easter/i)).not.toBeVisible();
    fireEvent.click(container.querySelectorAll('[data-pka-anchor="collapsible.heading"]')[2]); // Lilies
    expect(getByText(/easter/i)).not.toBeVisible();
  });

  it("fires callback when select group", () => {
    const onChange = jest.fn();
    const { container } = renderComponent({ onChange });
    fireEvent.click(container.querySelectorAll('input[type="checkbox"]')[0]); // Roses
    expect(onChange).toHaveBeenCalled();
  });

  it("fires callback when select item", () => {
    const onChange = jest.fn();
    const { getByRole, container } = renderComponent({ onChange });
    fireEvent.click(getByRole(/button/i)); // expand 'Flowers'
    fireEvent.click(container.querySelectorAll('input[type="checkbox"]')[1]); // Damask rose
    expect(onChange).toHaveBeenCalled();
  });
});
