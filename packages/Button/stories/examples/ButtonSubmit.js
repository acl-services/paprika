import React from "react";
import Input from "@paprika/input";
import { ButtonStory } from "../Button.stories.styles";
import Button from "../../src";

export default function ButtonSubmit() {
  return (
    <ButtonStory>
      <form
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        onSubmit={event => {
          alert("submitted");
          event.preventDefault();
        }}
      >
        <Input type="text" defaultValue="Press enter while focus" />
        <Button isSubmit isSemantic={false}>
          submit
        </Button>
      </form>
    </ButtonStory>
  );
}
