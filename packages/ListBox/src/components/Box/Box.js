import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Box.styles";
import useListBox from "../../useListBox";
import { PropsContext } from "../../store/PropsProvider";

const propTypes = {
  /** Body content of the box. */
  children: PropTypes.node.isRequired,
};

export default function Box(props) {
  const [{ isInline, triggerWidth }] = useListBox();
  const { isReadOnly, hasError } = React.useContext(PropsContext);

  return (
    <sc.Box
      data-pka-anchor="list-box-box"
      hasError={hasError}
      isInline={isInline}
      isReadOnly={isReadOnly}
      triggerWidth={triggerWidth}
    >
      {props.children}
    </sc.Box>
  );
}

Box.propTypes = propTypes;
