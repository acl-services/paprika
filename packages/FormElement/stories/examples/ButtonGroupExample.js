import React from "react";
import ButtonGroup from "@paprika/button-group";
import FormElement from "../../src/FormElement";

export default function ButtonGroupExample() {
  const refButtonGroup = React.useRef(null);
  const buttonOptionsArray = ["Black Panther", "Wonder Woman", "Spiderman", "The Incredibles", "Thor"];
  const buttonGroupOptions = buttonOptionsArray.map(hero => (
    <ButtonGroup.Item value={hero} key={hero}>
      {hero}
    </ButtonGroup.Item>
  ));

  return (
    <FormElement label="Form Label" onClickLabel={() => refButtonGroup.current.focus()}>
      <FormElement.Content>
        {() => <ButtonGroup ref={refButtonGroup}>{buttonGroupOptions}</ButtonGroup>}
      </FormElement.Content>
    </FormElement>
  );
}
