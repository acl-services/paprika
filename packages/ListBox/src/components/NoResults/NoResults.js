import React from "react";
import PropTypes from "prop-types";
import Toast from "@paprika/toast";
import useI18n from "@paprika/l10n/lib/useI18n";
import useListBox from "../../useListBox";
import * as sc from "./NoResults.styles";

const propTypes = {
  /** Sets label for NoResults */
  label: PropTypes.node.isRequired,
};

export default function NoResults(props) {
  const { label } = props;
  const [state] = useListBox();
  const I18n = useI18n();

  if ((state.isOpen || state.isInline) && state.noResultsFound) {
    return (
      <>
        <sc.NoResults data-pka-anchor="no-results">{label}</sc.NoResults>
        <Toast kind={Toast.types.kind.VISUALLY_HIDDEN} aria-hidden>
          {/* Using {label} here causes mysterious failures in specs */}
          {I18n.t("listBox.filter.no_results_message")}
        </Toast>
      </>
    );
  }

  return null;
}

NoResults.propTypes = propTypes;
