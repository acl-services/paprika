import React from "react";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import ArrowItem from "../src/components/ArrowItem/ArrowItem";
import CurrentPageItem from "../src/components/CurrentPageItem/CurrentPageItem";
import ElipsisItem from "../src/components/EllipsisItem/ElipsisItem";
import PageItem from "../src/components/PageItem/PageItem";
// import Pagination from "../src/Pagination";

// import Showcase from "./examples/Showcase";

// const storyName = getStoryName("Pagination");

// storiesOf(storyName, module).add("Showcase", Showcase);

// export default {
//   title: "Pagination",
//   component: Pagination,
// };

// storiesOf(`${storyName}/Examples`, module)

// export const Example = () => <Pagination />;

// export const ExampleArrowItem = () => <ArrowItem />;

// export const ExampleCurrentPageItem = () => <CurrentPageItem />;

// export const ExampleElipsisItem = () => <ElipsisItem />;

// export const ExamplePageItem = () => <PageItem />;

const storyName = getStoryName("Pagination");

storiesOf(`${storyName}/Examples`, module)
  //   .add("Pagination", () => <Pagination />)
  .add("ArrowItem", () => <ArrowItem />)
  .add("CurrentPageItem", () => <CurrentPageItem />)
  .add("PageItem", () => <PageItem />)
  .add("ElipsisItem", () => <ElipsisItem />);
