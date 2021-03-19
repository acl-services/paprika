import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { axe } from "jest-axe";
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

      <CollapsibleChecklists.Group title="Peonies" />

      <CollapsibleChecklists.Group title="Daisies" isIndeterminateByDefault />

      <CollapsibleChecklists.Group title="Petunias" isCheckedByDefault />
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
    const { getByText, getAllByRole } = renderComponent();
    fireEvent.click(getAllByRole(/button/i)[0]);
    expect(getByText(/damask/i)).toBeVisible();
  });

  it("can expand a disabled group", () => {
    const { getByText, container } = renderComponent();
    expect(getByText(/easter/i)).not.toBeVisible();
    fireEvent.click(container.querySelectorAll('[data-pka-anchor="collapsible.icon"]')[2]); // Lilies
    expect(getByText(/easter/i)).toBeVisible();
  });

  it("fires callback when select group", () => {
    const onChange = jest.fn();
    const { container } = renderComponent({ onChange });
    fireEvent.click(container.querySelectorAll('input[type="checkbox"]')[0]); // Roses
    expect(onChange).toHaveBeenCalled();
  });

  it("fires callback when select item", () => {
    const onChange = jest.fn();
    const { getAllByRole, container } = renderComponent({ onChange });
    fireEvent.click(getAllByRole(/button/i)[0]); // expand 'Flowers'
    fireEvent.click(container.querySelectorAll('input[type="checkbox"]')[1]); // Damask rose
    expect(onChange).toHaveBeenCalled();
  });

  it("does not check group when children are unknown and not told to", () => {
    const { container } = renderComponent();
    const peoniesHeading = container.querySelectorAll('[data-pka-anchor="collapsible.heading"]')[3];
    expect(peoniesHeading.querySelector('input[type="checkbox"]').checked).toBe(false);
  });

  it("sets group to indeterminate [even though children are unknown] when told to", () => {
    const { container } = renderComponent();
    const daisiesHeading = container.querySelectorAll('[data-pka-anchor="collapsible.heading"]')[4];
    expect(daisiesHeading.querySelector('input[type="checkbox"]').indeterminate).toBe(true);
  });

  it("sets group to checked [even though children are unknown] when told to", () => {
    const { container } = renderComponent();
    const petuniasHeading = container.querySelectorAll('[data-pka-anchor="collapsible.heading"]')[5];
    expect(petuniasHeading.querySelector('input[type="checkbox"]').checked).toBe(true);
  });

  it("should not fail any accessibility tests", async () => {
    const { container } = renderComponent();
    expect(await axe(container)).toHaveNoViolations();
  });
});
