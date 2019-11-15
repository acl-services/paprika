import React from "react";
import { text, number, select } from "@storybook/addon-knobs";
import styled from "styled-components";
import { CenteredStory } from "storybook/assets/styles/common.styles";
import InfoCircleIcon from "@paprika/icon/lib/InfoCircle";
import Popover from "../../src";

const Gap = styled.div`
  display: inline-block;
  width: 100px;
`;

export const popoverProps = () => ({
  align: select("align", ["bottom", "top", "right", "left"], "bottom"),
  edge: select("edge", ["left", "right", null], null),
  maxWidth: text("maxWidth", "320"),
  minWidth: text("minWidth", "0"),
  offset: number("offset", 12),
});

/* eslint-disable jsx-a11y/tabindex-no-positive */
const ExampleStory = () => (
  <CenteredStory>
    <input tabIndex="3" />
    <Gap />
    <Popover {...popoverProps()}>
      <Popover.Trigger>
        <InfoCircleIcon />
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
    <Gap />
    <input />
  </CenteredStory>
);
/* eslint-enable jsx-a11y/tabindex-no-positive */

export default () => <ExampleStory />;
