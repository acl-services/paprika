import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import stylers from "@paprika/stylers";
import Button from "@paprika/button";
import Heading from "../../src";

export default function HeadingFocus() {
  const headingRef = React.useRef(null);

  const handleFocus = () => {
    headingRef.current.focus();
  };

  return (
    <Story>
      <Heading
        level={4}
        ref={headingRef}
        css={`
          &:focus {
            ${stylers.focusRing.subtle()}
          }
        `}
      >
        Focusable Heading
      </Heading>
      <Button onClick={handleFocus} size="small">
        Set focus
      </Button>
    </Story>
  );
}
