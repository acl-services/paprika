import React from "react";
import DropdownMenu from "../../src";

const DropdownMenuWithCustomClassExample = () => {
  return (
    <React.Fragment>
      <p>
        Inspect the content of the Popover that is revealed by expanding the DropdownMenu and you will see our class
        added to it.
      </p>
      <DropdownMenu>
        <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
        <DropdownMenu.Content className="myCustomClassName" />
        <DropdownMenu.Item onClick={null}>Item 1</DropdownMenu.Item>
        <DropdownMenu.Item onClick={null}>Item 2</DropdownMenu.Item>
        <DropdownMenu.Item onClick={null}>Item 3</DropdownMenu.Item>
      </DropdownMenu>
    </React.Fragment>
  );
};

export default DropdownMenuWithCustomClassExample;
