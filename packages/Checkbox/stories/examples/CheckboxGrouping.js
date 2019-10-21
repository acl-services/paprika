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
        Checkbox Grouping Example
      </Heading>
      <Rule />
      <div
        css={`
          [data-pka-anchor="checkbox"] {
            margin-bottom: 12px;
          }
        `}
      >
        <Checkbox {...props} onChange={handleChange(state2)} isChecked={state2[0]}>
          Lorem hipsum sartorial readymade green juice chicharrones.
        </Checkbox>
        <Checkbox {...props} onChange={handleChange(state2)} isChecked={state2[0]}>
          Scenester craft beer skateboard.
        </Checkbox>
        <Checkbox {...props} onChange={handleChange(state2)} isChecked={state2[0]}>
          Mixtape.
        </Checkbox>
        <Checkbox {...props} onChange={handleChange(state2)} isChecked={state2[0]}>
          Literally.
        </Checkbox>
      </div>
      <Rule />
      <Checkbox {...props} onChange={handleChange(state2)} isChecked={state2[0]}>
        Polaroid
      </Checkbox>
      <Checkbox {...props} onChange={handleChange(state2)} isChecked={state2[0]}>
        &nbsp;
      </Checkbox>
      <Checkbox {...props} onChange={handleChange(state2)} isChecked={state2[0]} />
      <Checkbox {...props} onChange={handleChange(state2)} isChecked={state2[0]} />
      <Checkbox {...props} onChange={handleChange(state2)} isChecked={state2[0]} />
      <Rule />
    </div>
  );
};

export default CheckboxExample;
