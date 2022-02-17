import React from "react";
import Button from "@paprika/button";
import Confirmation from "../../src";

const noop = () => {};

const Screener = () => (
  <>
    <Button id="triggerElement" isSemantic={false} onClick={noop}>
      Trigger
    </Button>
    <Confirmation
      defaultIsOpen
      align="bottom"
      buttonSize={Confirmation.types.size.MEDIUM}
      confirmLabel="Confirm button text"
      body="Description text"
      onConfirm={noop}
      onClose={noop}
      heading="Delete filter?"
      getPositioningElement={() => document.getElementById("triggerElement")}
      offset={4}
    >
      <Confirmation.Content data-your-custom-attribute="your-custom-attribute-value" />
    </Confirmation>
  </>
);

export default Screener;
