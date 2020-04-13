import React from "react";
import PropTypes from "prop-types";
import RawButton from "@paprika/raw-button";
import { button } from "./Breadcrumb.styles";
import { crumb } from "../Title/Title.styles";
import { isRoot } from "../../helpers";

const propTypes = {
  breadcrumb: PropTypes.arrayOf(PropTypes.object),
  hasBrowserTitle: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {
  breadcrumb: [],
};

export default function Breadcrumb(props) {
  const { breadcrumb, hasBrowserTitle, onClick } = props;
  if (!breadcrumb.length) return null;

  return breadcrumb.map(option => {
    if (isRoot(option.parent)) return null;

    return (
      <span data-pka-anchor="breadcrumb-crumb" css={crumb} key={option.$$key}>
        {hasBrowserTitle && <span> / </span>}
        <RawButton css={button} onClick={onClick(option)}>
          {option.attributes.label}
        </RawButton>
      </span>
    );
  });
}

Breadcrumb.propTypes = propTypes;
Breadcrumb.defaultProps = defaultProps;
