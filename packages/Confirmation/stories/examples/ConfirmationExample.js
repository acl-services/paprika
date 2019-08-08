import React from "react";
import Confirmation from "../../src";

const ConfirmationExample = () => {
  // need to show a button here and setOpenState
  return (
    <Confirmation
      // isOpen={isOpen}
      confirmLabel="Delete filter"
      description="Lorem ipsum dolor amet vexillologist tacos selvage narwhal butcher twee ethical hot chicken."
      onConfirm={() => {}}
      onCancel={() => {}}
      heading="Delete filter?"
    />
  );
};

export default ConfirmationExample;
