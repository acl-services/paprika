import React from "react";
import Button from "../../src";

export default function ButtonStates() {
  return (
    <>
      <Button isActive>Active</Button>
      <Button isDisabled>Disabled</Button>
      <Button isPending>Pending</Button>
    </>
  );
}
