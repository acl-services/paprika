import React from "react";
import Add from "@paprika/icon/lib/Add";
import Confirmation from "../../src";

const handleConfirm = handleCloseConfirm => {
  handleCloseConfirm();
};

const ConfirmationExample = () => {
  return (
    <div>
      <Confirmation
        align="right"
        buttonSize="medium"
        confirmLabel="Confirm button text"
        body="Description text"
        onConfirm={handleConfirm}
        onClose={() => {}}
        heading="Delete filter?"
      >
        {({ isConfirmOpen, handleOpenConfirm }) => (
          <Confirmation.TriggerButton icon={<Add />} isConfirmOpen={isConfirmOpen} onOpenConfirm={handleOpenConfirm} />
        )}
      </Confirmation>
    </div>
  );
};

export default ConfirmationExample;
