import React from "react";
import { Gap } from "storybook/assets/styles/common.styles";
import Button from "@paprika/button";
import Popover from "../../src";

export default function FocusTest() {
  const [isOpen, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button>Vinyl</Button>
      <Gap />
      <Popover>
        <Popover.Trigger>Open Popover</Popover.Trigger>
        <Popover.Content>
          <Popover.Card>Snackwave literally gastropub biodiesel master cleanse.</Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
      <Gap />
      <Popover>
        <Popover.Trigger>
          {onClickHandler => <Button onClick={onClickHandler}>Open Uncontrolled Popover</Button>}
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Card>
            <Button>Aesthetic</Button>
            <Button>Gastropub</Button>
            <Button>Snackwave</Button>
          </Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
      <Gap />
      <Popover isOpen={isOpen} onClose={handleClose}>
        <Button onClick={handleOpen}>Open Controlled Popover</Button>
        <Popover.Content>
          <Popover.Card>
            <Button>Aesthetic</Button>
            <Button>Gastropub</Button>
            <Button>Snackwave</Button>
          </Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
      <Gap />
      <Popover isDark isEager>
        <Popover.Trigger>Open Tooltip</Popover.Trigger>
        <Popover.Content>
          <Popover.Card>Lorem hipsum snackwave</Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
      <Gap />
      <a href="https://www.youtube.com/watch?v=woSuxsthmSg" target="_blank" rel="noopener noreferrer">
        Link
      </a>
    </>
  );
}
