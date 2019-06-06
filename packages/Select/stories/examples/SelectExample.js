import React from "react";
import Select from "../../src";

const SelectExample = props => {
  const [value, setValue] = React.useState(props.value || "");

  return <Select {...props} onChange={e => setValue(e.target.value)} value={value} />;
};

export default SelectExample;
