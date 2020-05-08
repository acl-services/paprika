import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Button from "../../src";

const ExampleStory = () => {
  const button1Ref = React.useRef(null);
  const button3Ref = React.useRef(null);

  React.useEffect(() => {
    const focusTimer = setTimeout(() => {
      button1Ref.current.focus();
    }, 1000);
    return () => {
      clearTimeout(focusTimer);
    };
  });

  return (
    <Story>
      <p>
        Buttons get a focus ring when:
        <ol>
          <li>they get focus using the keyboard</li>
          <li>they get focus programatically</li>
        </ol>
        They do not get a focus ring when you click on them with the mouse.
      </p>
      <hr />
      <p>
        One second after page load, Button1 receives focus programatically and therefore it should have the focus ring.
      </p>
      <p>
        Then using the mouse, click on Button2 and the focus will programatically move to Button3 and therefore it
        should get the focus ring.
      </p>
      <p>Button4 is neutral. Click on it using the mouse and it will not have focus.</p>
      <p>
        <Button onClick={() => {}} ref={button1Ref}>
          Button1
        </Button>
        <Button
          onClick={() => {
            button3Ref.current.focus();
          }}
        >
          Button2
        </Button>
        <Button onClick={() => {}} ref={button3Ref}>
          Button3
        </Button>
        <Button onClick={() => {}}>Button4</Button>
      </p>
    </Story>
  );
};

export default ExampleStory;
