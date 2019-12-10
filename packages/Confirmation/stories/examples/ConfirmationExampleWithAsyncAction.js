import React from "react";
import Confirmation from "../../src";

const ConfirmationExampleWithAsyncAction = () => {
  const [isPending, setIsPending] = React.useState();
  const handleConfirm = handleCloseConfirm => {
    setIsPending(true);
    setTimeout(() => {
      handleCloseConfirm();
    }, 2000);
  };
  return (
    <div>
      <Confirmation
        align="bottom"
        buttonSize="medium"
        confirmLabel="Confirm Async"
        body="Description text"
        onConfirm={handleConfirm}
        onClose={() => setIsPending(false)}
        isPending={isPending}
        heading="Delete filter?"
      >
        {({ isConfirmOpen, handleOpenConfirm }) => (
          <Confirmation.TriggerButton isConfirmOpen={isConfirmOpen} onOpenConfirm={handleOpenConfirm}>
            Trigger
          </Confirmation.TriggerButton>
        )}
      </Confirmation>
    </div>
  );
};

export default ConfirmationExampleWithAsyncAction;
