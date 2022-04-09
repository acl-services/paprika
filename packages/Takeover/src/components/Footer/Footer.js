import React from "react";
import styled from "styled-components";
import Button from "@paprika/button";
import PropTypes from "prop-types";
import tokens from "@paprika/tokens";
import useI18n from "@paprika/l10n/lib/useI18n";
import { spacer } from "@paprika/stylers/lib/helpers";

const StyledFooter = styled.div`
  background: ${tokens.color.blackLighten70};
  padding: ${spacer(2)};
  [data-pka-anchor="button"] {
    &:nth-child(2) {
      margin-left: ${tokens.space};
    }
  }
`;

export default function Footer({ children, onSaveClick, onCancelClick, ...moreProps }) {
  const I18n = useI18n();
  return (
    <StyledFooter ata-pka-anchor="takeover.footer" {...moreProps}>
      {children || (
        <>
          <Button kind={Button.types.kind.PRIMARY} size="large" onClick={onSaveClick}>
            {I18n.t("actions.confirm")}
          </Button>
          <Button kind={Button.types.kind.MINOR} size="large" onClick={onCancelClick}>
            {I18n.t("actions.cancel")}
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
