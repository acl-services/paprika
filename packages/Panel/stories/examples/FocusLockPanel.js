import React from "react";
import Button from "@paprika/button";
import OverflowMenu from "@paprika/overflow-menu";
import Popover from "@paprika/popover";
import ListBox from "@paprika/list-box";
import Panel from "../../src";

const antiHeroesRaw = [
  { label: "Black Panther", isSelected: false },
  { label: "Wonder Woman", isSelected: false },
  { label: "Spiderman", isSelected: false },
  { label: "The Incredibles", isSelected: false },
  { label: "Thor", isSelected: false },
  { label: "Batman", isSelected: false },
  { label: "Iron Man", isSelected: false },
  { label: "Doctor Strange", isSelected: false },
];

export default function FocusLockPanel() {
  return (
    <>
      <ListBox>
        {antiHeroesRaw.map(item => {
          return (
            <ListBox.Option value={item.label} key={item.label}>
              {item.label}
            </ListBox.Option>
          );
        })}
      </ListBox>
      <br />
      <Popover isEager isDark>
        <Popover.Trigger>
          {(handler, a11yAttributes) => (
            <button
              type="button"
              onMouseOver={handler}
              onMouseOut={handler}
              onFocus={handler}
              onBlur={handler}
              aria-label="info"
              {...a11yAttributes}
            >
              Hover me
            </button>
          )}
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Card>Single-origin foraged kombucha</Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
      <br />
      <Popover>
        <Popover.Trigger>{handler => <Button onClick={handler}>More info</Button>}</Popover.Trigger>
        <Popover.Content>
          <Popover.Card>Lorem hipsum single-origin kombucha butcher gentrify foraged flannel.</Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
      <br />
      <OverflowMenu align="bottom">
        <OverflowMenu.Trigger buttonType={OverflowMenu.Trigger.types.button.RAW}>Click me </OverflowMenu.Trigger>
        <OverflowMenu.Item onClick={() => {}}>First Item</OverflowMenu.Item>
        <OverflowMenu.Item onClick={() => {}}>Second Item</OverflowMenu.Item>
      </OverflowMenu>

      <Panel isOpen>
        <Panel.Header>Header</Panel.Header>
        <Panel.Content>
          <input type="text" data-autofocus />
        </Panel.Content>
      </Panel>
    </>
  );
}
