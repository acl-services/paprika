import React from "react";
import { action } from "@storybook/addon-actions";
import L10n from "@paprika/l10n";
import Radio from "@paprika/radio";
import { Fieldset } from "../../src";

const { Content, Label, Instructions } = Fieldset;

export default function RadioExample() {
  const radioOptions = ["Spiderman", "The Incredibles", "Thor"];

  const handleChange = activeIndex => {
    action(`Radio ${activeIndex + 1} is selected.`)();
  };

  const renderRadios = a11yProps => (
    <Radio.Group onChange={handleChange}>
      {radioOptions.map(item => (
        <Radio key={item}>
          <Radio.Input {...a11yProps} />
          {item}
        </Radio>
      ))}
    </Radio.Group>
  );

  return (
    <L10n>
      <Fieldset>
        <Label>Radio group label</Label>
        <Instructions>Some instructions for these radio buttons.</Instructions>
        <Content>{a11yProps => renderRadios(a11yProps)}</Content>
      </Fieldset>
    </L10n>
  );
}
