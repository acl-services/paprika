import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import PlusIcon from "@paprika/icon/lib/Add";
import Button from "../../src";

const ExampleStory = () => {
  return (
    <Story>
      <Button kind="flat">Flat</Button>
      <Button kind="secondary">Secondary</Button>
      <Button kind="destructive">Destructive</Button>
      <Button isActive>Active</Button>
      <Button isDisabled>Disabled</Button>
      <Button isPending>Pending</Button>
      <Button isDropdown>Dropdown</Button>
      <Button.Link href="#">Link</Button.Link>
      <Button.Icon>
        <PlusIcon />
      </Button.Icon>
      <Button icon={<PlusIcon />}>Icon & text</Button>
      <Button isFullWidth>Full-width</Button>
    </Story>
  );
};

export default ExampleStory;
