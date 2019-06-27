import React from "react";
import Input from "../../src";

const InputExample = props => {
  const [value, setValue] = React.useState(props.value || "");

  return <Input {...props} onChange={e => setValue(e.target.value)} value={value} />;
};

export default InputExample;
