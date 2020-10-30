import React from "react";
import { boolean, text, number, select } from "@storybook/addon-knobs";
import { CenteredStory } from "storybook/assets/styles/common.styles";
import Button from "@paprika/button";
import Popover from "../../src";

export const getKnobs = () => ({
  align: select("align", ["bottom", "top", "right", "left"], "bottom"),
  edge: select("edge", { left: "left", right: "right", none: null }, null),
  maxWidth: text("maxWidth", "320"),
  minWidth: text("minWidth", "0"),
  isPortal: boolean("isPortal", true),
  isDark: boolean("isDark", false),
  isEager: boolean("isEager", false),
  offset: number("offset", 12),
});

function Showcase(props) {
  return (
    <CenteredStory>
      <Popover {...props}>
        <Popover.Trigger>
          <Button>Open Popover</Button>
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Card>
            <p>
              Some copy with a{" "}
              <a href="http://www.google.ca" target="_blank" rel="noopener noreferrer">
                link
              </a>
            </p>
            <button type="button">Submit</button>
          </Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
    </CenteredStory>
  );
}

export default () => <Showcase {...getKnobs()} />;
