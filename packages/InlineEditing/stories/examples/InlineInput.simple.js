import React from "react";
import Input from "@paprika/input";
import Editor from "../../src/Editor";
import Card from "../../../Card/src";

function InlineInput(props) {
  const { value, onSubmit, isEditing, onClick } = props;
  const refInput = React.useRef(null);

  function handleClick() {
    onClick();
  }

  function submit() {
    onSubmit({ nextValue: refInput.current.value });
  }

  return (
    <Editor onEdit={() => {}} isEditing={isEditing} onClick={handleClick}>
      <Editor.Edit>
        {/** we are going to only report back when the user hits Enter */}
        <Input
          defaultValue={value}
          type="text"
          ref={refInput}
          onKeyUp={event => {
            if (event.key === "Enter") {
              submit();
            }
          }}
        />
      </Editor.Edit>
      <Editor.Value>
        <span style={{ textDecoration: "underline" }}>{value}</span>
      </Editor.Value>
    </Editor>
  );
}

export function AppInlineInput() {
  const [value, setValue] = React.useState("Click here to edit");
  const [isEditing, setIsEditing] = React.useState(false);

  function handleClick() {
    setIsEditing(true);
  }

  function handleSubmit({ nextValue }) {
    setValue(nextValue);
    setIsEditing(false);
  }

  return (
    <Card style={{ padding: "16px", width: "220px" }}>
      <InlineInput value={value} onClick={handleClick} isEditing={isEditing} onSubmit={handleSubmit} />
    </Card>
  );
}
