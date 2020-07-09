import React from "react";
import { action } from "@storybook/addon-actions";
import { Story, Small, Gap, breaklines } from "storybook/assets/styles/common.styles";
import RawButton from "../../src";

function clickHandler() {
  action("Clicked a button")();
}

const ExampleStory = () => {
  const buttonRef = React.createRef();

  React.useEffect(() => {
    const focusTimer = setTimeout(() => {
      buttonRef.current.focus();
    }, 1000);
    return () => {
      clearTimeout(focusTimer);
    };
  });

  return (
    <Story>
      <p>
        <RawButton onClick={clickHandler}>RawButton</RawButton>
      </p>
      <Gap />
      <p>
        <RawButton isActive onClick={clickHandler}>
          Active RawButton
        </RawButton>
      </p>
      <Gap />
      <p>
        <RawButton
          a11yText="ceci n'est pas un bouton"
          hasInsetFocusStyle
          onClick={clickHandler}
          data-pka-anchor="test-button"
          ref={buttonRef}
        >
          RawButton with test props
        </RawButton>
      </p>
      <p>
        <Small>This RawButton will capture the focus after 1 second.</Small>
      </p>
      <Gap />
      <p>
        <RawButton isDisabled onClick={clickHandler}>
          Disabled RawButton
        </RawButton>
      </p>
      <Gap />
      <p>
        <RawButton isDisabled tabIndex={0} onClick={clickHandler}>
          Disabled but tabbable
        </RawButton>
      </p>
      <Gap />
      <p>
        <button type="button">Post</button>
      </p>
      {breaklines(34)}
      ...fin.
    </Story>
  );
};

export default ExampleStory;
