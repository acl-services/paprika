import React from "react";
import PropTypes from "prop-types";
import * as sc from "./InlineSelect.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  selectedLabel: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
};

export default function InlineSelect(props) {
  const { children, onChange, selectedLabel, value, ...moreProps } = props;

  return (
    <sc.Wrapper data-pka-anchor="filter.inline-select">
      <sc.Select onChange={onChange} value={value} {...moreProps}>
        {children}
      </sc.Select>
      <sc.Trigger>{selectedLabel}</sc.Trigger>
    </sc.Wrapper>
  );
}

InlineSelect.propTypes = propTypes;
