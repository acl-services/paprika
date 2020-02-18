import React from "react";
import PropTypes from "prop-types";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import Button from "./Button";
import buttonStyles from "./Button.styles";

const LinkPropTypes = {
  a11yText: PropTypes.string,
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  isOpenNewTab: PropTypes.bool,
  kind: PropTypes.oneOf(Button.Kinds.ALL),
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
};

const LinkDefaultProps = {
  a11yText: null,
  isOpenNewTab: true,
  kind: Button.Kinds.DEFAULT,
  size: ShirtSizes.MEDIUM,
};

const isOpenNewTabProps = {
  target: "_blank",
  rel: "noopener noreferrer",
};

const LinkButton = React.forwardRef(({ a11yText, children, href, isOpenNewTab, kind, size, ...moreProps }, ref) => {
  return (
    <a
      css={buttonStyles}
      ref={ref}
      href={href}
      aria-label={a11yText}
      kind={kind}
      size={size}
      {...(isOpenNewTab ? isOpenNewTabProps : {})}
      {...moreProps}
    >
      {children}
    </a>
  );
});

LinkButton.Kinds = Button.Kinds;
LinkButton.displayName = "LinkButton";
LinkButton.propTypes = LinkPropTypes;
LinkButton.defaultProps = LinkDefaultProps;

export default LinkButton;
