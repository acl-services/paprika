import React from "react";
import Button from "@paprika/button";
import Icon from "@paprika/icon/lib/InfoCircle";
import Popover from "../../src";

export default function ButtonExample() {
  return (
    <>
      <Popover>
        <Popover.Trigger data-test-attr="propagated">
          {handler => (
            <Button onClick={handler} icon={<Icon />}>
              More info
            </Button>
          )}
        </Popover.Trigger>
        <Popover.Content data-test-attr="propagated">
          <Popover.Card data-test-attr="propagated">
            Lorem ipsum single-origin kombucha butcher gentrify foraged flannel.
          </Popover.Card>
        </Popover.Content>
        <Popover.Tip data-test-attr="propagated" />
      </Popover>
    </>
  );
}
