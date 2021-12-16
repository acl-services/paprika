import React from "react";
import PropTypes from "prop-types";
import PanelContext from "../../PanelContext";
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
  const size = React.useContext(PanelContext).size;
  return (
    <sc.Content data-pka-anchor="panel.content" ref={ref} size={size} {...props}>
      {children}
    </sc.Content>
  );
});

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;
Content.displayName = "Panel.Content";

export default Content;
