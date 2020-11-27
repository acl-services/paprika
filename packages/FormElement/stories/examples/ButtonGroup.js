import React from "react";
import ButtonGroup from "@paprika/button-group";
import stylers from "@paprika/stylers";
import FormElement from "../../src";

const { Content, Label } = FormElement;

export default function ButtonGroupExample() {
  const refButtonGroup = React.useRef(null);
  const buttonOptionsArray = ["Black Panther", "Wonder Woman", "Spiderman"];
  const buttonGroupOptions = buttonOptionsArray.map(hero => (
    <ButtonGroup.Item value={hero} key={hero}>
      {hero}
    </ButtonGroup.Item>
  ));

  return (
    <FormElement>
      <Label onClick={() => refButtonGroup.current.focus()}>Form Label</Label>
      <Content>
        <ButtonGroup style={{ marginTop: stylers.spacer(2) }} ref={refButtonGroup}>
          {buttonGroupOptions}
        </ButtonGroup>
      </Content>
    </FormElement>
  );
}
