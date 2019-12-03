import React from "react";
import PropTypes from "prop-types";
import Button from "@paprika/button";
import * as styled from "./Header.styles";

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

const Header = React.forwardRef((props, ref) => {
  const { children, hasCloseButton, kind, onClose, ...moreProps } = props;

  return (
    <styled.Wrapper ref={ref} kind={kind} {...moreProps}>
      <div tabIndex="-1">{children}</div>
      <div>
        {hasCloseButton && (
          <Button.Close
            data-pka-anchor="modal.header.close-button"
            onClick={onClose}
            isDark={kind === "primary" || undefined}
            size="small"
          />
        )}
      </div>
    </styled.Wrapper>
  );
});

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
Header.displayName = "Modal.Header";

export default Header;
