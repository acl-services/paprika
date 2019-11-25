import React from "react";
import PropTypes from "prop-types";
import * as styled from "./Navigation.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default function Navigation(props) {
  const { children, columns } = props;
  return (
    <styled.Navigation>
      {React.Children.map(children, child => React.cloneElement(child, { columns }))}
    </styled.Navigation>
  );
}

Navigation.propTypes = propTypes;
Navigation.displayName = "DataTable.Navigation";
