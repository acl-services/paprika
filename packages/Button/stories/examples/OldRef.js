import React from "react";
import { action } from "@storybook/addon-actions";
import { Small } from "storybook/assets/styles/common.styles";
import Button from "../../src";

function clickHandler() {
  action("Clicked a button")();
}

export default function OldRef() {
  let buttonRef;

  const setRef = node => {
    buttonRef = node;
  };

  React.useEffect(() => {
    const focusTimer = setTimeout(() => {
      buttonRef.focus();
    }, 1000);
    return () => {
      clearTimeout(focusTimer);
    };
  });

  return (
    <>
      <p>
        <Button onClick={clickHandler} ref={setRef}>
          Button with callback ref
        </Button>
      </p>
      <p>
        <Small>This Button will capture the focus after 1 second.</Small>
      </p>
    </>
  );
}
