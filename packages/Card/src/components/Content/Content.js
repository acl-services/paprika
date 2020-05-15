import React from "react";
import PropTypes from "prop-types";
import contentStyles from "./Content.styles";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

function Content(props) {
  const { children } = props;

  return (
    <div css={contentStyles} data-pka-anchor="content">
      {children}
    </div>
  );
}

Content.displayName = "Content";
Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

export default Content;
