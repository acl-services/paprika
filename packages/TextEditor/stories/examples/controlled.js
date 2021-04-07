import React from "react";
import TextEditor from "../../src";
import useKindEditor, { Switch } from "./useKindEditor";

export default function TextEditorControlled() {
  const API_KEY = "t9jqh1aieshznn654ruvg53914pbzyqcni0bhzbcl1iznj8v";
  const [value, setValue] = React.useState("Type something...");
  const { isChecked, onChange } = useKindEditor();

  function handleChange(nextValue) {
    setValue(nextValue);
  }

  return (
    <>
      <Switch isChecked={isChecked} onChange={onChange} />
      <TextEditor
        onChange={handleChange}
        kind={isChecked ? TextEditor.types.kind.ADVANCED : TextEditor.types.kind.SIMPLE}
        value={value}
        apiKey={API_KEY}
      />
    </>
  );
}
