import React from "react";
import PropTypes from "prop-types";
import Popover from "@paprika/popover";
import { getDOMAttributesForListBoxContainer } from "../../helpers/DOMAttributes";

const propTypes = {
  children: PropTypes.node.isRequired,
  onBlur: PropTypes.any,
  onKeyDown: PropTypes.any,
};
const defaultProps = {};

const Content = React.forwardRef((props, ref) => {
  return (
    <Popover.Content
      onBlur={props.onBlur}
      ref={ref}
      {...getDOMAttributesForListBoxContainer()}
      onKeyDown={props.onKeyDown}
    >
      {props.children}
    </Popover.Content>
  );
});

export default Content;

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;
