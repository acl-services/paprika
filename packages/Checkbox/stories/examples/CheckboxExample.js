import React from "react";
import { Rule } from "storybook/assets/styles/common.styles";
import Checkbox from "../../src";

const CheckboxExample = props => {
  const state1 = React.useState(props.value || true);
  const state2 = React.useState(props.value || false);

  const handleChange = state => () => {
    const [, setIsChecked] = state;
    setIsChecked(prevChecked => !prevChecked);
  };

  return (
    <div>
      <Checkbox {...props} onChange={handleChange(state1)} isChecked={state1[0]}>
        Authentic VHS beard.
      </Checkbox>
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
