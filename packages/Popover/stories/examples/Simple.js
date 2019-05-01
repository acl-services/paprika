import React from "react";
import Button from "@paprika/button";
import Popover from "../../src";

const text =
  "Lucas ipsum dolor sit amet ackbar darth antilles tatooine yavin maul chewbacca hutt jabba naboo. Mothma moff darth skywalker. Padmé hutt solo mandalore solo chewbacca bothan. Grievous luke baba hutt. ";

export default function Simple() {
  return (
    <React.Fragment>
      <Popover>
        <Popover.Trigger>
          <Button>Card Popover</Button>
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Tip />
          <Popover.Card>{text}</Popover.Card>
        </Popover.Content>
      </Popover>
      <br />
      <br />
      <Popover isDark isEager>
        <Popover.Trigger>
          <Button>
            <span role="img" aria-label="unicorn">
              🦄
            </span>
          </Button>
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Tip />
          <Popover.Card>{text}</Popover.Card>
        </Popover.Content>
      </Popover>
    </React.Fragment>
  );
}
