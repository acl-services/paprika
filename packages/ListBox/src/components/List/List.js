import React from "react";
import PropTypes from "prop-types";
import useListBox from "../../useListBox";
import * as sc from "./List.styles";
import { PropsContext } from "../../store/PropsProvider";

export default function List(props) {
  const { children, height, hasOptions } = props;
  const [{ noResultsFound, refListBox }] = useListBox();
  const providedProps = React.useContext(PropsContext);
  const { virtualize } = providedProps;

  return (
    <sc.List
      as={virtualize ? "div" : "ul"}
      $virtualize={virtualize}
      data-pka-anchor="styled-list" // TODO: rename to "list-box.list"
      hasOptions={hasOptions}
      height={height}
      noResultsFound={noResultsFound}
      ref={refListBox}
    >
      {children}
    </sc.List>
  );
}

List.propTypes = {
  /** Body content of the list. */
  children: PropTypes.node.isRequired,

  hasOptions: PropTypes.bool.isRequired,

  /** Sets the height for the list */
  height: PropTypes.number.isRequired,
};
