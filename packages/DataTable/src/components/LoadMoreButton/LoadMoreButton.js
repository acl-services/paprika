import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";

const propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default function LoadMoreButton(props) {
  return <Button {...props}>[L10n] Load More...</Button>;
}

LoadMoreButton.propTypes = propTypes;
LoadMoreButton.displayName = "DataTable.LoadMoreButton";
