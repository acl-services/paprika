import React from "react";
import { ButtonStory } from "../Button.stories.styles";
import Button from "../../src";

export default function ButtonSubmit() {
  return (
    <ButtonStory>
      <form
        onSubmit={event => {
          alert("submitted");
          event.preventDefault();
        }}
      >
        <input type="text" defaultValue="press enter while focus" />
        <Button isSubmit isSemantic={false}>
          submit
        </Button>
      </form>
    </ButtonStory>
  );
}
