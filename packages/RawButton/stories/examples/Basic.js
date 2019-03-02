import React from "react";
import { action } from "@storybook/addon-actions";
import { Story } from "storybook/assets/styles/common.styles";
import RawButton from "../../RawButton";

const btnRef = React.createRef();
const btnRef2 = React.createRef();

const clickHandler = ref => () => {
  if (ref) {
    action(`Clicked on <${ref.current.nodeName.toLowerCase()}> ("${ref.current.innerText}")`)();
  } else {
    action("Clicked a button")();
  }
};

const PopoverStory = () => (
  <Story>
    <p>
      <RawButton
        ariaText="ceci n'est pas un bouton"
        onClick={clickHandler(btnRef)}
        qa-test-anchor="test-button"
        ref={btnRef}
      >
        Raw button
      </RawButton>
    </p>
    <p>
      <RawButton onClick={clickHandler()}>No ref button</RawButton>
    </p>
    <p>
      <RawButton isDisabled onClick={clickHandler(btnRef2)} ref={btnRef2}>
        Disabled button
      </RawButton>
    </p>
    {[
      ...Array(34)
        .fill()
        .keys(),
    ].map(index => (
      <br key={index} />
    ))}
    ...fin.
  </Story>
);

export default PopoverStory;
