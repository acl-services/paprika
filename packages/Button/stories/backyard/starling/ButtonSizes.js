import React from "react";
import { ButtonStory } from "../../Button.stories.styles";
import Button from "../../../src";

export default function CommonButtons() {
  return (
    <ButtonStory>
      <div>
        <Button kind={Button.types.kind.PRIMARY}>Primary</Button>
        <Button>Default</Button>
        <Button kind={Button.types.kind.MINOR}>Minor</Button>
      </div>
      <br />
      <div>
        <Button size={Button.types.size.LARGE} kind={Button.types.kind.PRIMARY}>
          Large primary
        </Button>
        <Button size={Button.types.size.LARGE}>Large</Button>
        <Button size={Button.types.size.LARGE} kind={Button.types.kind.MINOR}>
          Large minor
        </Button>
      </div>
      <br />
      <div>
        <Button size={Button.types.size.SMALL} kind={Button.types.kind.PRIMARY}>
          Small primary
        </Button>
        <Button size={Button.types.size.SMALL}>Small</Button>
        <Button size={Button.types.size.SMALL} kind={Button.types.kind.MINOR}>
          Small minor
        </Button>
      </div>
    </ButtonStory>
  );
}
