import React from "react";
import PropTypes from "prop-types";

const Item = ({ children }) => <React.Fragment>{children}</React.Fragment>;

Item.displayName = "ResponsesAccordion.Item";
Item.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Item;
