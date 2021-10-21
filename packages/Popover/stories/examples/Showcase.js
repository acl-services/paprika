import React from "react";
import { boolean, text, number, select } from "@storybook/addon-knobs";
import { CenteredStory } from "storybook/assets/styles/common.styles";
import Button from "@paprika/button";
import Heading from "@paprika/heading";
import Popover from "../../src";

export const sampleTexts = {
  short: "Hashtag disrupt",
  long: `Lorem hipsum lumbersexual hot chicken austin readymade messenger bag aesthetic meh twee you probably havent
    heard of them 3 wolf moon listicle. Normcore ramps gastropub fanny pack pabst. Hashtag roof party pour-over food
    truck, crucifix try-hard godard biodiesel next level snackwave disrupt flexitarian.`,
  rich: (
    <>
      <Heading level={6}>Scenester tumeric food truck</Heading>
      <p>
        Lorem hipsum lumbersexual listicle normcore hot chicken gluten-free succulents and{" "}
        <a href="https://www.youtube.com/watch?v=woSuxsthmSg" target="_blank" rel="noopener noreferrer">
          pickles
        </a>
        .
      </p>
      <p>
        <Button size={Button.types.size.SMALL}>Hexagon Prism</Button>
      </p>
    </>
  ),
};

export const getBasicKnobs = () => ({
  align: select("align", ["bottom", "top", "right", "left"], "bottom"),
  edge: select("edge", { left: "left", right: "right", none: null }, null),
  maxWidth: text("maxWidth", "320"),
  minWidth: text("minWidth", "0"),
});

export const getKnobs = () => ({
  ...getBasicKnobs(),
  isEager: boolean("isEager", false),
  isDark: boolean("isDark", false),
  offset: number("offset", 12),
  shouldKeepFocus: boolean("shouldKeepFocus", false),
  isPortal: boolean("isPortal", true),
  sampleText: sampleTexts[select("content", ["short", "long", "rich"], "long")],
  isAlwaysOnDom: boolean("isAlwaysOnDom (Content)", false),
});

export default function Showcase() {
  const { sampleText, isAlwaysOnDom, ...popoverProps } = getKnobs();

  return (
    <CenteredStory>
      <Popover {...popoverProps}>
        <Popover.Trigger>
          {(handler, a11yAttributes) => (
            <Button
              onClick={handler}
              onMouseOver={handler}
              onMouseOut={handler}
              onFocus={handler}
              onBlur={handler}
              {...a11yAttributes}
            >
              Open Popover
            </Button>
          )}
        </Popover.Trigger>
        <Popover.Content isAlwaysOnDom={isAlwaysOnDom}>
          <Popover.Card>{sampleText}</Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
    </CenteredStory>
  );
}
