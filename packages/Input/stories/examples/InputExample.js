import React from "react";
import Input from "../../src";

const InputExample = React.forwardRef((props, ref) => {
  const [value, setValue] = React.useState(props.value || "");

  return <Input {...props} onChange={e => setValue(e.target.value)} ref={ref} value={value} />;
});

export default InputExample;
