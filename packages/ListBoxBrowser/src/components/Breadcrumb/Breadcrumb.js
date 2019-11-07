import React from "react";
import PropTypes from "prop-types";
import RawButton from "@paprika/raw-button";
import { button } from "./Breadcrumb.styles";
import { isRoot } from "../../helpers";

const propTypes = {
  onClick: PropTypes.func.isRequired,
  breadcrumb: PropTypes.arrayOf(PropTypes.object),
};
const defaultProps = {
  breadcrumb: [],
};

export default function Breadcrumb(props) {
  const { breadcrumb, onClick } = props;
  if (breadcrumb.length) {
    return breadcrumb.map(option => {
      if (isRoot(option.parent)) return null;
      return (
        <React.Fragment key={option.$$key}>
          <RawButton css={button} onClick={onClick(option)}>
            {option.attributes.label}
          </RawButton>
          <span> / </span>
        </React.Fragment>
      );
    });
  }

  return null;
}

Breadcrumb.propTypes = propTypes;
Breadcrumb.defaultProps = defaultProps;
