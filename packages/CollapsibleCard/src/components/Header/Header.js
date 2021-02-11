import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import Button from "@paprika/button";
import ArrowUpIcon from "@paprika/icon/lib/ArrowUp";
import CollapsibleCardContext from "../../CollapsibleCardContext";
import * as sc from "./Header.styles";

export default function Header(props) {
  let resizeTimeout;
  const { children, breakpoint, onChangeIsBroken, ...moreProps } = props;

  const headerRef = React.useRef();
  const [isBroken, setIsBroken] = React.useState(null);
  const [collapsibleCardWidth, setCollapsibleCardWidth] = React.useState(null);
  const context = React.useContext(CollapsibleCardContext);

  React.useEffect(() => {
    (function iife() {
      setCollapsibleCardWidth(headerRef.current.offsetWidth);
    })();
  }, []);

  React.useEffect(() => {
    setIsBroken(collapsibleCardWidth < breakpoint);
  }, [collapsibleCardWidth, breakpoint, setIsBroken]);

  React.useEffect(() => {
    onChangeIsBroken(isBroken);
  }, [isBroken, onChangeIsBroken]);

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

  return (
    <sc.Header ref={headerRef}>
      <sc.HeaderContent isBroken={isBroken}>{newChildren}</sc.HeaderContent>
      <sc.ExpandToggle isCollapsed={context.isCollapsed}>
        <Button.Icon
          onClick={() => {
            context.handleToggleIsCollapsed();
          }}
          kind="minor"
        >
          <ArrowUpIcon />
        </Button.Icon>
      </sc.ExpandToggle>
    </sc.Header>
  );
}

const propTypes = {
  breakpoint: PropTypes.number,
  children: PropTypes.node,
  onChangeIsBroken: PropTypes.func,
  width: PropTypes.number,
};

const defaultProps = {
  breakpoint: 800,
  children: null,
  onChangeIsBroken: () => {},
  width: null,
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
Header.displayName = "CollapsibleCard.Header";
