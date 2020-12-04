import React from "react";
import { action } from "@storybook/addon-actions";
import L10n from "@paprika/l10n";
import Checkbox from "@paprika/checkbox";
import { Fieldset } from "../../src";

const { Label, Instructions, Content } = Fieldset;

export default function CheckboxExample() {
  const checkboxOptions = ["Black Panther", "Spiderman", "Wonder Woman"];

  const handleChange = activeIndex => () => {
    action(`Checkbox ${activeIndex + 1} was clicked.`)();
  };

  const renderCheckboxes = a11yProps =>
    checkboxOptions.map((item, index) => (
      <Checkbox key={item} onChange={handleChange(index)}>
        <Checkbox.Input {...a11yProps} />
        {item}
      </Checkbox>
    ));

  return (
    <L10n>
      <Fieldset>
        <Label>Checkbox group label</Label>
        <Instructions>Some instructions for these checkboxes.</Instructions>
        <Content>{a11yProps => renderCheckboxes(a11yProps)}</Content>
      </Fieldset>
    </L10n>
  );
}
