import React from "react";
import PropTypes from "prop-types";
import CollapsibleCardContext from "../../CollapsibleCardContext";
import * as sc from "./Body.styles";

export default function Body(props) {
  const { children } = props;
  const context = React.useContext(CollapsibleCardContext);

  return <sc.Body isCollapsed={context.isCollapsed}>{children}</sc.Body>;
}

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

Body.propTypes = propTypes;
Body.defaultProps = defaultProps;
Body.displayName = "CollapsibleCard.Body";
