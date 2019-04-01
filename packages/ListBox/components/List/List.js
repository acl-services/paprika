import React from "react";
import PropTypes from "prop-types";
import ListStyled from "./List.styles";
import useListBox from "../../store/useListBox";
import { getDOMAttributesForListBox } from "../../helpers/DOMAttributes";

const propTypes = {
  height: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default function List(props) {
  const { children, height } = props;
  const [state] = useListBox();
  const { refListBox } = state;

  return (
    <ListStyled
      {...getDOMAttributesForListBox(state)}
      hasNoResults={state.hasNoResults}
      height={height}
      ref={refListBox}
    >
      {children}
    </ListStyled>
  );
}

List.propTypes = propTypes;
