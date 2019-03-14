import React from "react";
import { action } from "@storybook/addon-actions";
import { Story, Small } from "storybook/assets/styles/common.styles";
import RawButton from "../../RawButton";

function clickHandler() {
  action("Clicked a button")();
}

const PopoverStory = () => {
  const buttonRef = React.createRef();

  setTimeout(() => {
    buttonRef.current.focus();
  }, 1000);

  return (
    <Story>
      <p>
        <RawButton
          ariaText="ceci n'est pas un bouton"
          onClick={clickHandler}
          qa-test-anchor="test-button"
          ref={buttonRef}
        >
          Raw button
        </RawButton>
      </p>
      <p>
        <Small>This raw button will capture the focus after 1 second.</Small>
      </p>
      <hr />
      <p>
        <RawButton isDisabled onClick={clickHandler}>
          Disabled button
        </RawButton>
      </p>
      <p>
        <Small>This raw button is disabled.</Small>
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
};

export default PopoverStory;
