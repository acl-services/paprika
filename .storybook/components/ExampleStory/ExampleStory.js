import React from "react";
import PropTypes from "prop-types";
import Heading from "@paprika/heading";
import Link from "@paprika/link";
import { Story, Tagline, Rule, Big } from "storybook/assets/styles/common.styles";
import * as sc from "./ExampleStory.styles";

const propTypes = {
  children: PropTypes.node,
  component: PropTypes.string,
  fileName: PropTypes.string,
  storyName: PropTypes.string,
  tagline: PropTypes.node,
};

const defaultProps = {
  children: null,
  component: null,
  fileName: null,
  storyName: null,
  tagline: null,
};

const defaultTaglines = {
  showcase: (
    <>
      <Big>Showcase</Big> – Interact with the props API
    </>
  ),
  variations: (
    <>
      <Big>Variations</Big> – Browse use cases + recipes
    </>
  ),
};

const ExampleStory = props => {
  const { children, component, fileName, storyName, tagline } = props;
  return (
    <Story>
      {(fileName || storyName) && (
        <sc.HeaderFlex>
          {storyName && (
            <Heading level={1} displayLevel={2} isLight>
              {storyName}
            </Heading>
          )}
          {component && fileName && (
            <Link
              isExternalLink
              hasNoUnderline
              href={`https://github.com/acl-services/paprika/blob/master/packages/${component}/stories/${fileName}`}
            >
              Source
            </Link>
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
ExampleStory.defaultTaglines = defaultTaglines;

export default ExampleStory;
