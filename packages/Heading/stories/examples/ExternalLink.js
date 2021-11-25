import React from "react";
import Link from "@paprika/link";
import StoryHeading from "storybook/components/StoryHeading";
import { Gap } from "storybook/assets/styles/common.styles";
import Heading from "../../src/Heading";

export default function ExternalLinkExample() {
  const renderExternalLink = () => <Link isExternalLink hasTruncation href="http://wegalvanize.com">External Link Text</Link>;

  return (
    <>
      <Heading level={1}>{renderExternalLink()}</Heading>
      <Heading level={2}>{renderExternalLink()}</Heading>
      <Heading level={3}>{renderExternalLink()}</Heading>
      <Heading level={4}>{renderExternalLink()}</Heading>
      <Gap.Small />
      <StoryHeading level={3}>With fixed width</StoryHeading>
      <Heading style={{ width: "160px" }} level={1}>
        {renderExternalLink()}
      </Heading>
    </>
  );
}
