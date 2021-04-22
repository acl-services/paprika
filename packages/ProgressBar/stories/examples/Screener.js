import React from "react";
import { Story, Gap } from "storybook/assets/styles/common.styles";
import ProgressBar from "../../src";

export default function ProgressBarModal() {
  return (
    <Story>
      <ProgressBar />
      <Gap.Small />
      <ProgressBar completed={33} />
      <Gap.Small />
      <ProgressBar completed={100} />
      <Gap />
      <ProgressBar isCompact />
      <Gap.Small />
      <ProgressBar completed={50} isCompact />
      <Gap.Small />
      <ProgressBar completed={100} isCompact />
      <Gap />
      <ProgressBar header="Header (level 3)" bodyText="Body text." completed={66} />
      <Gap.Small />
      <ProgressBar header="Header  (level 2)" headerLevel={2} bodyText="Body text." completed={99} />
    </Story>
  );
}
