import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import { POSITIONS } from "../../CollapsibleCard";
import * as sc from "./Group.styles";

export default function Group(props) {
  const { children } = props;
  const newChildren = [];

  React.Children.map(children, (child, index) => {
    if (child.type.displayName === "Header") {
      if (index > 0) {
        console.error(`The "Header" must be the first child of CollapsibleCard.Group`);
      }
    } else if (child.type.displayName !== "CollapsibleCard") {
      console.error(
        `Invalid child of CollapsibleCard.Group; expected "CollapsibleCard" and received "${child.type.displayName}".`
      );
    }

    let position;
    if (index === 0) {
      position = POSITIONS.FIRST;
    } else if (index === React.Children.toArray(children).length - 1) {
      position = POSITIONS.LAST;
    } else {
      position = POSITIONS.MIDDLE;
    }

    newChildren.push(React.cloneElement(child, { position, key: uuidv4() }));
  });

  return <sc.Group>{newChildren}</sc.Group>;
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
