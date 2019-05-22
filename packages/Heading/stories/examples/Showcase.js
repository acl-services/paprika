import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import { boolean, select, text } from "@storybook/addon-knobs";
import Heading from "../../src";

export const showcaseProps = () => ({
  children: text("content", "Authentic Heading Succulents"),
  level: select("level", [1, 2, 3, 4, 5, 6], 1),
  displayLevel: select("displayLevel", [1, 2, 3, 4, 5, 6], 1),
  hasDivider: boolean("hasDivider", false),
  hasUnderline: boolean("hasUnderline", false),
  isLight: boolean("isLight", false),
  isSemantic: boolean("isSemantic", true),
  isHidden: boolean("isHidden", false),
  ariaText: text("ariaText"),
});

const ShowcaseStory = props => (
  <Story>
    <Heading {...props}>{props.children}</Heading>
    <p>
      Lorem ipsum dolor amet pop-up sartorial artisan keytar leggings bespoke chia swag flexitarian pabst yr godard
      williamsburg. Marfa lomo four loko hoodie. Hella gastropub irony bitters succulents truffaut godard tbh street
      art. Occupy bicycle rights fingerstache pinterest, af gluten-free health goth put a bird on it 90s stumptown
      edison bulb pug hella. Small batch dreamcatcher mumblecore.
    </p>
  </Story>
);

export default ShowcaseStory;
