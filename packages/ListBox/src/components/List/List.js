import React from "react";
import PropTypes from "prop-types";
import useListBox from "../../useListBox";
import { PropsContext } from "../../store/PropsProvider";
import { getDOMAttributesForListBox } from "../../helpers/DOMAttributes";
import * as sc from "./List.styles";

export default function List(props) {
  const { children, height, hasOptions, ...moreProps } = props;
  const [state] = useListBox();
  const { refListBox } = state;
  const { idListBox } = React.useContext(PropsContext);

  return (
    <sc.List
      data-pka-anchor="styled-list"
      hasOptions={hasOptions}
      height={height}
      noResultsFound={state.noResultsFound}
      ref={refListBox}
      {...getDOMAttributesForListBox({ idListBox, ...state })}
      {...moreProps}
    >
      {children}
    </sc.List>
  );
}

List.propTypes = {
  /** Body content of the list. */
  children: PropTypes.node.isRequired,

  /** Body content of the list. */
  hasOptions: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,

  /** Sets the height for the list */
  height: PropTypes.number.isRequired,
};
