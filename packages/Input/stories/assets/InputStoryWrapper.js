import React from "react";
import { action } from "@storybook/addon-actions";
import styled from "styled-components";
import { Story } from "storybook/assets/styles/common.styles";

const InputStoryStyles = styled(Story)`
  max-width: 300px;
`;

const InputStoryWrapper = props => {
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

  return <InputStoryStyles>{children({ onChange, onClear, value })}</InputStoryStyles>;
};

export default storyFn => <InputStoryWrapper>{storyFn}</InputStoryWrapper>;
