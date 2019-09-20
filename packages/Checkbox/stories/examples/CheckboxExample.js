import React from "react";
import Checkbox from "../../src";

const CheckboxExample = props => {
  const [isChecked, setIsChecked] = React.useState(props.value || true);

  return <Checkbox {...props} onChange={() => setIsChecked(!isChecked)} isChecked={isChecked} />;
};

export default CheckboxExample;
