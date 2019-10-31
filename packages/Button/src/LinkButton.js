import React from "react";
import PropTypes from "prop-types";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import Button from "./Button";
import buttonStyles from "./Button.styles";

const LinkPropTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  isOpenNewTab: PropTypes.bool,
  kind: PropTypes.oneOf(Button.Kinds.ALL),
  size: PropTypes.oneOf(ShirtSizes.MEDIUM),
};

const LinkDefaultProps = {
  isOpenNewTab: true,
  kind: Button.Kinds.DEFAULT,
  size: ShirtSizes.MEDIUM,
};

const LinkButton = React.forwardRef((props, ref) => {
  const isOpenNewTabProps = {};
  if (props.isOpenNewTab) {
    isOpenNewTabProps.target = "_blank";
    isOpenNewTabProps.rel = "noopener noreferrer";
  }
  return (
    <a css={buttonStyles} {...props} ref={ref} href={props.href} {...isOpenNewTabProps}>
      {props.children}
    </a>
  );
});

LinkButton.Kinds = Button.Kinds;
LinkButton.displayName = "LinkButton";
LinkButton.propTypes = LinkPropTypes;
LinkButton.defaultProps = LinkDefaultProps;

export default LinkButton;
