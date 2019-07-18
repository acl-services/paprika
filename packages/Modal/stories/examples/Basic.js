import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Modal, { ModalHeader, ModalBody, ModalFooter } from "../..";

const headerProps = {
  headerAriaLevel: 1,
  hasCloseButton: true,
  isDark: false,
  onClose: _ => _,
};

const ExampleStory = () => {
  return (
    <Story>
      <Modal ariaLabel="Showcase Modal" isOpen>
        <ModalHeader {...headerProps}>Slow-carb kale chips</ModalHeader>
        <ModalBody>
          Prism hashtag jean shorts activated charcoal small batch gentrify crucifix gochujang kitsch subway tile health
          goth food truck flexitarian taiyaki. Subway tile vice poutine listicle. Actually bespoke photo booth everyday
          carry butcher. Narwhal beard poke master cleanse normcore mustache trust fund kale chips.
        </ModalBody>
        <ModalFooter footerActions={<div />}>Modal Footer</ModalFooter>
      </Modal>
    </Story>
  );
};

export default ExampleStory;
