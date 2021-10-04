import React from "react";
import * as characters from "../../fixtures/characters";
import ListBox from "../../../src";

export const OnChange = () => {
  const refListBox = React.useRef(null);
  const [change, setChange] = React.useState(null);
  function handleChange(activeOptionIndex, options) {
    console.log(change);
    setChange(() => options[activeOptionIndex].label);
  }

  return (
    <>
      {change}
      <hr />
      <ListBox ref={refListBox} isInline onChange={handleChange}>
        {characters.antiHeroesRaw.map(item => (
          <ListBox.Option value={item.label} key={item.label}>
            {item.label}
          </ListBox.Option>
        ))}
      </ListBox>
    </>
  );
};
