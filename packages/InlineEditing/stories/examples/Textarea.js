import React from "react";
import Textarea from "../../src/Textarea";
import Card from "../../../Card/src";
import Toast from "../../../Toast/src";

export default function TextareaStory() {
  const [isEditing, setIsEditing] = React.useState(false);
  const [value, setValue] = React.useState(
    `CLICK TO EDIT ME! \n
- use enter to submit your changes
- use shift+enter for a break-line \n
Hack up furballs stare out cat door then go back inside and stare out cat door then go back inside yet massacre a bird in the living room and then look like the cutest and most innocent animal on the planet.`
  );

  function handleOnEditing() {
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
      <Textarea
        isEditing={isEditing}
        isOpen
        onChange={handleChange}
        onClose={handleClose}
        onEditing={handleOnEditing}
        onSubmit={handleSubmit}
        value={value}
      />
    </Card>
  );
}
