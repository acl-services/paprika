import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "@paprika/button";
import ListBox from "../src";

const options = ["Punisher", "Catwoman", "Venom", "Thunderbolts", "Deadpool", "Spawn", "Wolverine"];

function renderOptions() {
  return options.map(option => <ListBox.Option key={option}>{option}</ListBox.Option>);
}

const togglePopover = (dispatch, types) => () => {
  dispatch({ type: types.togglePopover });
};

function renderTrigger(state, dispatch, { propsForTrigger, types, refTrigger }) {
  return (
    <Button {...propsForTrigger()} onClick={togglePopover(dispatch, types)} ref={refTrigger}>
      Toggle Listbox
    </Button>
  );
}

storiesOf("ListBox / ListBox.Trigger", module).add("Basic Trigger with render props", () => (
  <ListBox>
    <ListBox.Trigger>{renderTrigger}</ListBox.Trigger>
    {renderOptions()}
  </ListBox>
));

storiesOf("ListBox / ListBox.Trigger", module).add("Trigger has not clear button", () => (
  <ListBox isInline>
    <ListBox.Trigger hasClearButton={false} />
    <ListBox.Option isSelected>Loki</ListBox.Option>
    {renderOptions()}
  </ListBox>
));
