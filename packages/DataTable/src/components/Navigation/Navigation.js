import React from "react";
import PropTypes from "prop-types";
import * as styled from "./Navigation.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    })
  ),
};

const defaultProps = {
  columns: [],
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
Navigation.defaultProps = defaultProps;
Navigation.displayName = "DataTable.Navigation";
