import React from "react";
import PropTypes from "prop-types";
import Toast from "@paprika/toast";
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
    return (
      <>
        <sc.NoResults data-pka-anchor="no-results">{label}</sc.NoResults>
        <Toast kind={Toast.types.kind.VISUALLY_HIDDEN} aria-hidden>
          {label}
        </Toast>
      </>
    );
  }

  return null;
}

NoResults.propTypes = propTypes;
