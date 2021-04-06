import React from "react";
import TextEditor from "../../src";

export default function TextEditorSimple() {
  const API_KEY = "t9jqh1aieshznn654ruvg53914pbzyqcni0bhzbcl1iznj8v";
  return <TextEditor isDisabled defaultValue={`<p>This is a text editor</p>`} apiKey={API_KEY} />;
}
