import React from "react";
import { getStoryName } from "storybook/storyTree";
import LazyLoading from "./examples/LazyLoading";

const storyName = getStoryName("Search");

export default {
  title: storyName,
};

function App() {
  return <LazyLoading />;
}

export const SearchLazyLoad = () => <App />;
