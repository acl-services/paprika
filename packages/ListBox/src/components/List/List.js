import React from "react";
import PropTypes from "prop-types";
import useListBox from "../../useListBox";
import { handleKeyUpKeyboardKeys } from "../../helpers/handleKeyboardKeys";
import { OnChangeContext } from "../../store/OnChangeProvider";
import { PropsContext } from "../../store/PropsProvider";
import * as sc from "./List.styles";

export default function List(props) {
  const { children, height, hasOptions } = props;
  const [{ noResultsFound, refListBox }] = useListBox();
  const onChangeContext = React.useContext(OnChangeContext);
  const [state, dispatch] = useListBox();
  const providedProps = React.useContext(PropsContext);

  return (
    <sc.List
      data-pka-anchor="styled-list" // TODO: rename to "list-box.list"
      hasOptions={hasOptions}
      height={height}
      noResultsFound={noResultsFound}
      ref={refListBox}
      onKeyUp={handleKeyUpKeyboardKeys({ providedProps, state, dispatch, onChangeContext })}
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
