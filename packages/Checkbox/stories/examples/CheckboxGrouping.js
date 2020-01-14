import React from "react";
import { Rule } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import Checkbox from "../../src/Checkbox";

const { CHECKED, UNCHECKED } = Checkbox.States;

const CheckboxExample = props => {
  const [checkedState, setCheckedState] = React.useState(props.value || UNCHECKED);

  const handleChange = () => setCheckedState(checkedState === CHECKED ? UNCHECKED : CHECKED);

  return (
    <div>
      <Heading level={1} displayLevel={2} isLight>
        Checkbox Grouping
      </Heading>
      <Rule />
      <div
        css={`
          [data-pka-anchor="checkbox"] {
            margin-bottom: 12px;
          }
        `}
      >
        <Checkbox {...props} onChange={handleChange} checkedState={checkedState}>
          Slow-carb cold-pressed hexagon forage chillwave
        </Checkbox>
        <Checkbox {...props} onChange={handleChange} checkedState={checkedState}>
          Flexitarian
        </Checkbox>
        <Checkbox {...props} onChange={handleChange} checkedState={checkedState}>
          Locavore
        </Checkbox>
        <Checkbox {...props} onChange={handleChange} checkedState={checkedState} />
        <Checkbox {...props} onChange={handleChange} checkedState={checkedState}>
          &nbsp;
        </Checkbox>
        <Checkbox {...props} onChange={handleChange} checkedState={checkedState} />
      </div>
    </div>
  );
};

export default CheckboxExample;
