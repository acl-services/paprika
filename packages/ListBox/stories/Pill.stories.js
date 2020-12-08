import React from "react";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import Avatar from "../../Avatar/src";
import Pill, { Pills } from "../src/components/Pill";

const storyName = getStoryName("ListBox");

storiesOf(`${storyName}/Subcomponents/Pill`, module).add("Sizes", () => (
  <>
    <Pills>
      <Pill size="medium">
        <Avatar isRound size="small">
          M
        </Avatar>
        Medium
      </Pill>
    </Pills>
    <Pills>
      <Pill size="large">
        <Avatar isRound size="medium">
          L
        </Avatar>
        Large
      </Pill>
    </Pills>
  </>
));
