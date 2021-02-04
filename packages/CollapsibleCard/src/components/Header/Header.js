import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import Button from "@paprika/button";
import ArrowUpIcon from "@paprika/icon/lib/ArrowUp";
import CollapsibleCardContext from "../../CollapsibleCardContext";
// import * as sc from "./Header.styles";

// It seems laggy...? but mabye that's storybook?

export default function Header(props) {
  const headerRef = React.useRef();
  let resizeTimeout;

  const { children, breakpoint, ...moreProps } = props;
  const [isBlock, setIsBlock] = React.useState(null);
  const [collapsibleCardWidth, setCollapsibleCardWidth] = React.useState(null);
  const context = React.useContext(CollapsibleCardContext);

  React.useEffect(() => {
    (function iife() {
      setCollapsibleCardWidth(headerRef.current.offsetWidth);
    })();
  }, []);

  React.useEffect(() => {
    setIsBlock(collapsibleCardWidth < breakpoint);
  }, [collapsibleCardWidth, breakpoint, setIsBlock]);

  const numberOfChildren = React.Children.count(props.children);
  const newChildren = [];
  React.Children.forEach(props.children, child => {
    if (child.type.displayName !== "CollapsibleCard.Segment") {
      console.error(
        `CollapsibleCard.Header's children should only be of type "CollapsibleCard.Segment". You provided a child of the type "${child.type.name}".`
      );
    }

    if (child.props.width) {
      newChildren.push(child);
    } else {
      const newChild = React.cloneElement(child, {
        key: uuidv4(),
        width: child.props.width || 100 / numberOfChildren,
      });
      newChildren.push(newChild);
    }
  });

  function handleResizeWindow() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      setCollapsibleCardWidth(headerRef.current.offsetWidth);
    }, 200);
  }

  window.addEventListener("resize", handleResizeWindow);

  const isBlockClass = isBlock ? "collapsible-card-header__content--is-block" : "";
  return (
    <div ref={headerRef} className="collapsible-card-header">
      <div className={`collapsible-card-header__content ${isBlockClass}`}>
        width: {collapsibleCardWidth}
        <br />
        breakpoint: {breakpoint}
        <br />
        {newChildren}
      </div>
      <div className="collapsible-card-header__expand-toggle">
        <Button.Icon
          onClick={() => {
            context.setIsCollapsed(isCollapsed => !isCollapsed);
          }}
          kind="minor"
        >
          <ArrowUpIcon />
        </Button.Icon>
      </div>
    </div>
  );
}

const propTypes = {
  breakpoint: PropTypes.number,
  children: PropTypes.node,
  width: PropTypes.number,
};

const defaultProps = {
  breakpoint: 800,
  children: null,
  width: null,
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
Header.displayName = "CollapsibleCard.Header";
