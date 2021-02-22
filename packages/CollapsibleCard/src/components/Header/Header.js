import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import Button from "@paprika/button";
import ArrowUpIcon from "@paprika/icon/lib/ArrowUp";
import useI18n from "@paprika/l10n/lib/useI18n";
import CollapsibleCardContext from "../../CollapsibleCardContext";
import * as sc from "./Header.styles";

export default function Header(props) {
  const resizeTimeout = React.useRef(null);
  const I18n = useI18n();
  const { breakpoint, onChangeIsBroken } = props;

  const headerRef = React.useRef();
  const [isBroken, setIsBroken] = React.useState(null);
  const [collapsibleCardWidth, setCollapsibleCardWidth] = React.useState(null);
  const context = React.useContext(CollapsibleCardContext);

  React.useEffect(() => {
    (function iife() {
      setCollapsibleCardWidth(headerRef.current.offsetWidth);
    })();

    function handleResizeWindow() {
      clearTimeout(resizeTimeout.current);
      resizeTimeout.current = setTimeout(() => {
        setCollapsibleCardWidth(headerRef.current.offsetWidth);
      }, 200);
    }

    window.addEventListener("resize", handleResizeWindow);
    return () => window.removeEventListener("resize", handleResizeWindow);
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

  return (
    <sc.Header
      data-pka-anchor="collapsible.header"
      isEditing={context.isEditing}
      isCollapsed={context.isCollapsed}
      isFirstRow={context.isFirstRow}
      isLastRow={context.isLastRow}
      isMiddleRow={context.isMiddleRow}
      onClick={() => {
        context.handleToggleIsCollapsed();
      }}
      onKeyPress={e => {
        if ([" ", "Enter"].includes(e.key)) {
          context.handleToggleIsCollapsed();
          e.preventDefault();
        }
      }}
      ref={headerRef}
      tabIndex={0}
    >
      <sc.HeaderContent isBroken={isBroken}>{newChildren}</sc.HeaderContent>
      <sc.ExpandToggle isCollapsed={context.isCollapsed}>
        <Button.Icon
          a11yText={context.isCollapsed ? I18n.t("collapsible.expand") : I18n.t("collapsible.collapse")}
          aria-hidden
          onClick={() => {}}
          kind="minor"
          tabIndex={-1}
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
};

const defaultProps = {
  breakpoint: 800,
  children: null,
  onChangeIsBroken: () => {},
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
Header.displayName = "CollapsibleCard.Header";
