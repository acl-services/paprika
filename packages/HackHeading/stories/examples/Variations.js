import React from "react";
import Heading from "../../src";
import StoryHeading from "storybook/components/StoryHeading";
import { Gap } from "storybook/assets/styles/common.styles";
import ExternalLink from "./ExternalLink";
import Paragraph from "./Paragraph";
import DisplayLevel from "./DisplayLevel";
import IsLight from "./IsLight";
import Divider from "./Divider";
import UnderLine from "./Underline";

export default function Variations() {
  return (
    <>
      <Heading level={1} isLight>Title - Display</Heading>
      <Heading level={2} isLight>Title - Large</Heading>
      <Heading level={3} isLight>Title - Medium</Heading>
      <Heading level={4} isLight>Title - Small</Heading>

      <br/>

      <Heading level={2} isLight><b>Title - Large</b></Heading>
      <Heading level={3} isLight><b>Title - Medium</b></Heading>
      <Heading level={4} isLight><b>Title - Small</b></Heading>

      <br/>

      <Heading level={2} isLight><a href="">Title - Large</a></Heading>
      <Heading level={3} isLight><a href="">Title - Medium</a></Heading>
      <Heading level={4} isLight><a href="">Title - Small</a></Heading>

    </>
  );
}
