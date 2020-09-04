import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import * as sc from "./Responses.styles";

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
    <sc.Response data-pka-anchor="responses" tabIndex="0">
      {filteredChildren}
    </sc.Response>
  );
};

Responses.displayName = "ProgressAccordion.Responses";
Responses.propTypes = propTypes;
Responses.defaultProps = defaultProps;
Responses.Item = Item;

export default Responses;
