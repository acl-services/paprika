import React from "react";
import Input from "../../src";

const InputExample = props => {
  const [value, setValue] = React.useState(props.value || "");

  return (
    <div>
      <Input {...props} onChange={e => setValue(e.target.value)} value={value} />
    </div>
  );
};

export default InputExample;
