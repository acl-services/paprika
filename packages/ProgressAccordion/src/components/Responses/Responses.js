/* eslint-disable jsx-a11y/no-noninteractive-tabindex */

import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import responsesStyles from "./Responses.styles";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

function filterChildren(children) {
  return React.Children.toArray(children).filter(child => child.type && child.type.displayName === Item.displayName);
}

const Responses = ({ children }) => {
  const filteredChildren = filterChildren(children);
  if (!children) return null;

  return (
    <dl data-pka-anchor="responses" css={responsesStyles} tabIndex="0">
      {filteredChildren}
    </dl>
  );
};

Responses.displayName = "ProgressAccordion.Responses";
Responses.propTypes = propTypes;
Responses.defaultProps = defaultProps;
Responses.Item = Item;

export default Responses;
