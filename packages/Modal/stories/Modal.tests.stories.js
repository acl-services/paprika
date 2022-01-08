import React from "react";
import { testStoryParameters } from "storybook/assets/storyParameters";
import { repeat } from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import ModalStory from "./ModalStory";
import Modal from "../src";

const storyName = getStoryName("Modal");

export default {
  title: `${storyName}/Backyard/Tests/Screener`,
  id: "modal-tests",
  component: Modal,
};

export const small = () => (
  <ModalStory>
    <Modal.Content>
      <p>Some content here</p>
    </Modal.Content>
  </ModalStory>
);

small.story = {
  name: "small",
  parameters: testStoryParameters,
};

export const symmetric = () => (
  <ModalStory>
    <Modal.Content>
      <p>height of this modal bigger than (100% - (124px * 2)) on 1280x1024</p>
      {repeat(17, key => (
        <p key={key}>Some content here</p>
      ))}
    </Modal.Content>
  </ModalStory>
);

symmetric.story = {
  name: "symmetric reducing of &::before and &::after",
  parameters: testStoryParameters,
};

export const scroll = () => (
  <ModalStory>
    <Modal.Content>
      <p>height of this modal bigger than (100% - (24px * 2)) on 1280x1024</p>
      {repeat(24, key => (
        <p key={key}>Some content here</p>
      ))}
    </Modal.Content>
  </ModalStory>
);

scroll.story = {
  name: "scroll in content area",
  parameters: testStoryParameters,
};

export const focus = () => (
  <ModalStory>
    <Modal.Content>
      <p>With input auto focus</p>
      <input type="text" data-autofocus />
    </Modal.Content>
  </ModalStory>
);

focus.story = {
  name: "focus lock content input",
  parameters: testStoryParameters,
};

export const disable = () => (
  <ModalStory>
    <Modal.FocusLock autoFocus={false} />
    <Modal.Content>
      <p>autofocus disabled</p>
    </Modal.Content>
  </ModalStory>
);

disable.story = {
  name: "focus lock disabled",
  parameters: testStoryParameters,
};
