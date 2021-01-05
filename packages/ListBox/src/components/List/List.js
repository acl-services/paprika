import React from "react";
import PropTypes from "prop-types";
import useListBox from "../../useListBox";
import { getDOMAttributesForListBox } from "../../helpers/DOMAttributes";
import * as sc from "./List.styles";

const propTypes = {
  /** Sets the height for the list */
  height: PropTypes.number.isRequired,

  /** Body content of the list. */
  children: PropTypes.node.isRequired,

  /** Body content of the list. */
  hasOptions: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
};

export default function List(props) {
  const { children, height, hasOptions } = props;
  const [state] = useListBox();
  const { refListBox } = state;

  return (
    <sc.List
      data-pka-anchor="styled-list"
      {...getDOMAttributesForListBox(state)}
      noResultsFound={state.noResultsFound}
      height={height}
      ref={refListBox}
      hasOptions={hasOptions}
    >
      {children}
    </sc.List>
  );
}

List.propTypes = propTypes;
