import React from "react";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import ArrowItem from "../src/components/ArrowItem/ArrowItem";
import CurrentPageItem from "../src/components/CurrentPageItem/CurrentPageItem";
import Divider from "../src/components/Divider/Divider";
import ElipsisItem from "../src/components/EllipsisItem/ElipsisItem";
import PageItem from "../src/components/PageItem/PageItem";
import Pagination from "../src/Pagination";

const storyName = getStoryName("Pagination");

storiesOf(`${storyName}/Examples`, module)
  .add("Pagination", () => <Pagination totalPages={12} currentPage={2} />)
  .add("ArrowItem", () => <ArrowItem />)
  .add("CurrentPageItem", () => <CurrentPageItem />)
  .add("Divider", () => <Divider />)
  .add("PageItem", () => <PageItem />)
  .add("ElipsisItem", () => <ElipsisItem />);
