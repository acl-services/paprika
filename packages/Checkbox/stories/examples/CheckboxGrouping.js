import React from "react";
import styled from "styled-components";
import { Rule } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import PaprikaCheckbox from "../../src/Checkbox";

// Styling override example technique #1
const Checkbox = styled(PaprikaCheckbox)`
  margin-bottom: ${stylers.spacer(2)};
`;

// Styling override example technique #2
const CheckboxGroup = styled.div`
  ${Checkbox} {
    border: 1px solid ${tokens.border.color};
  }
`;

const { CHECKED, UNCHECKED } = Checkbox.types.state;

const CheckboxExample = props => {
  const [checkedState, setCheckedState] = React.useState(props.value || UNCHECKED);

  const handleChange = () => setCheckedState(checkedState === CHECKED ? UNCHECKED : CHECKED);

  return (
    <div>
      <Heading level={1} displayLevel={2} isLight>
        Checkbox Grouping
      </Heading>
      <Rule />
      <CheckboxGroup
        // Styling override example technique #3
        css={`
          [data-pka-anchor="checkbox"] {
            padding: ${tokens.space};
          }
        `}
      >
        <Checkbox {...props} onChange={handleChange} checkedState={checkedState}>
          <Checkbox.Input name="diet" />
          Slow-carb cold-pressed hexagon forage chillwave
        </Checkbox>
        <Checkbox {...props} onChange={handleChange} checkedState={checkedState}>
          <Checkbox.Input name="diet" />
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
      </CheckboxGroup>
    </div>
  );
};

export default CheckboxExample;
