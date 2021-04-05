import React from "react";
import TextEditor from "../../src";

export default function TextEditorSimple() {
  const API_KEY = process.env?.STORYBOOK_TINY_MCE_API_KEY;
  const [value, setValue] = React.useState("Type something...");

  function handleChange(nextValue) {
    setValue(nextValue);
  }

  return <TextEditor onChange={handleChange} value={value} apiKey={API_KEY} />;
}
