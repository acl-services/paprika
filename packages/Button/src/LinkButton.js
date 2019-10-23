import React from "react";
import PropTypes from "prop-types";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
// import iconButtonStyles from "./IconButton.styles";
import Button from "./Button";

const LinkPropTypes = {
  children: PropTypes.node.isRequired,
  kind: PropTypes.oneOf(Button.Kinds.ALL),
  size: PropTypes.oneOf(ShirtSizes.MEDIUM),
  url: PropTypes.string,
};

const LinkDefaultProps = {
  kind: Button.Kinds.DEFAULT,
  size: ShirtSizes.MEDIUM,
  url: null,
};
function redirect_to(url) {
  window.location = url;
}
const LinkButton = React.forwardRef((props, ref) => {
  const buttonProps = {
    children: null,
    icon: props.children,
    isFullWidth: false,
  };
  // debugger/
  // buttonProps.children = <a href={props.url} />
  return (
    <Button
      {...props}
      {...buttonProps}
      ref={ref}
      onClick={() => {
        redirect_to(props.url);
      }}
    >
      {buttonProps.children}
    </Button>
  );
});

LinkButton.Kinds = Button.Kinds;
LinkButton.displayName = "LinkButton";
LinkButton.propTypes = LinkPropTypes;
LinkButton.defaultProps = LinkDefaultProps;

export default LinkButton;
