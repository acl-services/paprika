import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";

import { headerCSS } from "./Header.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  hasCloseButton: PropTypes.bool,
  kind: PropTypes.oneOf(["default", "primary"]),
  onClose: PropTypes.func,
};

const defaultProps = {
  hasCloseButton: true,
  kind: "default",
  onClose: () => {},
};

function darkBackgroundProps(kind) {
  if (kind === "primary") {
    return { isDark: true };
  }

  return {};
}

const Header = React.forwardRef((props, ref) => {
  const {
    hasCloseButton,
    kind,
    // injected by Dialog.js
    onClose,
    ...moreProps
  } = props;

  return (
    <div ref={ref} css={headerCSS} kind={kind} {...moreProps}>
      <div tabIndex="-1">{props.children}</div>
      <div>
        {hasCloseButton ? (
          <Button.Close
            data-pka-anchor="sidepanel-header-close"
            isSemantic={false}
            onClick={onClose}
            {...darkBackgroundProps(kind)}
            size={ShirtSizes.SMALL}
          />
        ) : null}
      </div>
    </div>
  );
});

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
Header.componentType = "SidePanel.Header";

export default Header;
