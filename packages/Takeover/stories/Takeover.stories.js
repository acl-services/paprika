import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { repeat } from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import { showcaseStoryParameters } from "storybook/assets/storyParameters";
import ExampleStory from "storybook/components/ExampleStory";
import Takeover from "../src";
import TakeoverStory from "./TakeoverStory";

export default {
  title: getStoryName("Takeover"),
  component: Takeover,
};

export const showcase = () => (
  <ExampleStory storyName="Takeover" tagline={ExampleStory.defaultTaglines.showcase}>
    <TakeoverStory>
      <Takeover.Content>
        {repeat(12, key => (
          <p key={key}>
            Quis commodo officia tempor excepteur. Deserunt ullamco ex ipsum tempor laboris quis minim ullamco mollit
            irure quis officia in proident. Id irure laborum enim aliqua irure dolor voluptate ea nostrud ea consequat
            ex. Aliquip laborum dolore dolore enim nostrud aute non nostrud. Nulla duis anim aliquip dolor ipsum ex
            culpa labore sint culpa occaecat. Elit exercitation officia cillum anim consectetur aute pariatur quis esse.
            Aute minim nisi esse eu ex exercitation consectetur sit eu fugiat velit non laborum aliqua. Veniam ea
            voluptate culpa ex nulla anim aliquip nisi eu excepteur sit laboris cupidatat. Cillum elit magna ea minim
            cillum eu velit ipsum. Adipisicing dolore culpa sit ex. Occaecat quis reprehenderit deserunt aute officia.
          </p>
        ))}
      </Takeover.Content>
    </TakeoverStory>
  </ExampleStory>
);

showcase.story = {
  decorators: [withKnobs],
  parameters: showcaseStoryParameters,
};
