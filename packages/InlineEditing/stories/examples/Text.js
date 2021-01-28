import React from "react";
import InlineEditing, { text } from "../../src";

export default function () {
  const [isEditing, setEditing] = React.useState(false);
  const [value, setValue] = React.useState("text test");

  function handleChange({ nextValue, finish }) {
    setValue(nextValue);
    finish();
  }

  function handleEditing() {
    setEditing(prev => !prev);
  }

  return (
    <InlineEditing
      isEditing={isEditing}
      onChange={handleChange}
      onEditing={handleEditing}
      value={value}
      widget={text}
    />
  );
}
