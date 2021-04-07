import React from "react";
import TextEditor from "../../src";
import useKindEditor, { Switch } from "./useKindEditor";

export default function TextEditorExtendingInit() {
  const API_KEY = "t9jqh1aieshznn654ruvg53914pbzyqcni0bhzbcl1iznj8v";
  const { isChecked, onChange } = useKindEditor();

  return (
    <>
      <Switch isChecked={isChecked} onChange={onChange} />
      <TextEditor
        defaultValue={`<p>This is a text editor</p>`}
        apiKey={API_KEY}
        kind={isChecked ? TextEditor.types.kind.ADVANCED : TextEditor.types.kind.SIMPLE}
      >
        <TextEditor.Tiny init={{ menubar: true }} />
      </TextEditor>
    </>
  );
}
