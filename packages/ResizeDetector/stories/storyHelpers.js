import React from "react";
import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import Heading from "@paprika/heading";
import ExternalLink from "@paprika/external-link";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import { useDimensions, useBreakpoints } from "../src";

export const exampleStoryParameters = {
  options: {
    isToolshown: true,
    showPanel: false,
  },
  viewMode: "story",
};

export const ExampleStory = props => {
  const { children, fileName, storyName, tagline } = props;
  return (
    <Story>
      <HeaderFlex>
        <Heading level={1} displayLevel={2} isLight>
          {storyName}
        </Heading>
        {fileName && (
          <ExternalLink
            hasNoUnderline
            href={`https://github.com/acl-services/paprika/blob/master/packages/ResizeDetector/stories/${fileName}`}
          >
            Source
          </ExternalLink>
        )}
      </HeaderFlex>
      {tagline && <Tagline>{tagline}</Tagline>}
      <Rule />
      {children}
    </Story>
  );
};

export const ColourfulBox = styled.div`
  ${stylers.fontSize(3)};
  align-items: center;
  background-image: linear-gradient(to bottom, ${tokens.color.chartColor03}, ${tokens.color.chartColor07});
  color: ${tokens.color.white};
  display: flex;
  height: 100%;
  justify-content: center;
  text-align: center;
  text-shadow: 1px 1px 1px ${stylers.alpha(tokens.color.black, 0.5)};
  width: 100%;
`;

const HeaderFlex = styled.div`
  align-items: flex-end;
  display: flex;
  margin-bottom: ${stylers.spacer(2)};

  [data-pka-anchor="heading"] {
    margin-bottom: 0;
  }

  a {
    margin-left: ${tokens.spaceLg};
  }
`;

export function ResizeConsumer() {
  const { width, height } = useDimensions();
  const { size } = useBreakpoints();

  return (
    <ColourfulBox>
      {width} x {height}
      <br />[{size}]
    </ColourfulBox>
  );
}
