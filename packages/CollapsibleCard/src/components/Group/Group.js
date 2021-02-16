import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import * as sc from "./Group.styles";

export default function Group(props) {
  const { children } = props;
  const newChildren = [];

  React.Children.map(children, (child, index) => {
    if (child.type.displayName === "Header") {
      if (index > 0) {
        console.error(`The "Header" must be the firstchild of CollapsibleCard.Group`);
      }
    } else if (child.type.displayName !== "CollapsibleCard") {
      console.error(
        `Invalid child of CollapsibleCard.Group; expected "CollapsibleCard" and received "${child.type.displayName}".`
      );
    }

    const isFirstRow = index === 0;
    const isLastRow = index === React.Children.toArray(children).length - 1;
    const isMiddleRow = !isFirstRow && !isLastRow;

    newChildren.push(React.cloneElement(child, { isFirstRow, isMiddleRow, isLastRow, key: uuidv4() }));
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
