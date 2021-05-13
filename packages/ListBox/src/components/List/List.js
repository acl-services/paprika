import React from "react";
import PropTypes from "prop-types";
import useListBox from "../../useListBox";
import * as sc from "./List.styles";

export default function List(props) {
  const { children, height, hasOptions, handleKeyUp } = props;
  const [{ noResultsFound, refListBox }] = useListBox();

  return (
    <sc.List
      data-pka-anchor="styled-list" // TODO: rename to "list-box.list"
      hasOptions={hasOptions}
      height={height}
      noResultsFound={noResultsFound}
      ref={refListBox}
      onKeyUp={handleKeyUp}
    >
      {children}
    </sc.List>
  );
}
List.defaultProps = {
  handleKeyUp: () => {},
};

List.propTypes = {
  /** Body content of the list. */
  children: PropTypes.node.isRequired,

  hasOptions: PropTypes.bool.isRequired,

  /** Sets the height for the list */
  height: PropTypes.number.isRequired,

  handleKeyUp: PropTypes.func,
};
