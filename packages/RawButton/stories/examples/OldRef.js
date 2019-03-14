import React from "react";
import { action } from "@storybook/addon-actions";
import { Story, Small } from "storybook/assets/styles/common.styles";
import RawButton from "../../RawButton";

function clickHandler() {
  action("Clicked a button")();
}

const PopoverStory = () => {
  let buttonRef;

  const setRef = node => {
    buttonRef = node;
  };

const clickHandler = getRef => () => {
  if (getRef) {
    const $ref = getRef();
    action(`Clicked on <${$ref.nodeName.toLowerCase()}> ("${$ref.innerText}")`)();
  } else {
    action("Clicked a button")();
  }
};

  return (
    <Story>
      <p>
        <RawButton onClick={clickHandler} ref={setRef}>
          Old school ref
        </RawButton>
      </p>
      <p>
        <Small>This raw button will capture the focus after 1 second.</Small>
      </p>
    </Story>
  );
};

export default PopoverStory;
