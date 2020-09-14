import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Modal from "@paprika/modal";
import ProgressBar from "../../src";

export default function Loading() {
  const [value, setValue] = React.useState(0);
  const [a11yText, setA11yText] = React.useState("");

  if (value <= 100) {
    setTimeout(() => {
      setValue(value => value + 15);
    }, 1000);
  } else {
    setValue(100);
    setA11yText("Loading complete");
  }

  return (
    <Story>
      <Modal isOpen>
        <Modal.Content>
          <ProgressBar completed={value} a11yText={a11yText} />
        </Modal.Content>
      </Modal>
    </Story>
  );
}
