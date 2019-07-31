/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from "react";
import PropTypes from "prop-types";
import classNames from "class-names";
import RightArrowIcon from "@paprika/icon/lib/ArrowRight";
import DownArrowIcon from "@paprika/icon/lib/ArrowDown";
import useI18n from "@paprika/l10n/lib/useI18n";
import RawButton from "@paprika/raw-button";
import collapsibleStyles, { operationsWrapperStyles } from "./Collapsible.styles";

const propTypes = {
  a11yText: PropTypes.string,
  children: PropTypes.node,
  hasOnlyIconToggle: PropTypes.bool,
  iconAlign: PropTypes.oneOf(["left", "right"]),
  iconCollapse: PropTypes.node,
  iconExpand: PropTypes.node,
  isCollapsed: PropTypes.bool,
  isDisabled: PropTypes.bool,
  label: PropTypes.node.isRequired,
  onClick: PropTypes.func,

  /** Elements we'll put on the right of collapsible header. Only operational buttons are recommended. */
  operations: PropTypes.node,
};

const defaultProps = {
  a11yText: null,
  children: null,
  hasOnlyIconToggle: false,
  iconAlign: "left",
  iconCollapse: <RightArrowIcon />,
  iconExpand: <DownArrowIcon />,
  isCollapsed: true,
  isDisabled: false,
  onClick: () => {},
  operations: null,
};

const Collapsible = props => {
  const I18n = useI18n();
  let hasWarnedForA11yText = false;
  const collapsedIcon = [props.iconExpand, props.iconCollapse];

  const checkPropsError = () => {
    if (!props.a11yText && !(I18n && I18n.t) && !hasWarnedForA11yText) {
      hasWarnedForA11yText = true;
      console.error(
        "Error: It is necessary to provide either an a11yText prop or the i18n.t function via the L10n component for Collapsible."
      );
    }
  };

  const handleClickCollapse = event => {
    props.onClick(event);
  };

  const renderOperations = () => {
    const { operations } = props;
    const handleClickOperations = e => {
      e.stopPropagation();
    };

    return operations ? (
      <span css={operationsWrapperStyles} onClick={handleClickOperations}>
        {operations}
      </span>
    ) : null;
  };

  const renderDefaultCollapsible = () => {
    const { a11yText, iconAlign, isCollapsed, isDisabled, label } = props;

    return (
      <RawButton
        a11yText={a11yText || I18n.t("collapsible.a11yText")}
        aria-expanded={!isCollapsed}
        className="collapsible__label"
        isDisabled={isDisabled}
        onClick={handleClickCollapse}
      >
        {renderOperations()}
        <span data-pka-anchor="collapsible.icon" className={`collapsible--icon-${iconAlign}`} aria-hidden="true">
          {collapsedIcon[+isCollapsed]}
        </span>
        {label}
      </RawButton>
    );
  };

  const renderCollapsibleByIcon = () => {
    const { a11yText, iconAlign, isCollapsed, isDisabled, label } = props;

    return (
      <div data-pka-anchor="collapsible.heading">
        {renderOperations()}
        <RawButton
          a11yText={a11yText || I18n.t("collapsible.a11yText")}
          aria-expanded={!isCollapsed}
          className={classNames("collapsible__label", "collapsible__label--is-toggle-icon-only", {
            "collapsible__label--is-float-right": iconAlign === "right",
          })}
          isDisabled={isDisabled}
          onClick={handleClickCollapse}
        >
          <span data-pka-anchor="collapsible.icon" className={`collapsible--icon-${iconAlign}`} aria-hidden="true">
            {collapsedIcon[+isCollapsed]}
          </span>
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

  return (
    <div css={collapsibleStyles} {...collapsibleProps} role="group" {...moreProps}>
      {hasOnlyIconToggle ? renderCollapsibleByIcon() : renderDefaultCollapsible()}
      <div className="collapsible__body">{children}</div>
    </div>
  );
};

Collapsible.displayName = "Collapsible";
Collapsible.propTypes = propTypes;
Collapsible.defaultProps = defaultProps;

export default Collapsible;
