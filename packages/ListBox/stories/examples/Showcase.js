import React from "react";
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

  return (
    <>
      <h3>Single</h3>
      <ListBox {...listBoxProps}>
        {showFilter && <ListBox.Filter />}
        {characters.villians}
        {showFooter && <ListBox.Footer />}
      </ListBox>
      <Rule />
      <h3>Multi</h3>
      <ListBox {...listBoxProps} isMulti>
        {showFilter && <ListBox.Filter />}
        {characters.villians}
        {showFooter && <ListBox.Footer />}
      </ListBox>
    </>
  );
}
