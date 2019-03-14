import React from "react";
import ListBox from "@paprika/listbox";

export default function CustomCheckers() {
  return (
    <ListBox
      isMulti
      renderChecker={(isChecked, index, state) => {
        if (state.options[index].isDisabled) {
          return `🔒`;
        }

        return isChecked ? "😇" : "😢";
      }}
      zIndex={10000}
      getScrollContainer={() => document.querySelector("#root > div")}
    >
      <ListBox.Option>Spiderman</ListBox.Option>
      <ListBox.Option isDisabled>Venom</ListBox.Option>
      <ListBox.Option>Carnage</ListBox.Option>
    </ListBox>
  );
}
