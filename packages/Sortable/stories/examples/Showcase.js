import React from "react";
import { boolean, select } from "@storybook/addon-knobs";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import Heading from "@paprika/heading";
import * as helpers from "../Sortable.stories.helpers";
import Sortable from "./Functional";

const childrenSelections = {
  basic: helpers.basicChildren(8),
  long: helpers.longChildren(100),
  inputs: helpers.inputChildren(8),
  multiple: helpers.multipleChildren(8),
};

const sortableKnobs = () => {
  const knobs = {
    children: childrenSelections[select("children", Object.keys(childrenSelections), "basic")],
    hasNumbers: boolean("hasNumbers", true),
  };
  if (!boolean("onRemove", true)) knobs.onRemove = null;

  return knobs;
};

const Example = props => (
  <Story css={helpers.storyStyles}>
    <Heading level={1} displayLevel={2} isLight>
      <code>&lt;Sortable /&gt;</code>
    </Heading>
    <Tagline>Enjoy the dragon + drop-in.</Tagline>
    <Rule />
    <Sortable {...props} />
  </Story>
);

export default () => <Example {...sortableKnobs()} />;
