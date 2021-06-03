import React from "react";
import tokens from "@paprika/tokens";
import { css } from "styled-components";
import ListBox from "../../../src";
import * as characters from "../../fixtures/characters";

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

export const ControlledAndSelected = () => {
  const [options, setOptions] = React.useState(characters.antiHeroesRaw);

  const handleClick = index => () => {
    setOptions(() => {
      const cloneOptions = options.slice(0);

      cloneOptions[index].isSelected = !cloneOptions[index].isSelected;

      return cloneOptions;
    });
  };

  function handleChange(selectedOptions) {
    /** this will be trigger when a uncontrolled change occurred inside the list-box
    let's sync our local state with the one on the list-box so we can turn on / off
    the buttons */

    setOptions(options => {
      const cloneOptions = options.slice(0);
      cloneOptions.forEach((op, index) => {
        cloneOptions[index].isSelected = selectedOptions.includes(index);
      });

      return cloneOptions;
    });
  }

  return (
    <React.Fragment>
      <div css={styles.container}>
        <p>Click on any button to controlled the ListBox:</p>
        {options.map((item, index) => (
          <button
            css={styles.button}
            type="button"
            key={item.label}
            isSelected={options[index].isSelected}
            onClick={handleClick(index)}
            data-pka-anchor={`button_${index}`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <hr />
      <ListBox isInline isMulti onChange={handleChange}>
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
