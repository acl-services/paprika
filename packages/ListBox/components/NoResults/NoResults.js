import React from "react";
import PropTypes from "prop-types";
import useStore from "../../store/useStore";
import { ListBoxOptionStyled } from "../../ListBox.styles";

const propTypes = {
  noResultsMessage: PropTypes.node.isRequired,
};

export default function NoResults(props) {
  const { noResultsMessage } = props;
  const [state] = useStore();
  if (state.isPopoverOpen && state.hasNoResults) {
    return <ListBoxOptionStyled>{noResultsMessage}</ListBoxOptionStyled>;
  }

  return null;
}

NoResults.propTypes = propTypes;
