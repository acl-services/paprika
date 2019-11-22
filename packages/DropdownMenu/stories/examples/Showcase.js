import React from "react";
import { Rule, Tagline } from "storybook/assets/styles/common.styles";
import { select, text } from "@storybook/addon-knobs";
import { AlignTypes } from "@paprika/helpers/lib/customPropTypes";
import L10n from "@paprika/l10n";
import Heading from "@paprika/heading";
import Confirmation from "@paprika/confirmation";
import { DropdownMenuStory } from "../DropdownMenu.stories.styles";
import DropdownMenu from "../../src";

const handleConfirm = onCloseMenu => onCloseConfirm => {
  onCloseConfirm();
  onCloseMenu();
};

const dropdownComponentProps = () => ({
  align: select("align", AlignTypes.ALL, "bottom"),
  edge: select("edge", [AlignTypes.LEFT, AlignTypes.RIGHT], "left"),
  triggerContent: text("trigger text", "Trigger"),
  itemContent: text("item text", "Extra super long label for a Galvanize LinkItem"),
});

const confirmationComponentProps = () => ({
  buttonSize: select("Confirmation Button Size", ["x-small", "small", "medium", "large"], "medium"),
  body: text(
    "confirmation body",
    "Lorem ipsum dolor amet vexillologist tacos selvage narwhal butcher twee ethical hot chicken."
  ),
  label: text("confirmation label", "Delete filter"),
  heading: text("confirmation heading", "Delete filter?"),
});

const ExampleStory = () => (
  <DropdownMenuStory>
    <Heading level={1} displayLevel={2} isLight>
      DropdownMenu Showcase
    </Heading>
    <Tagline>Play with the controls to change the dropdown.</Tagline>
    <Rule />
    <L10n locale="en">
      <DropdownMenu
        style={{ marginLeft: "300px", marginTop: "200px" }}
        edge={dropdownComponentProps().edge}
        align={dropdownComponentProps().align}
      >
        <DropdownMenu.Trigger>{dropdownComponentProps().triggerContent}</DropdownMenu.Trigger>
        <DropdownMenu.Item onClick={() => {}}>Edit</DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => {}}>Duplicate</DropdownMenu.Item>
        <DropdownMenu.Item isDestructive isDisabled onClick={() => {}}>
          Galvanize item
        </DropdownMenu.Item>
        <DropdownMenu.Item isDisabled onClick={() => {}}>
          Galvanize item
        </DropdownMenu.Item>
        <DropdownMenu.LinkItem link="http://www.wegalvanize.com">
          {dropdownComponentProps().itemContent}
        </DropdownMenu.LinkItem>
        <DropdownMenu.LinkItem isExternal link="http://www.bbc.com">
          External link
        </DropdownMenu.LinkItem>
        <DropdownMenu.Item isDisabled onClick={() => {}}>
          Galvanize
        </DropdownMenu.Item>
        <DropdownMenu.Divider />
        <DropdownMenu.Item
          isDestructive
          renderConfirmation={onCloseMenu => {
            return (
              <Confirmation
                buttonSize={confirmationComponentProps().buttonSize}
                body={confirmationComponentProps().body}
                confirmLabel={confirmationComponentProps().label}
                heading={confirmationComponentProps().heading}
                onConfirm={handleConfirm(onCloseMenu)}
              />
            );
          }}
        >
          Delete filter
        </DropdownMenu.Item>
      </DropdownMenu>
    </L10n>
  </DropdownMenuStory>
);

export default () => <ExampleStory {...dropdownComponentProps()} {...confirmationComponentProps()} />;
