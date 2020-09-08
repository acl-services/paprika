import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Box.styles";
import useListBox from "../../useListBox";

const propTypes = {
  /** Body content of the box. */
  children: PropTypes.node.isRequired,
};

export default function Box(props) {
  const { children, ...moreProps } = props;
  const [state] = useListBox();

  return (
    <sc.Box data-pka-anchor="listbox-box" isInline={state.isInline} triggerWidth={state.triggerWidth} {...moreProps}>
      {props.children}
    </sc.Box>
  );
}

Box.propTypes = propTypes;
