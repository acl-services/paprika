import React from "react";
import PropTypes from "prop-types";
import useListBox from "../../useListBox";
import * as sc from "./NoResults.styles";

const propTypes = {
  /** Sets label for NoResults */
  label: PropTypes.node.isRequired,
};

export default function NoResults(props) {
  const { label } = props;
  const [state] = useListBox();

  if ((state.isOpen || state.isInline) && state.noResultsFound) {
    return <sc.NoResultsWrapper data-pka-anchor="no-results">{label}</sc.NoResultsWrapper>;
  }

  return null;
}

NoResults.propTypes = propTypes;
