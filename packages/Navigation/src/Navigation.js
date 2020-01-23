import React from "react";
import PropTypes from "prop-types";
import * as styled from "./Navigation.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Navigation(props) {
  const { children } = props;
  return <styled.Navigation>{children}</styled.Navigation>;
}

Navigation.propTypes = propTypes;
Navigation.displayName = "DataTable.Navigation";
