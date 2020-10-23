import React from "react";
import ButtonGroup from "@paprika/button-group";
import stylers from "@paprika/stylers";
import FormElement from "../../src/FormElement";

export default function ButtonGroupExample() {
  const refButtonGroup = React.useRef(null);
  const buttonOptionsArray = ["Black Panther", "Wonder Woman", "Spiderman"];
  const buttonGroupOptions = buttonOptionsArray.map(hero => (
    <ButtonGroup.Item value={hero} key={hero}>
      {hero}
    </ButtonGroup.Item>
  ));

  return (
    <FormElement label="Form Label" onClickLabel={() => refButtonGroup.current.focus()}>
      <FormElement.Content>
        {() => (
          <ButtonGroup style={{ marginTop: stylers.spacer(2) }} ref={refButtonGroup}>
            {buttonGroupOptions}
          </ButtonGroup>
        )}
      </FormElement.Content>
    </FormElement>
  );
}
