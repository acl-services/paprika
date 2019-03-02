import React from "react";
import { action } from "@storybook/addon-actions";
import { Story } from "storybook/assets/styles/common.styles";
import RawButton from "../../RawButton";

let $btn;

const getBtn = () => $btn;

const setRef = node => {
  $btn = node;
};

const clickHandler = getRef => () => {
  if (getRef) {
    const $ref = getRef();
    action(`Clicked on <${$ref.nodeName.toLowerCase()}> ("${$ref.innerText}")`)();
  } else {
    action("Clicked a button")();
  }
};

const PopoverStory = () => (
  <Story>
    <p>
      <RawButton onClick={clickHandler(getBtn)} ref={setRef}>
        Old school button
      </RawButton>
    </p>
    <p>
      <RawButton onClick={clickHandler()}>No ref button</RawButton>
    </p>
  </Story>
);

export default PopoverStory;
