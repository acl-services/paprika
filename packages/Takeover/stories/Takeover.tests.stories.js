import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, select } from "@storybook/addon-knobs";
import { Story, Rule, Tagline, repeat } from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import stylers from "@paprika/stylers";
import Button from "@paprika/button";
import Panel from "@paprika/panel";
import Popover from "@paprika/popover";
import Heading from "@paprika/heading";
import InfoIcon from "@paprika/icon/lib/InfoCircle";
import Takeover from "../src";
import * as types from "../src/types";

// /* Long block to test body scroll locking */
// const LongBlock = styled.div`
//   padding-bottom: 200vh;
// `;

// const DemoFullWidthContent = styled.div`
//   background-image: linear-gradient(to bottom, #79ff85, #70b3ff);
//   flex: 1 1 auto;
// `;

storiesOf(`${storyName}/Backyard/Tests/Screener`, module)
  .add("focus lock content input", () => (
    <TakeoverStory>
      <Takeover.Content>
        <p>With input auto focus</p>
        <input type="text" data-autofocus />
      </Takeover.Content>
    </TakeoverStory>
  ))
  .add("focus lock disabled", () => (
    <TakeoverStory>
      <Takeover.FocusLock autoFocus={false} />
      <Takeover.Content>
        <p>autofocus disabled</p>
      </Takeover.Content>
    </TakeoverStory>
  ));
