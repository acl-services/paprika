import React from "react";
import PropTypes from "prop-types";
import { RefOf } from "@paprika/helpers/lib/customPropTypes";
import Button from "@paprika/button";
import * as types from "../../types";
import * as sc from "./Header.styles";

Header.propTypes = propTypes; // eslint-disable-line no-use-before-define
Header.defaultProps = defaultProps; // eslint-disable-line no-use-before-define
// eslint-disable-next-line no-use-before-define
Header.types = {
  kind: { DEFAULT: types.DEFAULT, PRIMARY: types.PRIMARY },
};

const propTypes = {
  children: PropTypes.node.isRequired,
  hasCloseButton: PropTypes.bool,
  kind: PropTypes.oneOf([Header.types.kind.DEFAULT, Header.types.kind.PRIMARY]), // eslint-disable-line no-use-before-define
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  onClose: PropTypes.func,
  refHeading: RefOf(),
};

const defaultProps = {
  hasCloseButton: true,
  level: 3,
  kind: Header.types.kind.DEFAULT, // eslint-disable-line no-use-before-define
  onClose: () => {},
  refHeading: null,
};

const Header = React.forwardRef((props, ref) => {
  const { children, level, hasCloseButton, kind, onClose, refHeading, ...moreProps } = props;

  return (
    <sc.Header ref={ref} kind={kind} {...moreProps}>
      <sc.Heading level={level} displayLevel={3} isLight ref={refHeading}>
        {children}
      </sc.Heading>
      {hasCloseButton && (
        <sc.CloseButtonWrapper>
          <Button.Close
            data-pka-anchor="takeover.header.close-button"
            onClick={onClose}
            isDark={kind === "primary" || null}
            size="medium"
          />
        </sc.CloseButtonWrapper>
      )}
    </sc.Header>
  );
});

Header.displayName = "Takeover.Header";

export default Header;
