import React from "react";
import { boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Radio from "../../src/Radio";
import types from "../../src/types";

const getKnobs = () => ({
  size: select("size", [types.size.SMALL, types.size.MEDIUM, types.size.LARGE], "medium"),
  isDisabled: boolean("Is Group Disabled", false),
  canDeselect: boolean("canDeselect", false),
});

const Showcase = props => (
    <>
      <Radio.Group
        onChange={activeIndex => {
          action("Radio selection changed to index ")(activeIndex);
        }}
        {...props}
      >
        <Radio defaultIsChecked>Radio 1</Radio>
        <Radio>Radio 2</Radio>
        <Radio>Radio 3</Radio>
        <Radio isDisabled>Radio 4</Radio>
      </Radio.Group>
    </>
  );

export default () => <Showcase {...getKnobs()} />;
