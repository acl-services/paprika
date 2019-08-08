import React from "react";
import { Rule, Tagline } from "storybook/assets/styles/common.styles";
import { select } from "@storybook/addon-knobs";
import L10n from "@paprika/l10n";
import Heading from "@paprika/heading";
import { DropdownMenuStory } from "../DropdownMenu.stories.styles";
import DropdownMenu from "../../src";

const handleConfirm = handleCloseMenu => {
  handleCloseMenu();
};

const handleCancel = handleCloseMenu => {
  handleCloseMenu();
};

const ExampleStory = () => (
  <DropdownMenuStory>
    <Heading level={1} displayLevel={2} isLight>
      DropdownMenu Showcase
    </Heading>
    <Tagline>Play with the controls to change the dropdown.</Tagline>
    <Rule />
    <L10n locale={select("locale", ["en", "de", "es", "fr", "ja", "pt", "zh"], "en")}>
      <DropdownMenu
        align="bottom"
        renderTrigger={({ isOpen, handleOpenMenu }) => (
          <DropdownMenu.Trigger isOpen={isOpen} handleOpenMenu={handleOpenMenu}>
            Trigger
          </DropdownMenu.Trigger>
        )}
      >
        <DropdownMenu.Item onClick={() => {}}>Edit</DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => {}}>Duplicate</DropdownMenu.Item>
        <DropdownMenu.Item isDisabled onClick={() => {}}>
          Galvanize item
        </DropdownMenu.Item>
        <DropdownMenu.LinkItem link="http://www.wegalvanize.com">Galvanize Link Item</DropdownMenu.LinkItem>
        <DropdownMenu.LinkItem isExternal link="http://www.bbc.com">
          External link
        </DropdownMenu.LinkItem>
        <DropdownMenu.Item isDisabled onClick={() => {}}>
          Galvanize
        </DropdownMenu.Item>
        <DropdownMenu.Divider />
        <DropdownMenu.DestructiveItem
          renderConfirmation={onClose => {
            return (
              <DropdownMenu.Confirmation
                buttonSize={select("Confirmation Button Size", ["x-small", "small", "medium", "large"], "medium")}
                confirmLabel="Delete filter"
                description={
                  <p>Lorem ipsum dolor amet vexillologist tacos selvage narwhal butcher twee ethical hot chicken.</p>
                }
                onConfirm={() => handleConfirm(onClose)}
                onCancel={() => handleCancel(onClose)}
                heading="Delete filter?"
              />
            );
          }}
        >
          Delete filter
        </DropdownMenu.DestructiveItem>
      </DropdownMenu>
    </L10n>
  </DropdownMenuStory>
);

export default () => <ExampleStory />;
