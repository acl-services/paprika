import React from "react";
import { getStoryName } from "storybook/storyTree";
import RenderPillLabel from "./examples/RenderPillLabel";
import RenderPillLabelScreener from "./examples/RenderPillLabel.stories.screener";

const storyName = getStoryName("ListBox");

export default {
  title: storyName,
};

function App() {
  return <RenderPillLabel />;
}

export const ListBoxWithTagsRenderPillLabel = () => <App />;

export const ListBoxWithTagsRenderPillLabelScreener = () => <RenderPillLabelScreener />;
