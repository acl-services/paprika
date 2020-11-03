import React from "react";
import { Gap } from "storybook/assets/styles/common.styles";
import Button from "../../src";

export default function CommonButtons() {
  return (
    <>
      <Button kind={Button.types.kind.PRIMARY}>Primary</Button>
      <Button>Default</Button>
      <Button kind={Button.types.kind.MINOR}>Minor</Button>
      <Gap.Small />
      <Button size={Button.types.size.LARGE} kind={Button.types.kind.PRIMARY}>
        Large primary
      </Button>
      <Button size={Button.types.size.LARGE}>Large</Button>
      <Button size={Button.types.size.LARGE} kind={Button.types.kind.MINOR}>
        Large minor
      </Button>
      <Gap.Small />
      <Button size={Button.types.size.SMALL} kind={Button.types.kind.PRIMARY}>
        Small primary
      </Button>
      <Button size={Button.types.size.SMALL}>Small</Button>
      <Button size={Button.types.size.SMALL} kind={Button.types.kind.MINOR}>
        Small minor
      </Button>
    </>
  );
}
