import React from "react";
import PropTypes from "prop-types";
import { ListBoxStyled } from "../../ListBox.styles";
import useStore from "../../store/useStore";
import { getDOMAttributesForListBox } from "../../helpers/DOMAttributes";

const propTypes = {
  height: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default function List(props) {
  const { children, height } = props;
  const [state] = useStore();
  const { refListBox } = state;

  return (
    <ListBoxStyled
      hasNoResults={state.hasNoResults}
      height={height}
      ref={refListBox}
      {...getDOMAttributesForListBox(state)}
    >
      {children}
    </ListBoxStyled>
  );
}

List.propTypes = propTypes;
