import React from "react";
import PropTypes from "prop-types";
import Toast from "@paprika/toast";
import useListBox from "../../useListBox";
import { PropsContext } from "../../store/PropsProvider";
import * as sc from "./NoResults.styles";

export default function NoResults(props) {
  const { label } = props;
  const [{ isOpen, noResultsFound }] = useListBox();
  const { isInline } = React.useContext(PropsContext);

  if ((isOpen || isInline) && noResultsFound) {
    return (
      <>
        <sc.NoResults data-pka-anchor="no-results">{label}</sc.NoResults>
        <Toast autoCloseDelay={2500} canAutoClose isPolite kind={Toast.types.kind.VISUALLY_HIDDEN} renderDelay={1000}>
          {label}
        </Toast>
      </>
    );
  }

  return null;
}

NoResults.propTypes = {
  /** Sets label for NoResults */
  label: PropTypes.node.isRequired,
};
