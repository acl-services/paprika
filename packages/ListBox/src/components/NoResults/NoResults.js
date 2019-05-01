import React from "react";
import PropTypes from "prop-types";
import useListBox from "../../useListBox";
import NoResultsStyled from "./NoResults.styles";

const propTypes = {
  label: PropTypes.node.isRequired,
};

export default function NoResults(props) {
  const { label } = props;
  const [state] = useListBox();
  if (state.isPopoverOpen && state.noResultsFound) {
    return <NoResultsStyled>{label}</NoResultsStyled>;
  }

  return null;
}

NoResults.propTypes = propTypes;
