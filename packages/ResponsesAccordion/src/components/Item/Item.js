/* eslint-disable react/no-unused-prop-types */

import React from "react";
import PropTypes from "prop-types";

const Item = ({ children }) => <React.Fragment>{children}</React.Fragment>;

Item.displayName = "ResponsesAccordion.Item";
Item.propTypes = {
  children: PropTypes.node,
  label: PropTypes.node.isRequired,
};
Item.defaultProps = {
  children: null,
};

export default Item;
