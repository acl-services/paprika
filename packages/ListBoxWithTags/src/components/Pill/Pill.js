import React from "react";
import PropTypes from "prop-types";
import Close from "@paprika/icon/lib/Times";
import * as sc from "./Pill.styles";

const propTypes = {
  onRemove: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

const defaultProps = {
  size: "medium",
};

export function Delete({ size, onRemove = () => {} }) {
  return (
    <sc.Delete size={size} data-pka-anchor="list-box-tags.pill.delete" onClick={onRemove}>
      <Close />
    </sc.Delete>
  );
}
export default function Pill(props) {
  const { children, onRemove, size } = props;

  return (
    <sc.Pill data-pka-anchor="list-box-tags.pill">
      <sc.Ellipsis>{children}</sc.Ellipsis>
      {size ? <Delete onRemove={onRemove} size={size} /> : null}
    </sc.Pill>
  );
}

Pill.propTypes = propTypes;
Pill.defaultProps = defaultProps;

Delete.propTypes = {
  onRemove: PropTypes.func.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]).isRequired,
};
