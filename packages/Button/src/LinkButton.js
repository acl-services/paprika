import React from "react";
import PropTypes from "prop-types";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import Button from "./Button";
import buttonStyles from "./Button.styles";

const LinkPropTypes = {
  children: PropTypes.node.isRequired,
  kind: PropTypes.oneOf(Button.Kinds.ALL),
  size: PropTypes.oneOf(ShirtSizes.MEDIUM),
  href: PropTypes.string,
  text: PropTypes.string,
  isOpenNewTab: PropTypes.bool,
};

const LinkDefaultProps = {
  kind: Button.Kinds.DEFAULT,
  size: ShirtSizes.MEDIUM,
  href: null,
  text: "Link",
  isOpenNewTab: true,
};

const LinkButton = React.forwardRef((props, ref) => {
  const buttonProps = {
    children: null,
  };
  console.log(props);
  if (props.isOpenNewTab) {
    return (
      <a
        css={buttonStyles}
        {...props}
        {...buttonProps}
        ref={ref}
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.text}
        {buttonProps.children}
      </a>
    );
  }
  return (
    <a css={buttonStyles} {...props} {...buttonProps} ref={ref} href={props.href}>
      {props.text}
      {buttonProps.children}
    </a>
  );
});

LinkButton.Kinds = Button.Kinds;
LinkButton.displayName = "LinkButton";
LinkButton.propTypes = LinkPropTypes;
LinkButton.defaultProps = LinkDefaultProps;

export default LinkButton;
