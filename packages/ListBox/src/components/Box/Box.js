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
  const { children, ...moreProps } = props;
  const [state] = useListBox();
  const propsContext = React.useContext(PropsContext);

  return (
    <sc.Box
      data-pka-anchor="list-box-box"
      hasError={state.hasError}
      isInline={state.isInline}
      isReadOnly={propsContext.isReadOnly}
      triggerWidth={state.triggerWidth}
      {...moreProps}
    >
      {props.children}
    </sc.Box>
  );
}

Box.propTypes = propTypes;
