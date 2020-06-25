import React from "react";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import Button from "@paprika/button";
import ListBox from "../src";

const storyName = getStoryName("ListBox");
const options = ["Punisher", "Catwoman", "Venom", "Thunderbolts", "Deadpool", "Spawn", "Wolverine"];

function renderOptions() {
  return options.map(option => <ListBox.Option key={option}>{option}</ListBox.Option>);
}

const togglePopover = (dispatch, types) => () => {
  dispatch({ type: types.togglePopover });
};

storiesOf(`${storyName}/Subcomponents/Trigger`, module)
  .add("Basic Trigger with render props", () => (
    <ListBox>
      <ListBox.Trigger>
        {(selected, options, { dispatch, types, refTrigger, propsForTrigger }) => {
          return (
            <Button {...propsForTrigger()} onClick={togglePopover(dispatch, types)} ref={refTrigger}>
              Toggle Listbox
            </Button>
          );
        }}
      </ListBox.Trigger>
      {renderOptions()}
    </ListBox>
  ))
  .add("without clear button", () => (
    <ListBox isInline>
      <ListBox.Trigger hasClearButton={false} />
      <ListBox.Option isSelected>Loki</ListBox.Option>
      {renderOptions()}
    </ListBox>
  ))
  .add("with render function", () => (
    <ListBox>
      <ListBox.Trigger>
        {(selected, options, { dispatch, types, refTrigger, propsForTrigger, isOpen }) => {
          return (
            <button
              type="button"
              {...propsForTrigger()}
              ref={refTrigger}
              onClick={() => {
                dispatch({ type: types.togglePopover });
              }}
            >
              {selected !== null ? options[selected].label : "pick an superhero "}
              {isOpen ? "close" : "open"}
            </button>
          );
        }}
      </ListBox.Trigger>
      {renderOptions()}
    </ListBox>
  ))
  .add("with multiple selection render function", () => (
    <ListBox isMulti>
      <ListBox.Trigger>
        {(selected, options, current, { dispatch, types, refTrigger, propsForTrigger, isOpen }) => {
          return (
            <button
              type="button"
              {...propsForTrigger()}
              ref={refTrigger}
              onClick={() => {
                dispatch({ type: types.togglePopover });
              }}
            >
              {selected.length ? selected.map(index => options[index].label).join(" ") : "pick multiple superheros "}
              {isOpen ? "close" : "open"}
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
