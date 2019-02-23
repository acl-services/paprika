import React from "react";
import PropTypes from "prop-types";

import { ListBoxOptionStyled } from "../../ListBox.styles";

const propTypes = {
  state: PropTypes.any.isRequired,
  noResultsMessage: PropTypes.node.isRequired,
};

export default function NoResults(props) {
  const { state, noResultsMessage } = props;
  if (state.isPopoverOpen && state.hasNoResults) {
    return <ListBoxOptionStyled>{noResultsMessage}</ListBoxOptionStyled>;
  }

  return null;
}

NoResults.propTypes = propTypes;
