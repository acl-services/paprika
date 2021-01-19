import React from "react";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import CalendarIcon from "@paprika/icon/lib/Calendar";
import Avatar from "../../Avatar/src";

import Pill, { Pills } from "../src/components/Pill";

const storyName = getStoryName("ListBox");

storiesOf(`${storyName}/Subcomponents/Pill`, module).add("Sizes", () => (
  <>
    {[
      { pillSize: "medium", avatarSize: "small" },
      { pillSize: "large", avatarSize: "medium" },
    ].map(permutation => (
      <Pills>
        <Pill size={permutation.pillSize}>
          <Avatar isRound size={permutation.avatarSize}>
            WW
          </Avatar>
          {permutation.pillSize} with text Avatar
        </Pill>
        <Pill size={permutation.pillSize}>
          <Avatar isRound size={permutation.avatarSize}>
            <CalendarIcon />
          </Avatar>
          {permutation.pillSize} with Icon Avatar
        </Pill>
        <Pill size={permutation.pillSize}>{`${permutation.pillSize} just text`}</Pill>
      </Pills>
    ))}
  </>
));
