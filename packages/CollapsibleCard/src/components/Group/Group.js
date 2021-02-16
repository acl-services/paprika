import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import * as sc from "./Group.styles";

// Put the box-shadow on the entire group, since i strip it from the cards

// note they have one example grouping with Tabs in the header, which would need no bottom padding. maybe give it no styling at all?

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

    const isLastRow = index === React.Children.toArray(children).length - 1;
    newChildren.push(React.cloneElement(child, { isLastRow, isRow: !isLastRow, key: uuidv4() }));
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
