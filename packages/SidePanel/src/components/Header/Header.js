import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";

import { headerCSS } from "./Header.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  hasCloseButton: PropTypes.bool,
  isCompact: PropTypes.bool,
  kind: PropTypes.oneOf([Button.Kinds.DEFAULT, Button.Kinds.PRIMARY]),
  onClose: PropTypes.func,
};

const defaultProps = {
  hasCloseButton: true,
  kind: Button.Kinds.DEFAULT,
  isCompact: false,
  onClose: () => {},
};

function darkBackgroundProps(kind) {
  if (kind === Button.Kinds.PRIMARY) {
    return { isDark: true };
  }

  return {};
}

const Header = React.forwardRef((props, ref) => {
  const {
    hasCloseButton,
    kind,
    isCompact,
    // injected by Dialog.js
    onClose,
    ...moreProps
  } = props;

  return (
    <div ref={ref} css={headerCSS} kind={kind} isCompact={isCompact} {...moreProps}>
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
Header.displayName = "SidePanel.Header";

export default Header;
