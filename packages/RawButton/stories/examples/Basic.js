import React from "react";
import { action } from "@storybook/addon-actions";
import { Story, Small, Rule } from "storybook/assets/styles/common.styles";
import RawButton from "../../RawButton";

function clickHandler() {
  action("Clicked a button")();
}

const ExampleStory = () => {
  const buttonRef = React.createRef();

  setTimeout(() => {
    buttonRef.current.focus();
  }, 1000);

  return (
    <Story>
      <p>
        <RawButton onClick={clickHandler}>RawButton</RawButton>
      </p>
      <Rule />
      <p>
        <RawButton
          a11yText="ceci n'est pas un bouton"
          hasInsetFocusStyle
          onClick={clickHandler}
          data-qa-anchor="test-button"
          ref={buttonRef}
        >
          RawButton with test props
        </RawButton>
      </p>
      <p>
        <Small>This RawButton will capture the focus after 1 second.</Small>
      </p>
      <Rule />
      <p>
        <RawButton isDisabled onClick={clickHandler}>
          Disabled RawButton
        </RawButton>
      </p>
      {[...Array(34).keys()].map(index => (
        <br key={index} />
      ))}
      ...fin.
    </Story>
  );
};

export default ExampleStory;
