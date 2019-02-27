import React from "react";
import PropTypes from "prop-types";
import { ListBoxStyled } from "../../ListBox.styles";
import useStore from "../../store/useStore";
import { getDOMAttributesForListBox } from "../../helpers/DOMAttributes";

const propTypes = {
  height: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

const List = React.forwardRef((props, ref) => {
  const { children, height } = props;
  const [state] = useStore();

  return (
    <ListBoxStyled hasNoResults={state.hasNoResults} height={height} ref={ref} {...getDOMAttributesForListBox(state)}>
      {children}
    </ListBoxStyled>
  );
});

export default List;

List.propTypes = propTypes;
