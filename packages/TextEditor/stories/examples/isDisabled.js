import React from "react";
import TextEditor from "../../src";

export default function TextEditorSimple() {
  const API_KEY = process.env?.STORYBOOK_TINY_MCE_API_KEY;
  return <TextEditor isDisabled defaultValue={`<p>This is a text editor</p>`} apiKey={API_KEY} />;
}
