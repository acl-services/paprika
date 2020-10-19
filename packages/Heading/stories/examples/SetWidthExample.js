import React from "react";
import ExternalLink from "@paprika/external-link";
import Heading from "../../src";

export default function SetWidthExample() {
  const renderExternalLink = () => <ExternalLink href="http://wegalvanize.com">External Link Text</ExternalLink>;

  return (
    <>
      <Heading style={{ width: "160px" }} level={1}>
        {renderExternalLink()}
      </Heading>
    </>
  );
}
