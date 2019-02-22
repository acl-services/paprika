import React from "react";
import { string, bool, node, func } from "prop-types";
import uuidv4 from "uuid/v4";

const propTypes = {
  isDisabled: bool, // eslint-disable-line
  children: node.isRequired,
  label: string, // eslint-disable-line
  onDelete: func,
};

const defaultProps = {
  onDelete: () => {},
};

const id = `ListBox_Tag_${uuidv4()}`;

export default function Option(props) {
  const handleOptionClick = event => {
    event.stopPropagation();
    props.onDelete();
  };

  return (
    <li>
      <label htmlFor={id}>
        {props.children}{" "}
        <button id={id} type="button" onClick={handleOptionClick} aria-label="delete">
          &times;
        </button>
      </label>
    </li>
  );
}

Option.propTypes = propTypes;
Option.defaultProps = defaultProps;
