import React from "react";
import { getStoryName } from "storybook/storyTree";
import { testStoryParameters } from "storybook/assets/storyParameters";
import Screener from "./examples/Screener";
import RerenderBreadcrumbs from "./examples/RerenderBreadcrumbs";

const storyName = getStoryName("Breadcrumbs");

export default {
  title: `${storyName}/Backyard/Tests`,
  id: "breadcrumbs-tests",
};

export const screener = () => <Screener />;
screener.story = {
  parameters: testStoryParameters,
};

export const rerenderBreadcrumbs = () => <RerenderBreadcrumbs />;
screener.story = {
  parameters: testStoryParameters,
};
