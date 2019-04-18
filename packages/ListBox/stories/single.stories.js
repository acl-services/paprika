import React from "react";
import { storiesOf } from "@storybook/react";
import * as Ex from "./examples/single";

storiesOf("ListBox / single", module).add("Basic", () => <Ex.Basic />);
storiesOf("ListBox / single", module).add("Basic with empty option", () => <Ex.BasicWithEmptyOption />);
storiesOf("ListBox / single", module).add("Basic Inline Display", () => <Ex.BasicInlineDisplay />);
storiesOf("ListBox / single", module).add("Basic is disabled", () => <Ex.BasicIsDisabled />);
storiesOf("ListBox / single", module).add("Basic is inline disable", () => <Ex.BasicIsInlineDisable />);
storiesOf("ListBox / single", module).add("Basic option disabled", () => <Ex.BasicOptionDisabled />);
storiesOf("ListBox / single", module).add("Basic with preselected option", () => <Ex.BasicPreselectedOption />);
storiesOf("ListBox / single", module).add("Basic with option onClick", () => <Ex.BasicOptionOnClick />);

storiesOf("ListBox / single", module).add("Filter", () => <Ex.WithFilter />);
storiesOf("ListBox / single", module).add("Filter inline", () => <Ex.WithFilterInline />);
storiesOf("ListBox / single", module).add("Filter custom nodes inline", () => <Ex.FilterCustomChildrenInline />);
storiesOf("ListBox / single", module).add("Filter custom nodes", () => <Ex.WithFilterAndNodesAsChildren />);

storiesOf("ListBox / single", module).add("Groups", () => <Ex.WithGroups />);
storiesOf("ListBox / single", module).add("Footer", () => <Ex.Footer />);
storiesOf("ListBox / single", module).add("Checkboxes", () => <Ex.Checkboxes />);
storiesOf("ListBox / single", module).add("Custom renderTrigger", () => <Ex.CustomRenderTrigger />);
storiesOf("ListBox / single", module).add("Has clear button", () => <Ex.HasClearButton />);
storiesOf("ListBox / single", module).add("Custom Checkers", () => <Ex.WithCustomCheckers />);
