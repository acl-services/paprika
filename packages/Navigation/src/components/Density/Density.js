import React from "react";
import PropTypes from "prop-types";
import DropdownMenu from "@paprika/dropdown-menu";
import { size } from "@paprika/helpers/lib/types";

const propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOf([size.SMALL, size.MEDIUM, size.LARGE]),
};

const defaultProps = {
  value: size.SMALL,
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
      <DropdownMenu.Item onClick={handleClick(size.SMALL)}>Dense</DropdownMenu.Item>
      <DropdownMenu.Item onClick={handleClick(size.MEDIUM)}>Default</DropdownMenu.Item>
      <DropdownMenu.Item onClick={handleClick(size.LARGE)}>Loose</DropdownMenu.Item>
    </DropdownMenu>
  );
}

Density.propTypes = propTypes;
Density.defaultProps = defaultProps;
Density.displayName = "Navigation.Density";
