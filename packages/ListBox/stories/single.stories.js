import React from "react";
import { storiesOf } from "@storybook/react";
import * as Single from "./examples/single";

storiesOf("ListBox / single", module).add("Basic", () => <Single.Basic />);
storiesOf("ListBox / single", module).add("Basic Inline Display", () => <Single.BasicInlineDisplay />);
storiesOf("ListBox / single", module).add("Basic Dividers", () => <Single.Dividers />);
storiesOf("ListBox / single", module).add("Basic is disabled", () => <Single.BasicIsDisabled />);
storiesOf("ListBox / single", module).add("Basic is inline", () => <Single.IsInline />);
storiesOf("ListBox / single", module).add("Basic is inline disable", () => <Single.BasicIsInlineDisable />);
storiesOf("ListBox / single", module).add("Basic option disabled", () => <Single.BasicOptionDisabled />);
storiesOf("ListBox / single", module).add("Basic with empty option", () => <Single.BasicWithEmptyOption />);
storiesOf("ListBox / single", module).add("Basic with preselected option", () => <Single.BasicPreselectedOption />);

storiesOf("ListBox / single", module).add("Custom Children", () => <Single.CustomChildrenInline />);
storiesOf("ListBox / single", module).add("Custom z-index", () => <Single.WithCustomZIndex />);

storiesOf("ListBox / single", module).add("Footer", () => <Single.Footer />);
storiesOf("ListBox / single", module).add("Has no clear button", () => <Single.HasNoClearButton />);
storiesOf("ListBox / single", module).add("Has prevent default on select", () => <Single.WithPreventDefaultOnSelect />);
storiesOf("ListBox / single", module).add("Has scroll connected to element", () => <Single.WithContainerScroll />);

storiesOf("ListBox / single", module).add("Controlled isSelected listbox", () => <Single.ControlledIsSelected />);
storiesOf("ListBox / single", module).add("UnControlled defaultIsSelected listbox", () => <Single.DefaultIsSelected />);
storiesOf("ListBox / single", module).add("onChange listbox", () => <Single.OnChange />);
storiesOf("ListBox / single", module).add("ListBox with ListBox.Box", () => <Single.WithListBoxBox />);
