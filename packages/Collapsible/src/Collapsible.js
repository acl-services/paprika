import React from "react";
import PropTypes from "prop-types";
import RightArrowIcon from "@paprika/icon/lib/ArrowRight";
import DownArrowIcon from "@paprika/icon/lib/ArrowDown";
import UpArrowIcon from "@paprika/icon/lib/ArrowUp";
import useI18n from "@paprika/l10n/lib/useI18n";
import RawButton from "@paprika/raw-button";
import collapsibleStyles from "./Collapsible.styles";

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
};

const Collapsible = props => {
  const I18n = useI18n();
  let hasWarnedForA11yText = false;

  const [collapsedIcon, setCollapsedIcon] = React.useState([props.iconExpand, props.iconCollapse]);

  React.useEffect(() => {
    if (props.iconAlign === "right") {
      setCollapsedIcon([<UpArrowIcon />, <DownArrowIcon />]);
    } else {
      setCollapsedIcon([props.iconExpand, props.iconCollapse]);
    }
  }, []);

  const checkPropsError = () => {
    if (!props.a11yText && !(I18n && I18n.t) && !hasWarnedForA11yText) {
      hasWarnedForA11yText = true;
      console.error(
        "Error: It is necessary to provide either an a11yText prop or the i18n.t function via the L10n component for Collapsible."
      );
    }
  };

  const renderDefaultCollapsible = () => {
    const { a11yText, label, isCollapsed, isDisabled, iconAlign } = props;

    return (
      <RawButton
        a11yText={a11yText || I18n.t("collapsible.a11yText")}
        aria-expanded={!isCollapsed}
        className="collapsible__label"
        isDisabled={isDisabled}
        onClick={props.onClick}
      >
        <span
          data-pka-anchor="collapsible.icon"
          className={`collapsible__icon collapsible__icon--${iconAlign}`}
          aria-hidden="true"
        >
          {collapsedIcon[+isCollapsed]}
        </span>
        {label}
      </RawButton>
    );
  };

  const renderCollapsibleByIcon = () => {
    const { a11yText, label, isCollapsed, isDisabled, iconAlign } = props;

    return (
      <div data-pka-anchor="collapsible.heading">
        <RawButton
          a11yText={a11yText || I18n.t("collapsible.a11yText")}
          aria-expanded={!isCollapsed}
          className={`collapsible__label collapsible__label--is-toggle-icon-only collapsible__label--${iconAlign}`}
          isDisabled={isDisabled}
          onClick={props.onClick}
        >
          <span data-pka-anchor="collapsible.icon" aria-hidden="true" className="collapsible__icon">
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

  const hiddenStyles = {
    display: "none",
  };

  return (
    <div css={collapsibleStyles} {...collapsibleProps} role="group" {...moreProps}>
      {hasOnlyIconToggle ? renderCollapsibleByIcon() : renderDefaultCollapsible()}
      <div className="collapsible__body" style={isCollapsed ? hiddenStyles : null}>
        {children}
      </div>
    </div>
  );
};

Collapsible.displayName = "Collapsible";
Collapsible.propTypes = propTypes;
Collapsible.defaultProps = defaultProps;

export default Collapsible;
