import React from "react";
import styled from "styled-components";
import Button from "@paprika/button";
import PropTypes from "prop-types";
import tokens from "@paprika/tokens";

const StyledFooter = styled.div`
  margin: ${tokens.space};
  padding: ${tokens.space};
  padding-top: 0;
  [data-pka-anchor="button"] {
    &:nth-child(2) {
      margin-left: ${tokens.space};
    }
  }
`;

export default function Footer({ children, onSaveClick, onCancelClick, ...moreProps }) {
  return (
    <StyledFooter ata-pka-anchor="takeover.footer" {...moreProps}>
      {children || (
        <>
          <Button kind={Button.types.kind.PRIMARY} size="medium" onClick={onSaveClick}>
            Save
          </Button>
          <Button kind={Button.types.kind.MINOR} size="medium" onClick={onCancelClick}>
            Cancel
          </Button>
        </>
      )}
    </StyledFooter>
  );
}

const propTypes = {
  /** The content for the Footer */
  children: PropTypes.node,
  onSaveClick: PropTypes.func,
  onCancelClick: PropTypes.func,
};

const defaultProps = {
  children: null,
  onSaveClick: () => {},
  onCancelClick: () => {},
};

Footer.displayName = "Takeover.Footer";
Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
