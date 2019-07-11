import React from "react";
import PropTypes from "prop-types";
import RightArrowIcon from "@paprika/icon/lib/ArrowRight";
import DownArrowIcon from "@paprika/icon/lib/ArrowDown";
import useI18n from "@paprika/l10n/lib/useI18n";
import RawButton from "../../RawButton";
import collapsibleStyles from "./Collapsible.styles";

const propTypes = {
  a11yText: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  iconAlign: PropTypes.oneOf(["left", "right"]),
  iconCollapse: PropTypes.node,
  iconExpand: PropTypes.node,
  isCollapsed: PropTypes.bool,
  isDisabled: PropTypes.bool,
  hasOnlyIconToggle: PropTypes.bool,
  label: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

const defaultProps = {
  a11yText: null,
  children: null,
  className: null,
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
  let hasWarnedFora11yText = false;
  const collapsedIcon = [props.iconExpand, props.iconCollapse];

  const checkPropsError = () => {
    if (!props.a11yText && !(I18n && I18n.t) && !hasWarnedFora11yText) {
      hasWarnedFora11yText = true;
      console.error(
        "Error: It is necessary to provide either an a11yText prop or the i18n.t function via the L10n component for Collapsible."
      );
    }
  };

  const handleClickCollapse = event => {
    props.onClick(event);
  };

  const renderDefaultCollapsible = () => {
    const { a11yText, label, isCollapsed, isDisabled, iconAlign } = props;

    return (
      <RawButton
        ariaLabel={a11yText || I18n.t("collapsible.a11yText")}
        aria-expanded={!isCollapsed}
        className="collapsible__label"
        isDisabled={isDisabled}
        onClick={e => handleClickCollapse(e)}
      >
        <span className={`collapsible--icon-${iconAlign}`} aria-hidden="true">
          {collapsedIcon[+isCollapsed]}
        </span>
        {label}
      </RawButton>
    );
  };

  const renderCollapsibleByIcon = () => {
    const { a11yText, label, isCollapsed, isDisabled, iconAlign } = props;

    return (
      <div>
        <RawButton
          ariaLabel={a11yText || I18n.t("collapsible.a11yText")}
          aria-expanded={!isCollapsed}
          className="collapsible__label collapsible__label--is-toggle-icon-only"
          isDisabled={isDisabled}
          onClick={e => handleClickCollapse(e)}
        >
          <span className={`collapsible--icon-${iconAlign}`} aria-hidden="true">
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

  /* Destructuring is used to isolate additional props in moreProps and pass them along to
       Collapsible.  Several are not used by render() but they must remain in this statement to
       exclude them from moreProps.
    */

  const {
    a11yText,
    children,
    className,
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
  /* eslint-enable no-unused-vars */

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
