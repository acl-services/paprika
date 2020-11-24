import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import LockIcon from "@paprika/icon/lib/Lock";
import { storyStyles } from "../Sortable.stories.helpers";
import Sortable from "../../src";

const Example = () => {
  return (
    <Story css={storyStyles}>
      <Sortable onChange={() => {}} className="my-custom-sortable-classname">
        <Sortable.Item sortId="1" className="my-custom-sortable-item-classname" isDragDisabled handle={<LockIcon />}>
          Disabled Item One
        </Sortable.Item>
        <Sortable.Item sortId="2">Item Two</Sortable.Item>
        <Sortable.Item sortId="3">Item Three</Sortable.Item>
      </Sortable>
    </Story>
  );
};

export default Example;
