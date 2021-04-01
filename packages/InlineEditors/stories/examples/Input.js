import React from "react";
import Input from "../../src/Input";
import Card from "../../../Card/src";
import Toast from "../../../Toast/src";

export default function InputStory() {
  const [isEditing, setIsEditing] = React.useState(false);
  const [value, setValue] = React.useState("Click to edit this text");

  function handleonStart() {
    setIsEditing(true);
  }

  function handleClose() {
    setIsEditing(false);
  }

  function handleSubmit(nextValue) {
    setValue(nextValue);
    setIsEditing(false);
  }

  function handleChange(nextValue) {
    console.log("onChange", nextValue);
  }

  return (
    <Card style={{ padding: "16px", width: "320px" }}>
      <Toast hasCloseButton={false}>WIP: Still requires Product Designer approval</Toast>
      <Input
        isEditing={isEditing}
        isOpen
        onChange={handleChange}
        onClose={handleClose}
        onStart={handleonStart}
        onSubmit={handleSubmit}
        value={value}
      />
    </Card>
  );
}
