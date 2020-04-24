import React from "react";
import { storiesOf } from "@storybook/react";
import ListBox from "@paprika/listbox";

const options = [
  "Punisher",
  "Catwoman",
  "Venom",
  "Thunderbolts",
  "Deadpool",
  "Spawn",
  "Wolverine",
  "Loki",
  "Batman",
  "Aquaman",
];

const App = () => {
  const refLisBox = React.useRef(null);
  const togglePopover = (dispatch, types) => () => {
    dispatch({ type: types.togglePopover });
  };

  return (
    <ListBox isMulti ref-={refLisBox}>
      <ListBox.Trigger>
        {(selected, options, current, { dispatch, types, refTrigger, propsForTrigger }) => {
          return (
            <>
              <div {...propsForTrigger()} onClick={togglePopover(dispatch, types)} ref={refTrigger}>
                <ListBox.Filter />
                Toggle Listbox
              </div>
            </>
          );
        }}
      </ListBox.Trigger>

      {options.map(option => {
        return <ListBox.Option key={option}>{option}</ListBox.Option>;
      })}
    </ListBox>
  );
};

storiesOf("ListBoxTags", module).add("Showcase", () => <App />);
