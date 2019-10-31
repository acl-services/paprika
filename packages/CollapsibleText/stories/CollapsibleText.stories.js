import React from "react";
import { storiesOf } from "@storybook/react";
// import { withKnobs } from "@storybook/addon-knobs";
import Variations from "./examples/Variations";
// import Screener from "./examples/Screener";
import CollapsibleText from "../src";
//
// import mdx from "./CollapsibleText.mdx";
//
// const docs = mdx && mdx.parameters && mdx.parameters.docs;

// export const dummy = () => <CollapsibleText>Lorem hipsum raw denim listicle mixtape.</CollapsibleText>;

// dummy.story = {
//   name: "dummy",
//   // title: "CollapsibleText",
//   // component: CollapsibleText,
// };
//
// export default {
//   title: "CollapsibleText",
//   component: CollapsibleText,
//   // includeStories: ["variations"],
// };

storiesOf("CollapsibleText", module)
  // .addDecorator(withKnobs)

  .addParameters({ component: CollapsibleText })
  .add("Variations", () => <Variations />);

// storiesOf("CollapsibleText/Automation Tests", module).add("Screener", () => <Screener />);
