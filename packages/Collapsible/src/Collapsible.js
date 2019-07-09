import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import RightArrowIcon from "@paprika/icon/lib/ArrowRight";
import DownArrowIcon from "@paprika/icon/lib/ArrowDown";
import useI18n from "@paprika/l10n/lib/useI18n";
import RawButton from "../../RawButton";
import "./Collapsible.scss";

const Collapsible = props => {
  const I18n = useI18n();
  let hasWarnedForAriaText = false;

  const collapsedIcon = () => {
    const { iconExpand, iconCollapse } = props;

    return [iconExpand, iconCollapse];
  };

  const checkPropsError = () => {
    if (!props.ariaText && !(I18n && I18n.t) && !hasWarnedForAriaText) {
      hasWarnedForAriaText = true;
      console.error(
        "Error: It is necessary to provide either an ariaText prop or the i18n.t function via the L10n component for Collapsible."
      );
    }
  };

  const handleClickCollapse = event => {
    props.onClick(event);
  };

  const renderDefaultCollapsible = () => {
    const { ariaText, label, isCollapsed, isDisabled, iconAlign } = props;

    return (
      <RawButton
        ariaLabel={ariaText || I18n.t("collapsible.ariaText")}
        aria-expanded={!isCollapsed}
        className="aclui-collapsible__label"
        isDisabled={isDisabled}
        onClick={e => handleClickCollapse(e)}
      >
        <span className={`aclui-collapsible--icon-${iconAlign}`} aria-hidden="true">
          {collapsedIcon[+isCollapsed]}
        </span>
        {label}
      </RawButton>
    );
  };

  const renderCollapsibleByIcon = () => {
    const { ariaText, label, isCollapsed, isDisabled, iconAlign } = props;

    return (
      <div>
        <RawButton
          ariaLabel={ariaText || I18n.t("collapsible.ariaText")}
          aria-expanded={!isCollapsed}
          className="aclui-collapsible__label aclui-collapsible__label--is-toggle-icon-only"
          isDisabled={isDisabled}
          onClick={e => handleClickCollapse(e)}
        >
          <span className={`aclui-collapsible--icon-${iconAlign}`} aria-hidden="true">
            {collapsedIcon[+isCollapsed]}
          </span>
        </RawButton>
        {label}
      </div>
    );
  };

  // checkPropsError();

  React.useEffect(() => {
    checkPropsError();
  });

  /* Destructuring is used to isolate additional props in moreProps and pass them along to
       Collapsible.  Several are not used by render() but they must remain in this statement to
       exclude them from moreProps.
    */
  const {
    ariaText,
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

  const rootClasses = classNames(
    "aclui-collapsible",
    className,
    { "aclui-collapsible--is-open": !isCollapsed },
    { "is-disabled": isDisabled }
  );

  return (
    <div className={rootClasses} role="group" {...moreProps}>
      {hasOnlyIconToggle ? renderCollapsibleByIcon() : renderDefaultCollapsible()}
      <div className="aclui-collapsible__body">{children}</div>
    </div>
  );
};

// Collapsible.contextTypes = {
//   t: PropTypes.func,
// };

Collapsible.propTypes = {
  ariaText: PropTypes.string,
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

Collapsible.defaultProps = {
  ariaText: null,
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

export default Collapsible;
