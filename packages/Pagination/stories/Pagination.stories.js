import React from "react";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import InteractivePagination from "./examples/InteractivePagination";
import BasicPagination from "./examples/BasicPagination";

const storyName = getStoryName("Pagination");

storiesOf(`${storyName}/Examples`, module)
  .add("Basic Pagination", () => <BasicPagination totalPages={12} currentPage={2} />)
  .add("Interactive Pagination", () => <InteractivePagination totalPages={12} currentPage={2} />);
