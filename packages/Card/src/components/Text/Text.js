import React from "react";
import PropTypes from "prop-types";
import truncate from "lodash.truncate";
import * as sc from "./Text.styles";

const propTypes = {
  /** Body content of the Text. */
  children: PropTypes.node,
  /** Sets the maximum text length visible on the card */
  maxTextLength: PropTypes.number,
};

const defaultProps = {
  children: null,
  maxTextLength: 95,
};

const Text = props => {
  const { children, maxTextLength } = props;

  const textProps = {
    children,
    maxTextLength,
  };

  function truncateText(text, length) {
    return truncate(text, {
      length,
      separator: " ",
    });
  }

  const truncatedText = truncateText(children, maxTextLength);

  return (
    <sc.textStyles title={children} data-pka-anchor="card.text" {...textProps}>
      {truncatedText}
    </sc.textStyles>
  );
};

Text.displayName = "Text";
Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
