import React from "react";
import { getStoryName } from "storybook/storyTree";
import { Story } from "storybook/assets/styles/common.styles";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import Card from "../../Card/src";

import TextEditorUncontrolled from "./examples/uncontrolled";
import TextEditorControlled from "./examples/controlled";
import TextEditorIsDisabled from "./examples/isDisabled";

export default {
  title: getStoryName("TextEditor"),
};

export const Uncontrolled = () => {
  return (
    <Story>
      <Card style={{ padding: "8px" }}>
        <TextEditorUncontrolled />
      </Card>
      <SyntaxHighlighter language="javascript">
        {`// env var will depend on your pillar please contact #paprika for assistance
const API_KEY = process.env?.STORYBOOK_TINY_MCE_API_KEY;
return <TextEditor defaultValue={'<p>This is a text editor</p>'} apiKey={API_KEY} />;`}
      </SyntaxHighlighter>
    </Story>
  );
};

export const Controlled = () => {
  return (
    <Story>
      <Card style={{ padding: "8px", minWidth: "220px" }}>
        <TextEditorControlled />
      </Card>

      <SyntaxHighlighter language="javascript">
        {`// env var will depend on your pillar please contact #paprika for assistance
const API_KEY = process.env?.STORYBOOK_TINY_MCE_API_KEY;
const [value, setValue] = React.useState("Type something...");

function handleChange(nextValue) {
  setValue(nextValue);
}

return <TextEditor onChange={handleChange} value={value} apiKey={API_KEY} />;`}
      </SyntaxHighlighter>
    </Story>
  );
};

export const IsDisabled = () => {
  return (
    <Story>
      <Card style={{ padding: "8px" }}>
        <TextEditorIsDisabled />
      </Card>
      <SyntaxHighlighter language="javascript">
        {`// env var will depend on your pillar please contact #paprika for assistance
const API_KEY = process.env?.STORYBOOK_TINY_MCE_API_KEY;
return <TextEditor isDisabled defaultValue={'<p>This is a text editor</p>'} apiKey={API_KEY} />;`}
      </SyntaxHighlighter>
    </Story>
  );
};
