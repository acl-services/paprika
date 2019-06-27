import React from "react";
import Switch from "../src/Switch";

function Example(props) {
  const [isChecked, setIsChecked] = React.useState(true);

  function handleChange() {
    setIsChecked(!isChecked);
  }

  return <Switch isChecked={isChecked} onChange={handleChange} {...props} />;
}

export default Example;
