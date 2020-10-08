import React from "react";
import PlusIcon from "@paprika/icon/lib/Add";
import { ButtonStory } from "../../Button.stories.styles";
import Button from "../../../src";

export default function ExampleStory() {
  return (
    <ButtonStory>
      <Button kind="flat">Flat</Button>
      <Button kind="secondary">Secondary</Button>
      <Button kind="destructive">Destructive</Button>
      <Button isActive>Active</Button>
      <Button isDisabled>Disabled</Button>
      <Button isPending>Pending</Button>
      <Button isDropdown>Dropdown</Button>
      <Button.Link href="https://youtu.be/IdkCEioCp24?t=92">Link</Button.Link>
      <Button.Icon>
        <PlusIcon />
      </Button.Icon>
      <Button icon={<PlusIcon />}>Icon & text</Button>
      <Button isFullWidth>Full-width</Button>
    </ButtonStory>
  );
}
