import React from "react";
import styled from "styled-components";
import { Rule } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import PaprikaCheckbox from "../../src/Checkbox";

const Checkbox = styled(PaprikaCheckbox)`
  margin-bottom: 16px;
`;

const { CHECKED, UNCHECKED } = Checkbox.states;

const CheckboxExample = props => {
  const [checkedState, setCheckedState] = React.useState(props.value || UNCHECKED);

  const handleChange = () => setCheckedState(checkedState === CHECKED ? UNCHECKED : CHECKED);

  return (
    <div>
      <Heading level={1} displayLevel={2} isLight>
        Checkbox Grouping
      </Heading>
      <Rule />
      <div>
        <Checkbox {...props} onChange={handleChange} checkedState={checkedState}>
          Slow-carb cold-pressed hexagon forage chillwave
        </Checkbox>
        <Checkbox {...props} onChange={handleChange} checkedState={checkedState}>
          Flexitarian
        </Checkbox>
        <Checkbox {...props} onChange={handleChange} checkedState={checkedState}>
          Locavore
        </Checkbox>
        <Checkbox {...props} tabIndex="-1" onChange={handleChange} checkedState={checkedState}>
          Untabbable
        </Checkbox>
        <Checkbox {...props} onChange={handleChange} checkedState={checkedState} />
        <Checkbox {...props} isDisabled onChange={handleChange} checkedState={checkedState}>
          Disabled
        </Checkbox>
      </div>
    </div>
  );
};

export default CheckboxExample;
