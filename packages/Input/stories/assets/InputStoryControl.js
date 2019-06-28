import React from "react";
import { action } from "@storybook/addon-actions";

const InputStoryControl = props => {
  const { children } = props;

  const [value, setValue] = React.useState("");

  const onChangeAction = action("onChange");
  const onClearAction = action("onClear");

  const onChange = e => {
    onChangeAction(e);
    setValue(e.target.value);
  };
  const onClear = () => {
    onClearAction();
    setValue("");
  };

  return children({ onChange, onClear, value });
};

export default storyFn => <InputStoryControl>{storyFn}</InputStoryControl>;
