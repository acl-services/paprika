import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import ProgressBar from "../../src";

export default function ProgressBarModal() {
  return (
    <Story>
      <ProgressBar
        header="Preparing your file..."
        bodyText="Control attributes are getting updated. This might take more than 15secs."
      />
      <ProgressBar completed={25} />
      <ProgressBar completed={50} />
      <ProgressBar completed={100} />
    </Story>
  );
}
