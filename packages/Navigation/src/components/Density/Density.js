import React from "react";
import PropTypes from "prop-types";
import DropdownMenu from "@paprika/dropdown-menu";

const propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOf(["small", "medium", "large"]),
};

const defaultProps = {
  value: "small",
};

export default function Density(props) {
  // eslint-disable-next-line no-unused-vars
  const { value, onChange } = props;

  const handleClick = value => () => {
    onChange(value);
  };

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger kind="flat">Density</DropdownMenu.Trigger>
      <DropdownMenu.Item onClick={handleClick("small")}>Dense</DropdownMenu.Item>
      <DropdownMenu.Item onClick={handleClick("medium")}>Default</DropdownMenu.Item>
      <DropdownMenu.Item onClick={handleClick("large")}>Loose</DropdownMenu.Item>
    </DropdownMenu>
  );
}

Density.propTypes = propTypes;
Density.defaultProps = defaultProps;
Density.displayName = "Navigation.Density";
