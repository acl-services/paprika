import React from "react";
import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import Heading from "@paprika/heading";
import ExternalLink from "@paprika/external-link";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";

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
            href={`https://github.com/acl-services/paprika/blob/master/packages/Popover/stories/${fileName}`}
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
