import React from "react";
import PlusIcon from "@paprika/icon/lib/Add";
import { Gap } from "storybook/assets/styles/common.styles";
import Button from "../../src";

export default function ExampleStory() {
  return (
    <>
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
      <Gap.Small />
      <Button isFullWidth>Full-width</Button>
    </>
  );
}
