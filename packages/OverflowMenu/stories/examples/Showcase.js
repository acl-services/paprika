import React from "react";
import { Rule, Tagline } from "storybook/assets/styles/common.styles";
import { select, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { AlignTypes } from "@paprika/helpers";
import L10n from "@paprika/l10n";
import Heading from "@paprika/heading";
import Confirmation from "@paprika/confirmation";
import { OverflowMenuStory } from "../OverflowMenu.stories.styles";
import OverflowMenu from "../../src";

const handleConfirm = onCloseMenu => onCloseConfirm => {
  onCloseConfirm();
  onCloseMenu();
};

const overflowComponentProps = () => ({
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

const handleItemClick = val => {
  action("Clicked a item")(val);
};

const ExampleStory = () => (
  <OverflowMenuStory>
    <Heading level={1} displayLevel={2} isLight>
      OverflowMenu Showcase
    </Heading>
    <Tagline>Play with the controls to change the overflow.</Tagline>
    <Rule />
    <L10n locale="en">
      <OverflowMenu
        style={{ marginLeft: "300px", marginTop: "200px" }}
        edge={overflowComponentProps().edge}
        align={overflowComponentProps().align}
      >
        <OverflowMenu.Trigger>{overflowComponentProps().triggerContent}</OverflowMenu.Trigger>
        <OverflowMenu.Item onClick={handleItemClick}>Edit</OverflowMenu.Item>
        <OverflowMenu.Item onClick={handleItemClick}>Duplicate</OverflowMenu.Item>
        <OverflowMenu.Item isDestructive isDisabled onClick={handleItemClick}>
          Galvanize item
        </OverflowMenu.Item>
        <OverflowMenu.Item isDisabled onClick={handleItemClick}>
          Galvanize item
        </OverflowMenu.Item>
        <OverflowMenu.LinkItem isExternal link="http://www.wegalvanize.com">
          {overflowComponentProps().itemContent}
        </OverflowMenu.LinkItem>
        <OverflowMenu.LinkItem isExternal link="http://www.bbc.com">
          External link
        </OverflowMenu.LinkItem>
        <OverflowMenu.Item isDisabled onClick={handleItemClick}>
          Galvanize
        </OverflowMenu.Item>
        <OverflowMenu.Divider />
        <OverflowMenu.Item
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
        </OverflowMenu.Item>
      </OverflowMenu>
    </L10n>
  </OverflowMenuStory>
);

export default () => <ExampleStory {...overflowComponentProps()} {...confirmationComponentProps()} />;
