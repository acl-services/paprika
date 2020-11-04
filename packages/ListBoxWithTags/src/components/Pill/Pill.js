import React from "react";
import PropTypes from "prop-types";
import Close from "@paprika/icon/lib/Times";
import * as sc from "./Pill.styles";

const propTypes = {
  onRemove: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default function Pill(props) {
  const { children, onRemove } = props;
  return (
    <sc.Pill>
      <sc.Content>{children}</sc.Content>
      <sc.Delete data-pka-anchor="listbox-tags-pill-delete" onClick={onRemove}>
        <Close />
      </sc.Delete>
    </sc.Pill>
  );
}

Pill.propTypes = propTypes;
