import React from "react";
import PropTypes from "prop-types";
import RightArrowIcon from "@paprika/icon/lib/ArrowRight";
import DownArrowIcon from "@paprika/icon/lib/ArrowDown";
import UpArrowIcon from "@paprika/icon/lib/ArrowUp";
import useI18n from "@paprika/l10n/lib/useI18n";
import RawButton from "@paprika/raw-button";
import * as sc from "./Collapsible.styles";

const propTypes = {
  /** Descriptive a11y text for assistive technologies. By default, text from children node will be used. */
  a11yText: PropTypes.string,

  /** Body content of the collapsible. */
  children: PropTypes.node,

  /** Set's icon alignment left or right. */
  iconAlign: PropTypes.oneOf(["left", "right"]),

  /** Sets RightArrowIcon if true. */
  iconCollapse: PropTypes.node,

  /** Sets DownArrowIcon if true. */
  iconExpand: PropTypes.node,

  /** State of the collapsible. */
  isCollapsed: PropTypes.bool,

  /** If the collapsible is disabled. */
  isDisabled: PropTypes.bool,

  hasOnlyIconToggle: PropTypes.bool,

  /** Sets the label that will display in the collapsible */
  label: PropTypes.node.isRequired,

  /** Callback to be executed when the button is clicked or activated by keyboard. */
  onClick: PropTypes.func,

  /** aria-describedby on the trigger element. */
  triggerAriaDescribedby: PropTypes.string,
};

const defaultProps = {
  a11yText: null,
  children: null,
  iconAlign: "left",
  iconCollapse: <RightArrowIcon />,
  iconExpand: <DownArrowIcon />,
  isCollapsed: true,
  isDisabled: false,
  hasOnlyIconToggle: false,
  onClick: () => {},
  triggerAriaDescribedby: null,
};

const Collapsible = props => {
  const I18n = useI18n();
  let hasWarnedForA11yText = false;

  const collapsedIcon =
    props.iconAlign === "right" ? [<UpArrowIcon />, <DownArrowIcon />] : [props.iconExpand, props.iconCollapse];

  const checkPropsError = () => {
    if (!props.a11yText && !(I18n && I18n.t) && !hasWarnedForA11yText) {
      hasWarnedForA11yText = true;
      console.error(
        "Error: It is necessary to provide either an a11yText prop or the i18n.t function via the L10n component for Collapsible."
      );
    }
  };

  const renderDefaultCollapsible = () => {
    const { a11yText, label, isCollapsed, isDisabled, triggerAriaDescribedby } = props;

    return (
      <RawButton
        a11yText={a11yText || I18n.t("collapsible.ariaText")}
        aria-expanded={!isCollapsed}
        data-pka-anchor="collapsible.trigger"
        isDisabled={isDisabled}
        onClick={props.onClick}
        aria-describedby={triggerAriaDescribedby}
      >
        <sc.CollapsibleIcon data-pka-anchor="collapsible.icon" aria-hidden="true">
          {collapsedIcon[+isCollapsed]}
        </sc.CollapsibleIcon>
        {label}
      </RawButton>
    );
  };

  const renderCollapsibleByIcon = () => {
    const { a11yText, label, isCollapsed, isDisabled, triggerAriaDescribedby } = props;

    return (
      <div data-pka-anchor="collapsible.heading">
        <RawButton
          a11yText={a11yText || I18n.t("collapsible.ariaText")}
          aria-expanded={!isCollapsed}
          data-pka-anchor="collapsible.iconTrigger"
          isDisabled={isDisabled}
          onClick={props.onClick}
          aria-describedby={triggerAriaDescribedby}
        >
          <sc.CollapsibleIcon data-pka-anchor="collapsible.icon" aria-hidden="true" className="collapsible__icon">
            {collapsedIcon[+isCollapsed]}
          </sc.CollapsibleIcon>
        </RawButton>
        {label}
      </div>
    );
  };

  React.useEffect(() => {
    checkPropsError();
  });

  const {
    a11yText,
    children,
    iconAlign,
    iconCollapse,
    iconExpand,
    isCollapsed,
    isDisabled,
    hasOnlyIconToggle,
    onClick,
    label,
    ...moreProps
  } = props;

  const collapsibleProps = {
    isCollapsed,
  };

  const hiddenStyles = {
    display: "none",
  };

  return (
    <sc.Collapsible {...collapsibleProps} role="group" {...moreProps}>
      {hasOnlyIconToggle ? renderCollapsibleByIcon() : renderDefaultCollapsible()}
      <sc.CollapsibleBody style={isCollapsed ? hiddenStyles : null}>{children}</sc.CollapsibleBody>
    </sc.Collapsible>
  );
};

Collapsible.displayName = "Collapsible";
Collapsible.propTypes = propTypes;
Collapsible.defaultProps = defaultProps;

export default Collapsible;
