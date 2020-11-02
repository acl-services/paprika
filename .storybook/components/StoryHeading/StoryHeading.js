import React from "react";
import PropTypes from "prop-types";
import * as sc from "./StoryHeading.styles";

const propTypes = {
  children: PropTypes.node,
  level: PropTypes.oneOf([1, 2, 3]),
};

const defaultProps = {
  children: null,
  level: 1,
};

export const StoryHeading = props => {
  const { children, level } = props;
  return (
    <sc.StoryHeading isLight hasDivider level={level + 1} displayLevel={level + 2}>
      {children}
    </sc.StoryHeading>
  );
};

StoryHeading.propTypes = propTypes;
StoryHeading.defaultProps = defaultProps;

export default StoryHeading;
