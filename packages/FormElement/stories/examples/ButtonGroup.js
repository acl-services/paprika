import React from "react";
import ButtonGroup from "@paprika/button-group";
import L10n from "@paprika/l10n";
import FormElement from "../../src";

const { Content, Label, Description } = FormElement;

export default function ButtonGroupExample() {
  const refButtonGroup = React.useRef(null);
  const labelId = "label-buttongroup";
  const buttonOptions = ["Batman", "Wolverine", "Daredevil"];

  function renderGroupOptions(ariaDescribedBy) {
    return buttonOptions.map(item => (
      <ButtonGroup.Item value={item} key={item} aria-describedby={ariaDescribedBy}>
        {item}
      </ButtonGroup.Item>
    ));
  }

  return (
    <L10n>
      <FormElement>
        <Label onClick={() => refButtonGroup.current.focus()} id={labelId}>
          Form Label
        </Label>
        <Content>
          {a11yProps => (
            <ButtonGroup ref={refButtonGroup}>
              {renderGroupOptions(`${labelId} ${a11yProps["aria-describedby"]}`)}
            </ButtonGroup>
          )}
        </Content>
        <Description>Description of button group.</Description>
      </FormElement>
    </L10n>
  );
}
