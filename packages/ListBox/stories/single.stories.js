import React from "react";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import * as Single from "./examples/single";

const storyName = getStoryName("ListBox");

storiesOf(`${storyName}/Examples/Single`, module)
  .add("Basic", () => <Single.Basic />)
  .add("Basic Inline Display", () => <Single.BasicInlineDisplay />)
  .add("Basic Dividers", () => <Single.Dividers />)
  .add("Basic with empty option", () => <Single.BasicWithEmptyOption />)
  .add("Basic with preselected option", () => <Single.BasicPreselectedOption />)
  .add("Custom Children", () => <Single.CustomChildrenInline />)
  .add("Has no clear button", () => <Single.HasNoClearButton />)
  .add("Has prevent default on select", () => <Single.WithPreventDefaultOnSelect />)
  .add("Has scroll connected to element", () => <Single.WithContainerScroll />)
  .add("Controlled isSelected list-box", () => <Single.ControlledIsSelected />)
  .add("UnControlled defaultIsSelected list-box", () => <Single.DefaultIsSelected />)
  .add("onChange list-box", () => <Single.OnChange />)
  .add("ListBox with ListBox.Box", () => <Single.WithListBoxBox />)
  .add("Custom z-index", () => <Single.WithCustomZIndex />);
