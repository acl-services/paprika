import React from "react";
import { action } from "@storybook/addon-actions";
import { boolean, number, text } from "@storybook/addon-knobs";
import CodeViewer from "storybook/components/CodeViewer";
import StoryHeading from "storybook/components/StoryHeading";
import * as characters from "../fixtures/characters";
import ListBox from "../../src";

const getKnobs = () => ({
  height: number("height", 200),
  isDisabled: boolean("isDisabled", false),
  placeholder: text("placeholder", "Select..."),
  showFilter: boolean("Show Filter", false),
  showFooter: boolean("Show Footer", false),
});

export default function Showcase() {
  const { showFilter, showFooter, ...listBoxProps } = getKnobs();

  return (
    <>
      <StoryHeading level={2}>Single-select – default</StoryHeading>
      <CodeViewer>
        <ListBox {...listBoxProps}>
          {showFilter && <ListBox.Filter />}
          {characters.villians}
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
      </CodeViewer>
      <StoryHeading level={2}>Multi-select – isMulti</StoryHeading>
      <CodeViewer>
        <ListBox {...listBoxProps} isMulti>
          {showFilter && <ListBox.Filter />}
          {characters.villians}
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
      </CodeViewer>
    </>
  );
}
