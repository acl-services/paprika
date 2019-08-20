import React from "react";
import { Add } from "@paprika/icon/lib/Add";
import Confirmation from "../../src";

const ConfirmationExample = () => {
  return (
    <div>
      <Confirmation
        align="bottom"
        buttonSize="medium"
        confirmLabel="Confirm button text"
        body="Description text"
        onConfirm={closeConfirm => {
          // do action
          closeConfirm();
        }}
        onClose={() => {}}
        heading="Delete filter?"
      >
        {({ isConfirmOpen, handleOpenConfirm }) => (
          <Confirmation.Trigger icon={Add} isConfirmOpen={isConfirmOpen} onHandleOpenConfirm={handleOpenConfirm} />
        )}
      </Confirmation>
    </div>
  );
};

export default ConfirmationExample;
