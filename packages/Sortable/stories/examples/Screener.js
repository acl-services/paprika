import React from "react";
import { Story, Rule } from "storybook/assets/styles/common.styles";
import * as helpers from "../Sortable.stories.helpers";
import Sortable from "../../src";

const Example = () => {
  return (
    <Story css={helpers.storyStyles}>
      <Sortable onChange={() => {}} onRemove={() => {}}>
        {helpers.basicChildren(4)}
      </Sortable>
      <Rule />
      <Sortable onChange={() => {}} onRemove={() => {}}>
        {[
          "One",
          "Two Two Two Two Two Two Two Two Two Two Two Two Two Two Two Two",
          "Three Three Three Three Three Three Three Three Three Three Three Three Three Three Three",
          "Four Four Four Four Four Four Four Four Four Four Four Four Four Four Four Four Four Four Four Four Four Four Four Four Four Four Four Four",
        ]}
      </Sortable>
      <Rule />
      <Sortable onChange={() => {}} onRemove={() => {}}>
        {helpers.inputChildren(4)}
      </Sortable>
      <Rule />
      <Sortable onChange={() => {}}>{helpers.inputChildren(4)}</Sortable>
      <Rule />
      <Sortable onChange={() => {}} hasNumbers={false}>
        {helpers.inputChildren(4)}
      </Sortable>
    </Story>
  );
};

export default Example;
