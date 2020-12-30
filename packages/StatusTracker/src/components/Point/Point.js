import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import OverflowMenu from "@paprika/overflow-menu";
import Popover from "@paprika/popover";
import RawButton from "@paprika/raw-button";
import { extractChildren } from "@paprika/helpers";
import { kinds } from "../../types";
import * as sc from "./Point.styles";

const Point = React.forwardRef((props, ref) => {
  const { children, kind, name, description, ...moreProps } = props;
  const [isTooltipOpen, setIsTooltipOpen] = React.useState(false);
  const [isOverflowMenuOpen, setIsOverflowMenuOpen] = React.useState(false);
  const overflowMenuRef = React.useRef(null);
  const { OverflowMenu: extractedOverflowMenu } = extractChildren(children, ["OverflowMenu"]);

  React.useImperativeHandle(ref, () => ({
    closeMenu: () => {
      setIsOverflowMenuOpen(false);
    },
  }));

  function handleTooltipOpen() {
    if (!isOverflowMenuOpen) {
      setIsTooltipOpen(true);
    }
  }

  function handleTooltipClose() {
    setIsTooltipOpen(false);
  }

  function handleOverflowMenuOpen() {
    setIsOverflowMenuOpen(true);
    setIsTooltipOpen(false);

    setTimeout(() => {
      if (overflowMenuRef.current) {
        overflowMenuRef.current.focusAndSetIndex(0);
      }
    }, 250);
  }

  function handleOverflowMenuClose() {
    setIsOverflowMenuOpen(false);
  }

  function getTrigger(handler, a11yAttributes) {
    if (kind === kinds.CURRENT && extractedOverflowMenu) {
      const { children: overflowMenuChildren } = extractedOverflowMenu.props;
      const { "OverflowMenu.Trigger": extractedOverflowMenuTrigger } = extractChildren(overflowMenuChildren, [
        "OverflowMenu.Trigger",
      ]);

      return (
        <sc.Point
          onMouseOver={handleTooltipOpen}
          onMouseOut={handleTooltipClose}
          onFocus={handleTooltipOpen}
          onBlur={handleTooltipClose}
          kind={kind}
          data-pka-anchor="status-tracker.point"
        >
          {React.cloneElement(
            extractedOverflowMenu,
            {
              isOpen: isOverflowMenuOpen,
              onClose: handleOverflowMenuClose,
              ref: overflowMenuRef,
              "data-pka-anchor": "status-tracker.point.overflow-menu",
            },
            <>
              {extractedOverflowMenuTrigger ? (
                React.cloneElement(
                  extractedOverflowMenuTrigger,
                  {
                    buttonType: OverflowMenu.Trigger.types.button.SIMPLE,
                    isDropdown: true,
                    kind: Button.types.kind.PRIMARY,
                    onClick: handleOverflowMenuOpen,
                    "data-pka-anchor": "status-tracker.point.overflow-menu.trigger",
                    "aria-describedby": a11yAttributes["aria-describedby"],
                  },
                  name
                )
              ) : (
                <OverflowMenu.Trigger
                  buttonType={OverflowMenu.Trigger.types.button.SIMPLE}
                  isDropdown
                  kind={Button.types.kind.PRIMARY}
                  onClick={handleOverflowMenuOpen}
                  data-pka-anchor="status-tracker.point.overflow-menu.trigger"
                  aria-describedby={a11yAttributes["aria-describedby"]}
                >
                  {name}
                </OverflowMenu.Trigger>
              )}

              {extractedOverflowMenuTrigger
                ? overflowMenuChildren.filter(child => !child.type || child.type.displayName !== "OverflowMenu.Trigger")
                : overflowMenuChildren}
            </>
          )}
        </sc.Point>
      );
    }

    return (
      <sc.Point
        aria-label={name}
        onMouseOver={handleTooltipOpen}
        onMouseOut={handleTooltipClose}
        onFocus={handleTooltipOpen}
        onBlur={handleTooltipClose}
        kind={kind}
        as={RawButton}
        data-pka-anchor="status-tracker.point"
        {...a11yAttributes}
      >
        {" "}
      </sc.Point>
    );
  }

  return (
    <sc.PointWrapper aria-current={kind === kinds.CURRENT} kind={kind} {...moreProps}>
      <sc.Popover isEager isDark isOpen={isTooltipOpen}>
        <Popover.Trigger>{getTrigger}</Popover.Trigger>
        <Popover.Content>
          <sc.PopoverCard hasBoth={Boolean(name) && Boolean(description)}>
            {name ? <sc.NameInTooltip data-pka-anchor="status-tracker.point.name">{name}</sc.NameInTooltip> : null}
            {description ? (
              <sc.Description data-pka-anchor="status-tracker.point.description">{description}</sc.Description>
            ) : null}
          </sc.PopoverCard>
        </Popover.Content>
        <Popover.Tip />
      </sc.Popover>
    </sc.PointWrapper>
  );
});

const StatusTracker = {
  types: {
    kind: {
      CURRENT: kinds.CURRENT,
      FUTURE: kinds.FUTURE,
      PAST: kinds.PAST,
    },
  },
};

const propTypes = {
  children: PropTypes.node,

  /** The description of current status point will be shown in the tooltip. */
  description: PropTypes.node,

  /** Kind of current status point. */
  kind: PropTypes.oneOf([
    StatusTracker.types.kind.CURRENT,
    StatusTracker.types.kind.FUTURE,
    StatusTracker.types.kind.PAST,
  ]),

  /** The name of current status point will be shown in the tooltip. */
  name: PropTypes.node,
};

const defaultProps = {
  children: null,
  description: null,
  kind: StatusTracker.types.kind.FUTURE,
  name: null,
};

Point.displayName = "StatusTracker.Point";
Point.propTypes = propTypes;
Point.defaultProps = defaultProps;

export default Point;
