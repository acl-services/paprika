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
    <Confirmation
      align="bottom"
      buttonSize={Confirmation.types.size.MEDIUM}
      confirmLabel="Confirm Async"
      body="Description text"
      onConfirm={handleConfirm}
      onClose={() => setIsPending(false)}
      isPending={isPending}
      heading="Delete filter?"
    >
      <Confirmation.TriggerButton>Trigger</Confirmation.TriggerButton>
    </Confirmation>
  );
};

export default ConfirmationExampleWithAsyncAction;
