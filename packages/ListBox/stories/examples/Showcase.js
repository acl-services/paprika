import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, number, select, text } from "@storybook/addon-knobs";
import CodeViewer from "storybook/components/CodeViewer";
import StoryHeading from "storybook/components/StoryHeading";
import * as characters from "../fixtures/characters";
import ListBox from "../../src";

const getKnobs = () => ({
  size: select("size", Object.values(ListBox.types.size), ListBox.types.size.MEDIUM),
  height: number("height", 200),
  hasError: boolean("hasError", false),
  isDisabled: boolean("isDisabled", false),
  isInline: boolean("isInline", false),
  isReadOnly: boolean("isReadOnly", false),
  placeholder: text("placeholder", ""),
  showFilter: boolean("Show Filter", false),
  showFooter: boolean("Show Footer", false),
});

export default function Showcase() {
  const { showFilter, showFooter, ...listBoxProps } = getKnobs();

  function handleOptionClicked(index, options) {
    action(`Option index ${[index]} was selected`)(options);
  }

  return (
    <>
      <StoryHeading level={2}>Single-select – default</StoryHeading>
      <CodeViewer>
        <ListBox onChange={handleOptionClicked} {...listBoxProps}>
          {showFilter && <ListBox.Filter />}
          <ListBox.Divider>Villians</ListBox.Divider>
          {characters.villians}
          <ListBox.Divider>Heroes</ListBox.Divider>
          {characters.heroes}
          {showFooter && <ListBox.Footer onClickAccept={handleOptionClicked} />}
        </ListBox>
      </CodeViewer>
      <StoryHeading level={2}>Multi-select – isMulti</StoryHeading>
      <CodeViewer>
        <ListBox onChange={handleOptionClicked} {...listBoxProps} isMulti>
          {showFilter && <ListBox.Filter />}
          <ListBox.Divider>Villians</ListBox.Divider>
          {characters.villians}
          <ListBox.Divider>Heroes</ListBox.Divider>
          {characters.heroes}
          {showFooter && <ListBox.Footer onClickAccept={handleOptionClicked} />}
        </ListBox>
      </CodeViewer>
    </>
  );
}
