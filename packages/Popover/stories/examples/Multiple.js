import React from "react";
import { Gap } from "storybook/assets/styles/common.styles";
import Button from "@paprika/button";
import Popover from "../../src";

export default function FocusTest() {
  return (
    <>
      <Popover>
        <Popover.Trigger>
          {(onClickHandler, a11yAttributes) => (
            <Button onClick={onClickHandler} {...a11yAttributes}>
              Vinyl
            </Button>
          )}
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Card>
            <Button size="small" kind="link">
              Vaporware hexagon prism
            </Button>
          </Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
      <Gap.Large />
      <Popover>
        <Popover.Trigger>
          {(onClickHandler, a11yAttributes) => (
            <Button onClick={onClickHandler} {...a11yAttributes}>
              Locavore
            </Button>
          )}
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Card>Ethical typewriter asymmetrical distillery.</Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
      <Gap.Large />
      <Popover>
        <Popover.Trigger>
          {(onClickHandler, a11yAttributes) => (
            <Button onClick={onClickHandler} {...a11yAttributes}>
              Quinoa
            </Button>
          )}
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Card>Retro kale chips cold-pressed hammock.</Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
    </>
  );
}
