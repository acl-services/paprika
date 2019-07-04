import React from "react";
import Button from "@paprika/button";
import DropDownMenu from "../../src";

const DropDownMenuExample = props => {
  const [isPending, setIsPending] = React.useState(false);

  return (
    <DropDownMenu {...props}>
      <DropDownMenu.Item onClick={() => {}}>Freight</DropDownMenu.Item>
      <DropDownMenu.Item onClick={() => {}}>Freight</DropDownMenu.Item>
      <DropDownMenu.Item isDestructive isDisabled onClick={() => {}}>
        Freight
      </DropDownMenu.Item>
      <DropDownMenu.Item isDisabled onClick={() => {}}>
        Freight
      </DropDownMenu.Item>
      <DropDownMenu.Item
        isDestructive
        renderConfirmation={onClose => {
          return (
            <div>
              <p>Delete Two?</p>
              <Button
                type="destructive"
                isPending={isPending}
                onClick={() => {
                  setIsPending(true);
                }}
              >
                Delete me
              </Button>
              <Button type="minor" onClick={onClose}>
                Cancel
              </Button>
            </div>
          );
        }}
      >
        Delete filter
      </DropDownMenu.Item>
    </DropDownMenu>
  );
};

export default DropDownMenuExample;
