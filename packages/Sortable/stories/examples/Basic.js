import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import { storyStyles } from "../Sortable.stories.helpers";
import Sortable from "../../src";

const Example = () => {
  return (
    <Story css={storyStyles}>
      <Sortable onChange={() => {}} onRemove={() => {}}>
        <Sortable.Item>Item One</Sortable.Item>
        <Sortable.Item>Item Two</Sortable.Item>
        <Sortable.Item>Item Three</Sortable.Item>
      </Sortable>
    </Story>
  );
};

export default Example;
