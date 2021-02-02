import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs";
import { Rule } from "storybook/assets/styles/common.styles";
import * as characters from "../fixtures/characters";
import ListBox from "../../src";

const getKnobs = () => ({
  hasImplicitAll: boolean("hasImplicitAll", false),
  isDisabled: boolean("isDisabled", false),
  placeholder: text("placeholder", "Select..."),
  showFilter: boolean("Show Filter", false),
  showFooter: boolean("Show Footer", false),
});

export default function Showcase() {
  const { showFilter, showFooter, ...listBoxProps } = getKnobs();

  const ListBoxChildren = (
    <>
      {showFilter && <ListBox.Filter />}
      {characters.villians}
    </>
  );

  return (
    <>
      <h3>Single</h3>
      <ListBox {...listBoxProps}>
        {ListBoxChildren}
        {showFooter && (
          <ListBox.Footer
            onClickAccept={(index, options) => {
              if (index) {
                action(`Option ${options[index].label} was clicked`)(options[index]);
              }
            }}
          />
        )}
      </ListBox>
      <Rule />
      <h3>Multi</h3>
      <ListBox {...listBoxProps} isMulti>
        {ListBoxChildren}
        {showFooter && (
          <ListBox.Footer
            onClickAccept={(indexes, options) => {
              for (const i of indexes) {
                action(`Option was selected`)(options[i]);
              }
            }}
          />
        )}
      </ListBox>
    </>
  );
}
