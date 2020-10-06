import React from "react";
import { Tagline } from "storybook/assets/styles/common.styles";
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
    <>
      <Tagline>Form Element with ButtonGroup.</Tagline>
      <br />
      <FormElement label="Form Label" onClickLabel={() => refButtonGroup.current.focus()}>
        <FormElement.Content>
          {() => <ButtonGroup ref={refButtonGroup}>{buttonGroupOptions}</ButtonGroup>}
        </FormElement.Content>
        <FormElement.Description>
          <span>Description of this field.</span>
        </FormElement.Description>
        <FormElement.Help>
          Give me some help. <a href="wegalvanize.com">Learn more</a>.
        </FormElement.Help>
      </FormElement>
    </>
  );
}
