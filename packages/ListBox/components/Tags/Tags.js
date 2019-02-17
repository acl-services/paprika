import React from "react";
import { string, node, bool, func } from "prop-types";
import Option from "./Option";

const propTypes = {
  children: node,
  getDOMAttributesForListBoxButton: func.isRequired,
  handleClickListBoxButton: func.isRequired,
  handleKeyDownListBoxContainer: func,
  isDisabled: bool,
  placeholder: string.isRequired,
};

const defaultProps = {
  children: null,
  handleKeyDownListBoxContainer: () => {},
  isDisabled: false,
};

const Tags = React.forwardRef((props, ref) => {
  const handleTagsClick = () => {
    props.handleClickListBoxButton();
  };

  return (
    <div
      tabIndex={0}
      {...props.getDOMAttributesForListBoxButton()}
      onClick={handleTagsClick}
      onKeyDown={props.handleKeyDownListBoxContainer}
      ref={ref}
      role="button"
    >
      {/* ^ needs to be replace by the RawButton */}
      {props.children ? props.children : props.placeholder}
    </div>
  );
});

export default Tags;

Tags.propTypes = propTypes;
Tags.defaultProps = defaultProps;

Tags.Option = Option;
