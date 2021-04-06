import React from "react";
import TextEditor from "../../src";

export default function TextEditorControlled() {
  const API_KEY = "t9jqh1aieshznn654ruvg53914pbzyqcni0bhzbcl1iznj8v";
  const [value, setValue] = React.useState("Type something...");

  function handleChange(nextValue) {
    setValue(nextValue);
  }

  return <TextEditor onChange={handleChange} value={value} apiKey={API_KEY} />;
}
