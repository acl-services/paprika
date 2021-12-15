import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Content.styles";
import * as types from "../../types";

const propTypes = {
  /** Body content of the Content */
  children: PropTypes.node,
  size: PropTypes.oneOf([types.sizes.MEDIUM, types.sizes.LARGE]),
};

const defaultProps = {
  children: null,
  size: types.sizes.MEDIUM,
};

const Content = React.forwardRef((props, ref) => {
  const { children } = props;
  return (
    <sc.Content data-pka-anchor="panel.content" ref={ref} {...props}>
      {children}
    </sc.Content>
  );
});

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;
Content.displayName = "Panel.Content";

export default Content;
