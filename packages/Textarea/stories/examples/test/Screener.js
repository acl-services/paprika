import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Textarea from "../../../src/Textarea";

const veryLongText =
  "Raindrops the size of bullets thundered on the castle windows for days on end; the lake rose, the flower beds turned into muddy streams, and Hagrids pumpkins swelled to the size of garden sheds. Oliver Woods enthusiasm for regular training sessions, however, was not dampened, which was why Harry was to be found, late one stormy Saturday afternoon a few days before Halloween, returning to Gryffindor Tower, drenched to the skin and splattered with mud. Even aside from the rain and wind it had not been a happy practice session. Fred and George, who had been spying on the Slytherin team, had seen for themselves the speed of those new Nimbus Two Thousand and Ones. They reported that the Slytherin team was no more than seven greenish blurs, shooting through the air like missiles.";

const ScreenerStory = () => (
  <Story>
    <Textarea placeholder="Tell me a story..." size="small" a11yText="story" />
    <Textarea placeholder="Tell me a story..." a11yText="story" />
    <Textarea placeholder="Tell me a story..." size="large" a11yText="story" />
    <Textarea isDisabled value="This is my disabled story" a11yText="story" />
    <Textarea isReadOnly value="This is my read only story" a11yText="story" />
    <Textarea value={veryLongText} a11yText="story" canExpand />
  </Story>
);

export default ScreenerStory;
