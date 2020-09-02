import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import ProgressBar from "../../src";

export default function ProgressBarModal() {
  return (
    <Story>
      <ProgressBar />
      <ProgressBar completed={50} />
      <ProgressBar completed={100} />
    </Story>
  );
}
