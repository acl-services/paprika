import React from "react";
import PropTypes from "prop-types";
import Heading from "@paprika/heading";
import { Rule, Tagline } from "storybook/assets/styles/common.styles";

const STORY_TYPES = {
  SHOWCASE: "Showcase",
  VARIATIONS: "Variations",
};

STORY_TYPES.ALL = Object.values(STORY_TYPES);

const propTypes = {
  componentName: PropTypes.string.isRequired,
  storyType: PropTypes.oneOf(STORY_TYPES.ALL),
};

const defaultProps = {
  storyType: STORY_TYPES.SHOWCASE,
};

function StoryHeader(props) {
  const { componentName, storyType } = props;

  function taglineDescription() {
    switch (storyType) {
      case STORY_TYPES.SHOWCASE:
        return "Interact with the props API";
      case STORY_TYPES.VARIATIONS:
        return "Browse use cases + recipes";
      default:
        return "";
    }
  }

  return (
    <React.Fragment>
      <Heading level={1} displayLevel={2} isLight>
        {componentName}
      </Heading>
      <Tagline>
        <big>
          <strong>{storyType}</strong>
        </big>{" "}
        – {taglineDescription()}
      </Tagline>
      <Rule />
    </React.Fragment>
  );
}

StoryHeader.propTypes = propTypes;
StoryHeader.defaultProps = defaultProps;

export default StoryHeader;
