import React from "react";
import { storiesOf } from "@storybook/react";
import * as Single from "./examples/single";

storiesOf("ListBox / single", module).add("Basic", () => <Single.Basic />);
storiesOf("ListBox / single", module).add("Basic Inline Display", () => <Single.BasicInlineDisplay />);
storiesOf("ListBox / single", module).add("Basic is disabled", () => <Single.BasicIsDisabled />);
storiesOf("ListBox / single", module).add("Basic is inline disable", () => <Single.BasicIsInlineDisable />);
storiesOf("ListBox / single", module).add("Basic option disabled", () => <Single.BasicOptionDisabled />);
storiesOf("ListBox / single", module).add("Basic with empty option", () => <Single.BasicWithEmptyOption />);
storiesOf("ListBox / single", module).add("Basic with preselected option", () => <Single.BasicPreselectedOption />);

storiesOf("ListBox / single", module).add("Custom Checkers", () => <Single.WithCustomCheckers />);
storiesOf("ListBox / single", module).add("Custom Children", () => <Single.CustomChildrenInline />);

storiesOf("ListBox / single", module).add("Footer", () => <Single.Footer />);
storiesOf("ListBox / single", module).add("Groups", () => <Single.WithGroups />);
storiesOf("ListBox / single", module).add("Has not clear button", () => <Single.HasNotClearButton />);
