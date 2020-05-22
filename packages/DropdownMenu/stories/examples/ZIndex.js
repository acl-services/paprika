import React from "react";
import { repeat } from "storybook/assets/styles/common.styles";
import Confirmation from "@paprika/confirmation";
import DropdownMenu from "../../src";

const Example = () => {
  const handleConfirm = onConfirm => {
    onConfirm();
  };

  const handleCloseConfirm = onCloseMenu => () => {
    onCloseMenu();
  };

  return (
    <>
      <DropdownMenu align="bottom" edge="left" zIndex={99} maxWidth={400}>
        <DropdownMenu.Trigger>Open DropdownMenu</DropdownMenu.Trigger>
        <DropdownMenu.Item isDisabled onClick={() => {}}>
          <code>zIndex</code> of <code>&lt;DropdownMenu&gt;</code> is also <code>99</code>
        </DropdownMenu.Item>
        <DropdownMenu.Divider />
        <DropdownMenu.Item
          isDestructive
          renderConfirmation={onCloseMenu => {
            return (
              <Confirmation
                body="Tumeric vegan cardigan cold-pressed flannel cred post-ironic chillwave mustache forage shoreditch fixie."
                confirmLabel="Boom"
                heading="Do it?"
                onConfirm={handleConfirm}
                onClose={handleCloseConfirm(onCloseMenu)}
              />
            );
          }}
        >
          Destroy
        </DropdownMenu.Item>
      </DropdownMenu>
      <div
        css={`
          position: relative;
          z-index: 99;
        `}
      >
        <p>
          The <code>z-index</code> of this content is <code>99</code>.
        </p>
        {repeat(8, key => (
          <p key={key}>
            Hashtag brunch paleo master cleanse gochujang locavore cardigan activated charcoal mumblecore.
          </p>
        ))}
      </div>
    </>
  );
};

export default Example;
