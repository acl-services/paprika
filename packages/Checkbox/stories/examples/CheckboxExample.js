import React from "react";
import Checkbox from "../../src";

const CheckboxExample = props => {
  const [isChecked, setIsChecked] = React.useState(props.value || false);

  return <Checkbox {...props} onChange={e => setIsChecked(e.target.value)} isChecked={isChecked} />;
};

export default CheckboxExample;
