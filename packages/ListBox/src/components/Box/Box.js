import React from "react";
import PropTypes from "prop-types";
import * as sc from "./Box.styles";
import useListBox from "../../useListBox";
import { PropsContext } from "../../store/PropsProvider";

export default function Box(props) {
  const { children, ...moreProps } = props;
  const [{ triggerWidth }] = useListBox();
  const { isInline, isReadOnly, hasError } = React.useContext(PropsContext);

  return (
    <sc.Box
      {...moreProps}
      data-pka-anchor="list-box-box"
      hasError={hasError}
      isInline={isInline}
      isReadOnly={isReadOnly}
      triggerWidth={triggerWidth}
    >
      {children}
    </sc.Box>
  );
}

Box.displayName = "ListBox.Box";

Box.propTypes = {
  /** Body content of the box. */
  children: PropTypes.node,
};

Box.defaultProps = {
  children: null,
};
