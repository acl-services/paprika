import React from "react";
import { string, bool, node, func } from "prop-types";

const propTypes = {
  isDisabled: bool,
  children: node.isRequired,
  label: string,
  onDelete: func,
};

const defaultProps = {
  onDelete: () => {},
};

export default function Option(props) {
  const handleOptionClick = event => {
    event.stopPropagation();
    props.onDelete();
  };
  return (
    <li>
      <label>
        {props.children}{" "}
        <button onClick={handleOptionClick} aria-label="delete">
          &times;
        </button>
      </label>
    </li>
  );
}

Option.propTypes = propTypes;
Option.defaultProps = defaultProps;
