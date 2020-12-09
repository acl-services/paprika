import React from "react";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import Avatar from "../../Avatar/src";
import CalendarIcon from "../../Icon/lib/Calendar";

import Pill, { Pills } from "../src/components/Pill";

const storyName = getStoryName("ListBox");

storiesOf(`${storyName}/Subcomponents/Pill`, module).add("Sizes", () => (
  <>
    <Pills>
      <Pill size="medium">
        <Avatar isRound size="small">
          WW
        </Avatar>
        Medium
      </Pill>
      <Pill size="medium">
        <Avatar isRound size="small">
          <CalendarIcon />
        </Avatar>
        with Icon
      </Pill>
    </Pills>
    <Pills>
      <Pill size="large">
        <Avatar isRound size="medium">
          WW
        </Avatar>
        Large
      </Pill>
      <Pill size="large">
        <Avatar isRound size="medium">
          <CalendarIcon />
        </Avatar>
        with Icon
      </Pill>
    </Pills>
  </>
));
