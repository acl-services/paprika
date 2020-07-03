import React from "react";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import * as Single from "./examples/single";

const storyName = getStoryName("ListBox");

storiesOf(`${storyName}/Examples/Single`, module)
  .add("Basic", () => <Single.Basic />)
  .add("Basic Inline Display", () => <Single.BasicInlineDisplay />)
  .add("Basic Dividers", () => <Single.Dividers />)
  .add("Basic is disabled", () => <Single.BasicIsDisabled />)
  .add("Basic is inline", () => <Single.IsInline />)
  .add("Basic is inline disable", () => <Single.BasicIsInlineDisable />)
  .add("Basic option disabled", () => <Single.BasicOptionDisabled />)
  .add("Basic with empty option", () => <Single.BasicWithEmptyOption />)
  .add("Basic with preselected option", () => <Single.BasicPreselectedOption />)
  .add("Basic with implicit All", () => <Single.BasicWithImplicitAll />)
  .add("Custom Children", () => <Single.CustomChildrenInline />)
  .add("Custom z-index", () => <Single.WithCustomZIndex />)
  .add("Footer", () => <Single.Footer />)
  .add("Has no clear button", () => <Single.HasNoClearButton />)
  .add("Has prevent default on select", () => <Single.WithPreventDefaultOnSelect />)
  .add("Has scroll connected to element", () => <Single.WithContainerScroll />)
  .add("Controlled isSelected listbox", () => <Single.ControlledIsSelected />)
  .add("UnControlled defaultIsSelected listbox", () => <Single.DefaultIsSelected />)
  .add("onChange listbox", () => <Single.OnChange />)
  .add("ListBox with ListBox.Box", () => <Single.WithListBoxBox />);
