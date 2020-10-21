import React from "react";
import PropTypes from "prop-types";
import Close from "@paprika/icon/lib/Times";
import * as sc from "./Pill.styles";

const propTypes = {
  onDelete: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default function Pill(props) {
  const { children, onDelete } = props;
  return (
    <sc.Pill>
      <sc.Content>{children}</sc.Content>
      <sc.Delete onClick={onDelete}>
        <Close />
      </sc.Delete>
    </sc.Pill>
  );
}

Pill.propTypes = propTypes;
