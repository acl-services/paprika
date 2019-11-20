import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  /** The individual radio checkboxes. */

  groupDescription: PropTypes.string,

  children: PropTypes.node,
};

const defaultProps = {
  groupDescription: "",
  children: null,
};

const Group = ({ groupDescription, children }) => {
  return (
    <div role="radiogroup" aria-labelledby={groupDescription} data-pka-anchor="radio.group">
      {children}
    </div>
  );
};

Group.displayName = "Radio.Group";
Group.propTypes = propTypes;
Group.defaultProps = defaultProps;

export default Group;
