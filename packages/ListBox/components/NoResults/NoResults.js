import React from "react";
import PropTypes from "prop-types";
import useStore from "../../store/useStore";
import NoResultsStyled from "./NoResults.styles";

const propTypes = {
  noResultsMessage: PropTypes.node.isRequired,
};

export default function NoResults(props) {
  const { noResultsMessage } = props;
  const [state] = useStore();
  if (state.isPopoverOpen && state.hasNoResults) {
    return <NoResultsStyled>{noResultsMessage}</NoResultsStyled>;
  }

  return null;
}

NoResults.propTypes = propTypes;
