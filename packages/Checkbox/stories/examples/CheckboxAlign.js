import React from "react";
import { Rule } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import Checkbox from "../../src";

const CheckboxExample = props => {
  const state2 = React.useState(props.value || false);

  const handleChange = state => () => {
    const [, setIsChecked] = state;
    setIsChecked(prevChecked => !prevChecked);
  };

  return (
    <div>
      <Heading level={1} displayLevel={2} isLight>
        Checkbox Alignment Right Example
      </Heading>
      <Rule />
      <div
        css={`
          background: #eee;
          text-align: right;
        `}
      >
        <Checkbox {...props} onChange={handleChange(state2)} isChecked={state2[0]}>
          Slow-carb cold-pressed hexagon forage chillwave
        </Checkbox>
        <Checkbox {...props} onChange={handleChange(state2)} isChecked={state2[0]}>
          Flexitarian
        </Checkbox>
        <Checkbox {...props} onChange={handleChange(state2)} isChecked={state2[0]}>
          Locavore
        </Checkbox>
        <Checkbox {...props} onChange={handleChange(state2)} isChecked={state2[0]} />
      </div>
    </div>
  );
};

export default CheckboxExample;
