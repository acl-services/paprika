import React from "react";
import PropTypes from "prop-types";
import Heading from "@paprika/heading";
import ExternalLink from "@paprika/external-link";
import { Story, Tagline, Rule } from "storybook/assets/styles/common.styles";
import * as sc from "./ExampleStory.styles";

const propTypes = {
  children: PropTypes.node,
  fileName: PropTypes.string,
  storyName: PropTypes.string,
  tagline: PropTypes.string,
};

const defaultProps = {
  children: null,
  fileName: null,
  storyName: null,
  tagline: null,
};

export const ExampleStory = props => {
  const { children, fileName, storyName, tagline } = props;
  return (
    <Story>
      {(fileName || storyName) && (
        <sc.HeaderFlex>
          {storyName && (
            <Heading level={1} displayLevel={2} isLight>
              {storyName}
            </Heading>
          )}
          {fileName && (
            <ExternalLink
              hasNoUnderline
              href={`https://github.com/acl-services/paprika/blob/master/packages/Heading/stories/${fileName}`}
            >
              Source
            </ExternalLink>
          )}
        </sc.HeaderFlex>
      )}
      {tagline && <Tagline>{tagline}</Tagline>}
      {(fileName || storyName || tagline) && <Rule />}
      {children}
    </Story>
  );
};

ExampleStory.propTypes = propTypes;
ExampleStory.defaultProps = defaultProps;

export default ExampleStory;
