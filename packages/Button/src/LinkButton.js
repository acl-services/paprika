import React from "react";
import PropTypes from "prop-types";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import NewTabIcon from "@paprika/icon/lib/NewTab";
import Button from "./Button";
import buttonStyles from "./Button.styles";
import * as sc from "./LinkButton.styles";

const propTypes = {
  a11yText: PropTypes.string,
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  kind: PropTypes.oneOf(Button.Kinds.ALL),
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
  shouldOpenNewTab: PropTypes.bool,
  suffixIcon: PropTypes.node,
};

const defaultProps = {
  a11yText: null,
  isDisabled: false,
  kind: Button.Kinds.LINK,
  shouldOpenNewTab: false,
  size: ShirtSizes.MEDIUM,
  suffixIcon: <NewTabIcon />,
};

const LinkButton = React.forwardRef((props, ref) => {
  const { a11yText, children, href, isDisabled, shouldOpenNewTab, kind, size, suffixIcon, ...moreProps } = props;

  const shouldOpenNewTabProps = {
    target: "_blank",
    rel: "noopener noreferrer",
  };

  const iconProps = {
    isDisabled,
    kind,
  };

  return (
    <a
      aria-label={a11yText}
      css={buttonStyles}
      href={!isDisabled ? href : null}
      isDisabled={isDisabled}
      kind={kind}
      size={size}
      {...(shouldOpenNewTab ? shouldOpenNewTabProps : {})}
      {...moreProps}
      as={isDisabled ? "span" : "a"}
      ref={ref}
    >
      {children}
      <sc.LinkButtonIcon {...iconProps} isSuffixIcon>
        {kind === Button.Kinds.LINK && shouldOpenNewTab && suffixIcon}
      </sc.LinkButtonIcon>
    </a>
  );
});

LinkButton.displayName = "LinkButton";
LinkButton.propTypes = propTypes;
LinkButton.defaultProps = defaultProps;
LinkButton.Kinds = Button.Kinds;

export default LinkButton;
