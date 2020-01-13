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

storiesOf("ListBox / ListBox.Trigger / Single", module).add("Trigger using render function", () => (
  <ListBox>
    <ListBox.Trigger>
      {(selected, options, { dispatch, types, refTrigger, propsForTrigger }) => {
        return (
          <button
            type="button"
            {...propsForTrigger()}
            ref={refTrigger}
            onClick={() => {
              dispatch({ type: types.togglePopover });
            }}
          >
            {selected !== null ? options[selected].label : "pick an superhero"}
          </button>
        );
      }}
    </ListBox.Trigger>
    {renderOptions()}
  </ListBox>
));

storiesOf("ListBox / ListBox.Trigger / Multiple", module).add("Trigger using render function", () => (
  <ListBox isMulti>
    <ListBox.Trigger>
      {(selected, options, current, { dispatch, types, refTrigger, propsForTrigger }) => {
        return (
          <button
            type="button"
            {...propsForTrigger()}
            ref={refTrigger}
            onClick={() => {
              dispatch({ type: types.togglePopover });
            }}
          >
            {selected.length ? selected.map(index => options[index].label).join(" ") : "pick multiple superheros"}
          </button>
        );
      }}
    </ListBox.Trigger>
    <ListBox.Option>Loki</ListBox.Option>
    <ListBox.Option>Batman</ListBox.Option>
    <ListBox.Option>Aquaman</ListBox.Option>
    {renderOptions()}
  </ListBox>
));
