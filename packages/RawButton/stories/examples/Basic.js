import React from "react";
import { action } from "@storybook/react";
import { Story } from "../../../../.storybook/assets/styles/common.styles";
import RawButton from "../../RawButton";

const btnRef = React.createRef();
const btnRef2 = React.createRef();

const clickHandler = ref => () => {
  action(`Clicked on <${ref.current.nodeName.toLowerCase()}> ("${ref.current.innerText}")`)();
};

const PopoverStory = () => (
  <Story>
    <p>Freegan squid pug heirloom letterpress pork belly, readymade you probably haven’t heard of them.</p>
    <p>
      <RawButton
        ariaText="ceci n'est pas un button"
        onClick={clickHandler(btnRef)}
        buttonRef={btnRef}
        qaAnchor="test-button"
      >
        Raw button
      </RawButton>
    </p>
    <p>
      <RawButton onClick={clickHandler(btnRef2)} buttonRef={btnRef2} isDisabled>
        Disabled button
      </RawButton>
    </p>
  </Story>
);

export default PopoverStory;
