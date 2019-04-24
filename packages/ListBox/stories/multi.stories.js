import React from "react";
import { storiesOf } from "@storybook/react";
import * as Multi from "./examples/multi";

storiesOf("ListBox / multi", module).add("Basic", () => <Multi.Basic />);
storiesOf("ListBox / multi", module).add("Basic with preselected options", () => <Multi.BasicWithPreselectedOptions />);
storiesOf("ListBox / multi", module).add("Basic is disabled", () => <Multi.BasicIsDisabled />);
storiesOf("ListBox / multi", module).add("Basic is disabled while open", () => <Multi.BasicIsDisabledWhileOpen />);
storiesOf("ListBox / multi", module).add("With Filter", () => <Multi.WithFilter />);
storiesOf("ListBox / multi", module).add("With Filter and nodes as children", () => (
  <Multi.WithFilterAndNodesAsChildren />
));
storiesOf("ListBox / multi", module).add("With Filter and nodes as children and isInline", () => (
  <Multi.WithFilterAndNodesAsChildrenAndIsInline />
));
storiesOf("ListBox / multi", module).add("With Checkbox as pre built-in option", () => (
  <Multi.WithCheckboxAsPreBuiltInOption />
));
storiesOf("ListBox / multi", module).add("Footer", () => <Multi.Footer />);
storiesOf("ListBox / multi", module).add("With Custom Checkers", () => <Multi.WithCustomCheckers />);
storiesOf("ListBox / multi", module).add("With Groups", () => <Multi.WithGroups />);
storiesOf("ListBox / multi", module).add("With Custom Styles", () => <Multi.WithCustomStyles />);
storiesOf("ListBox / multi", module).add("With Groups and have selection by groups", () => (
  <Multi.WithGroupsAndHaveSelectionByGroups />
));
storiesOf("ListBox / multi", module).add("With Groups and have preselected options", () => (
  <Multi.WithGroupsAndHavePreselectedOptions />
));
