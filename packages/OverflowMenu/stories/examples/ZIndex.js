import React from "react";
import { repeat } from "storybook/assets/styles/common.styles";
import Confirmation from "@paprika/confirmation";
import OverflowMenu from "../../src";

const Example = () => {
  const handleConfirm = onConfirm => {
    onConfirm();
  };

  const handleCloseConfirm = onCloseMenu => () => {
    onCloseMenu();
  };

  return (
    <>
      <OverflowMenu align="bottom" edge="left" zIndex={99} maxWidth={400}>
        <OverflowMenu.Trigger>Open OverflowMenu</OverflowMenu.Trigger>
        <OverflowMenu.Item isDisabled onClick={() => {}}>
          <code>zIndex</code> of <code>&lt;OverflowMenu&gt;</code> is also <code>99</code>
        </OverflowMenu.Item>
        <OverflowMenu.Divider />
        <OverflowMenu.Item
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
        </OverflowMenu.Item>
      </OverflowMenu>
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
