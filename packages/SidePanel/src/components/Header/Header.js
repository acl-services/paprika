import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import Heading from "@paprika/heading";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";

import { headerCSS } from "./Header.styles";

const propTypes = {
  children: PropTypes.node.isRequired,
  hasCloseButton: PropTypes.bool,
  isCompact: PropTypes.bool,
  kind: PropTypes.oneOf([Button.Kinds.DEFAULT, Button.Kinds.PRIMARY]),
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  onClose: PropTypes.func,
};

const defaultProps = {
  hasCloseButton: true,
  kind: Button.Kinds.DEFAULT,
  level: 2,
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
    isCompact,
    kind,
    level,
    // injected by Dialog.js
    onClose,
    ...moreProps
  } = props;

  return (
    <div data-pka-anchor="sidepanel.header" ref={ref} css={headerCSS} kind={kind} isCompact={isCompact} {...moreProps}>
      <Heading tabIndex="-1" level={level} displayLevel={isCompact ? 4 : 3}>
        {props.children}
      </Heading>
      <div>
        {hasCloseButton ? (
          <Button.Close
            data-pka-anchor="sidepanel-header-close"
            isSemantic={false}
            onClick={onClose}
            {...darkBackgroundProps(kind)}
            size={isCompact ? ShirtSizes.SMALL : ShirtSizes.MEDIUM}
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
