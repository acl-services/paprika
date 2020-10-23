import React from "react";
import { action } from "@storybook/addon-actions";
import { Gap } from "storybook/assets/styles/common.styles";
import StoryHeading from "storybook/components/StoryHeading";
import PlusIcon from "@paprika/icon/lib/Add";
import Button from "../../src/Button";

function clickHandler() {
  action("Clicked a button")();
}

export default function LinkButtonVariations() {
  return (
    <>
      <StoryHeading>Link Button</StoryHeading>
      <Gap.Small />
      <Button.Link onClick={clickHandler} kind="primary" href="https://youtu.be/IdkCEioCp24?t=92">
        Link
      </Button.Link>
      <Button.Link onClick={clickHandler} kind="secondary" href="https://youtu.be/IdkCEioCp24?t=92" shouldOpenNewTab>
        Link in new tab
      </Button.Link>
      <Button.Link href="https://youtu.be/IdkCEioCp24?t=92" size="small">
        Link small
      </Button.Link>
      <Button.Link href="https://youtu.be/IdkCEioCp24?t=92">Link medium</Button.Link>
      <Button.Link href="https://youtu.be/IdkCEioCp24?t=92" size="large">
        Link large
      </Button.Link>
      <Button.Link href="https://youtu.be/IdkCEioCp24?t=92" shouldOpenNewTab>
        Link in new tab
      </Button.Link>
      <Button.Link kind="secondary" icon={<PlusIcon />} href="https://youtu.be/IdkCEioCp24?t=92" shouldOpenNewTab>
        Button link with icon
      </Button.Link>
      <Gap.Small />
      <Button.Link href="https://youtu.be/IdkCEioCp24?t=92" isDisabled>
        disabled Button.Link
      </Button.Link>
    </>
  );
}
