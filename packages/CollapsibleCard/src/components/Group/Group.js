import React from "react";
import PropTypes from "prop-types";
import Header from "./components/Header";
import { POSITIONS } from "../../CollapsibleCard";
import * as sc from "./Group.styles";

export default function Group(props) {
  const { children } = props;

  return (
    <sc.Group>
      {React.Children.map(children, (child, index) => {
        if (child.props.position) {
          return child;
        }

        let position;
        if (index === 0) {
          position = POSITIONS.FIRST;
        } else if (index === React.Children.toArray(children).length - 1) {
          position = POSITIONS.LAST;
        } else {
          position = POSITIONS.MIDDLE;
        }

        return React.cloneElement(child, { position });
      })}
    </sc.Group>
  );
}

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

Group.propTypes = propTypes;
Group.defaultProps = defaultProps;
Group.Header = Header;
