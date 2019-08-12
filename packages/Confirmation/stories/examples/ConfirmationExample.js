import React from "react";
import Button from "@paprika/button";
import Confirmation from "../../src";

const ConfirmationExample = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleConfirm = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Trigger</Button>

      <Confirmation
        isOpen={isOpen}
        confirmLabel="Delete filter"
        description="Lorem ipsum dolor amet vexillologist tacos selvage narwhal butcher twee ethical hot chicken."
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        onClose={handleClose}
        heading="Delete filter?"
      />
    </div>
  );
};

export default ConfirmationExample;
