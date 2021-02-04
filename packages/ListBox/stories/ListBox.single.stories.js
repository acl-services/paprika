import React from "react";
import { getStoryName } from "storybook/storyTree";
import * as Single from "./examples/Single";
import ListBox from "../src";

const storyName = getStoryName("ListBox");

const paramaters = {
  viewMode: "story",
  options: {
    isToolshown: false,
    showPanel: true,
  },
};

export default {
  title: `${storyName}/Examples/Single`,
  component: ListBox,
};

export const InlineDisplayStory = () => <Single.BasicInlineDisplay />;
InlineDisplayStory.story = {
  parameters: paramaters,
};

export const WithDividersStory = () => <Single.Dividers />;
WithDividersStory.story = {
  parameters: paramaters,
};

export const PreselectedOptionStory = () => <Single.BasicPreselectedOption />;
PreselectedOptionStory.story = {
  parameters: paramaters,
};

export const CustomChildrenInlineStory = () => <Single.CustomChildrenInline />;
CustomChildrenInlineStory.story = {
  parameters: paramaters,
};

export const ControlledIsSelectedStory = () => <Single.ControlledIsSelected />;
ControlledIsSelectedStory.story = {
  parameters: paramaters,
};

export const DefaultIsSelectedStory = () => <Single.DefaultIsSelected />;
DefaultIsSelectedStory.story = {
  parameters: paramaters,
};

export const WithRawItemStory = () => <Single.WithRawItem />;
WithRawItemStory.story = {
  parameters: paramaters,
};

export const ListBoxBoxStory = () => <Single.WithListBoxBox />;
ListBoxBoxStory.story = {
  parameters: paramaters,
};
