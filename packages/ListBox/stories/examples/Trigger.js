import React from "react";
import Button from "@paprika/button";
import ListBox from "../../src";

export const Trigger = () => {
  const options = ["Punisher", "Catwoman", "Venom", "Thunderbolts", "Deadpool", "Spawn", "Wolverine"];

  function renderOptions() {
    return options.map(option => <ListBox.Option key={option}>{option}</ListBox.Option>);
  }

  const togglePopover = (dispatch, types) => () => {
    dispatch({ type: types.togglePopover });
  };

  return (
    <ListBox>
      <ListBox.Trigger>
        {(selected, options, { dispatch, types, refTrigger, propsForTrigger }) => {
          return (
            <Button {...propsForTrigger()} onClick={togglePopover(dispatch, types)} ref={refTrigger}>
              Choose your character
            </Button>
          );
        }}
      </ListBox.Trigger>
      {renderOptions()}
    </ListBox>
  );
};
