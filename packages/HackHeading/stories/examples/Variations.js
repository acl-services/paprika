import React from "react";
import { ThemeProvider } from "styled-components";
import { Gap } from "storybook/assets/styles/common.styles";
import Heading, { atlasHeading } from "../../src";

export default function Variations() {
  return (
    <>
      <ThemeProvider theme={atlasHeading}>
        <Heading level={1} isLight>
          Title - Display
        </Heading>
        <Heading level={2} isLight>
          Title - Large
        </Heading>
        <Heading level={3} isLight>
          Title - Medium
        </Heading>
        <Heading level={4} isLight>
          Title - Small
        </Heading>

        <Gap />

        <Heading level={2}>Title - Large</Heading>
        <Heading level={3}>Title - Medium</Heading>
        <Heading level={4}>Title - Small</Heading>

        <Gap />

        <Heading level={2} isLight>
          <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" rel="noreferrer">
            Title - Large
          </a>
        </Heading>
        <Heading level={3} isLight>
          <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" rel="noreferrer">
            Title - Medium
          </a>
        </Heading>
        <Heading level={4} isLight>
          <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" rel="noreferrer">
            Title - Small
          </a>
        </Heading>
      </ThemeProvider>
    </>
  );
}
