import React from "react";
import Confirmation from "../../src";

const ConfirmationExample = () => {
  return (
    <div>
      <Confirmation
        isOpenByDefault
        align="bottom"
        buttonSize="medium"
        confirmLabel="Confirm button text"
        description="Description text"
        onConfirm={() => {}}
        onCancel={() => {}}
        onClose={() => {}}
        heading="Delete filter?"
      />
    </div>
  );
};

export default ConfirmationExample;
