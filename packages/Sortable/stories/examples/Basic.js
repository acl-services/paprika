import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import { storyStyles } from "../Sortable.stories.helpers";
import Sortable from "../../src";

const Example = () => {
  return (
    <Story css={storyStyles}>
      <Sortable onChange={() => {}} onRemove={() => {}}>
        <div>Item One</div>
        <div>Item Two</div>
        <div>Item Three</div>
      </Sortable>
    </Story>
  );
};

export default Example;
