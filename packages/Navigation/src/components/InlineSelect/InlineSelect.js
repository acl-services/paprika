import React from "react";
import PropTypes from "prop-types";
import * as styled from "./InlineSelect.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  selectedLabel: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
};

export default function InlineSelect(props) {
  const { children, onChange, selectedLabel, value, ...moreProps } = props;

  return (
    <styled.Wrapper data-pka-anchor="filter.filter-item">
      <styled.Select onChange={onChange} value={value} {...moreProps}>
        {children}
      </styled.Select>
      <styled.Trigger>{selectedLabel}</styled.Trigger>
    </styled.Wrapper>
  );
}

InlineSelect.propTypes = propTypes;
