import React from "react";
import tokens from "@paprika/tokens";
import { css } from "styled-components";
import * as characters from "../../fixtures/characters";
import ListBox from "../../../src";

const styles = {
  container: css`
    padding: 12px;
  `,
  button: css`
    font-size: 16px;
    margin: 2px;
    padding: 8px;
    ${({ isSelected }) => {
      return isSelected ? `background: ${tokens.color.blue}; color: ${tokens.color.white}` : "";
    }}
  `,
};

export const Controlled = () => {
  const [options, setOptions] = React.useState(characters.antiHeroesRaw);

  const handleClickItem = index => () => {
    setOptions(options => {
      const cloneList = options.slice(0);

      // setting all options on false
      cloneList.forEach(item => {
        const it = item;
        it.isSelected = false;
      });

      // only setting the option to be selected
      // index could be null if the user clear the list-box.
      if (index !== null) {
        cloneList[index].isSelected = true;
      }

      return cloneList;
    });
  };

  function handleChange(activeOptionIndex) {
    /** this will be trigger when a uncontrolled change occurred inside the list-box
    let's sync our local state with the one on the list-box so we can turn on / off
    the buttons */
    handleClickItem(activeOptionIndex)();
  }

  return (
    <React.Fragment>
      Click on any button to controlled the ListBox:
      <div css={styles.container}>
        {options.map((item, index) => (
          <button
            css={styles.button}
            type="button"
            key={item.label}
            isSelected={options[index].isSelected}
            onClick={handleClickItem(index)}
            data-pka-anchor={`button_${index}`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <hr />
      <ListBox isInline onChange={handleChange}>
        {options.map(item => {
          return (
            <ListBox.Option key={item.label} isSelected={item.isSelected}>
              {item.label}
            </ListBox.Option>
          );
        })}
      </ListBox>
    </React.Fragment>
  );
};
