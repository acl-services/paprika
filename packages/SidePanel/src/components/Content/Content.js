import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Content.styles";

const propTypes = {
  /** Body content of the Content */
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const Content = React.forwardRef((props, ref) => {
  const { children } = props;
  return (
    <sc.Content data-pka-anchor="sidepanel.content" ref={ref} {...props}>
      {children}
    </sc.Content>
  );
});

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;
Content.displayName = "SidePanel.Content";

export default Content;
