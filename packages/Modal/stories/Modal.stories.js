import React from "react";
import { repeat } from "storybook/assets/styles/common.styles";
import { showcaseStoryParameters } from "storybook/assets/storyParameters";
import ExampleStory from "storybook/components/ExampleStory";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import ModalStory from "./ModalStory";
import Modal from "../src";

export default {
  title: getStoryName("Modal"),
  component: Modal,
};

export const showcase = () => (
  <ExampleStory storyName="Modal" tagline={ExampleStory.defaultTaglines.showcase}>
    <ModalStory>
      <Modal.Content>
        {repeat(8, key => (
          <p key={key}>
            Mixtape single-origin coffee put a bird on it flexitarian street cred live-edge you probably haven‘t heard
            of them.
          </p>
        ))}
      </Modal.Content>
    </ModalStory>
  </ExampleStory>
);

showcase.story = {
  decorators: [withKnobs],
  parameters: showcaseStoryParameters,
};
