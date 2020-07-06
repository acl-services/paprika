import React from "react";
import PropTypes from "prop-types";
import * as sc from "./List.styles";
import useListBox from "../../useListBox";
import { getDOMAttributesForListBox } from "../../helpers/DOMAttributes";

const propTypes = {
  /** Sets the height for the list */
  height: PropTypes.number.isRequired,

  /** Body content of the list. */
  children: PropTypes.node.isRequired,
};

export default function List(props) {
  const { children, height } = props;
  const [state] = useListBox();
  const { refListBox } = state;

  return (
    <sc.ListWrapper
      data-pka-anchor="styled-list"
      {...getDOMAttributesForListBox(state)}
      noResultsFound={state.noResultsFound}
      height={height}
      ref={refListBox}
    >
      {children}
    </sc.ListWrapper>
  );
}

List.propTypes = propTypes;
