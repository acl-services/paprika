import React from "react";
import { getStoryName } from "storybook/storyTree";
import * as Multi from "./examples/multi";
import ListBox from "../src";

const storyName = getStoryName("ListBox");

const multiListBoxStoryParamaters = {
  viewMode: "story",
  options: {
    isToolshown: false,
    showPanel: true,
  },
};

export default {
  title: `${storyName}/Examples/Multi`,
  component: ListBox,
};

export const BasicStory = () => <Multi.Basic />;
BasicStory.story = {
  parameters: multiListBoxStoryParamaters,
};

export const BasicWithPreselectedStory = () => <Multi.BasicWithPreselectedOptions />;
BasicWithPreselectedStory.story = {
  parameters: multiListBoxStoryParamaters,
};

export const BasicIsDisabledStory = () => <Multi.BasicIsDisabled />;
BasicIsDisabledStory.story = {
  parameters: multiListBoxStoryParamaters,
};

export const BasicIsDisabledWhileOpenStory = () => <Multi.BasicIsDisabledWhileOpen />;
BasicIsDisabledWhileOpenStory.story = {
  parameters: multiListBoxStoryParamaters,
};

export const WithCustomCheckboxesStory = () => <Multi.WithCustomCheckboxes />;
WithCustomCheckboxesStory.story = {
  parameters: multiListBoxStoryParamaters,
};

export const WithFooterStory = () => <Multi.Footer />;
WithFooterStory.story = {
  parameters: multiListBoxStoryParamaters,
};

export const WithGroupsStory = () => <Multi.WithGroupsAndHavePreselectedOptions />;
WithGroupsStory.story = {
  parameters: multiListBoxStoryParamaters,
};

export const ControlledListBoxStory = () => <Multi.ControlledIsSelected />;
ControlledListBoxStory.story = {
  parameters: multiListBoxStoryParamaters,
};

export const UncontrolledListBoxStory = () => <Multi.DefaultIsSelected />;
UncontrolledListBoxStory.story = {
  parameters: multiListBoxStoryParamaters,
};

export const ControlledWithFilterStory = () => <Multi.DefaultIsSelected />;
ControlledWithFilterStory.story = {
  parameters: multiListBoxStoryParamaters,
};
