import React from "react";
import { Gap } from "storybook/assets/styles/common.styles";
import Button from "@paprika/button";
import Popover from "../../src";

export default function FocusTest() {
  const [isOpen, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(prevOpen => !prevOpen);
  };

  return (
    <>
      <Button>Vinyl</Button>
      <Gap />
      <p>
        <Popover>
          <Popover.Trigger>Open Popover</Popover.Trigger>
          <Popover.Content>
            <Popover.Card>
              <Button>Aesthetic</Button>
              <Button>Gastropub</Button>
              <Button>Snackwave</Button>
            </Popover.Card>
          </Popover.Content>
          <Popover.Tip />
        </Popover>
      </p>
      <Gap />
      <p>
        <Popover isOpen={isOpen}>
          <Button onClick={handleClick}>Open Controlled Popover</Button>
          <Popover.Content>
            <Popover.Card>
              <Button>Aesthetic</Button>
              <Button>Gastropub</Button>
              <Button>Snackwave</Button>
            </Popover.Card>
          </Popover.Content>
          <Popover.Tip />
        </Popover>
      </p>
      <Gap />
      <p>
        <Popover isDark isEager>
          <Popover.Trigger>Open Tooltip</Popover.Trigger>
          <Popover.Content>
            <Popover.Card>Lorem hipsum snackwave</Popover.Card>
          </Popover.Content>
          <Popover.Tip />
        </Popover>
      </p>
      <Gap />
      <p>
        <a href="https://www.youtube.com/watch?v=woSuxsthmSg" target="_blank" rel="noopener noreferrer">
          Link
        </a>
      </p>
    </>
  );
}
