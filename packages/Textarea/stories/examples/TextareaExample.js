import React from "react";
import Textarea from "../../Textarea";

const TextareaExample = props => {
  const [value, setValue] = React.useState(props.value || "");

  return (
    <div>
      <Textarea {...props} onChange={e => setValue(e.target.value)} value={value} />
    </div>
  );
};

export default TextareaExample;
