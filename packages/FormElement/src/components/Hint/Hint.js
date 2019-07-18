import React from "react";
import PropTypes from "prop-types";

import InfoCircleIcon from "@paprika/icon/lib/InfoCircle";
import Popover from "@paprika/popover";
import useI18n from "@paprika/l10n/lib/useI18n";

import hintStyles, { StyledTrigger, iconStyles } from "./Hint.styles";

const propTypes = {
  children: PropTypes.node.isRequired,

  /** Aria text for information button to trigger hint popover. */
  triggerA11yText: PropTypes.string,
};

const defaultProps = {
  triggerA11yText: null,
};

function Hint(props) {
  const { children, triggerA11yText, ...moreProps } = props;
  const I18n = useI18n();

  return (
    <Popover css={hintStyles} align="bottom" data-qa-anchor="formElement.hint" {...moreProps}>
      <StyledTrigger a11yText={triggerA11yText || I18n.t("formElement.aria_info_circle")}>
        <InfoCircleIcon css={iconStyles} aria-hidden type="exclamation-circle" />
      </StyledTrigger>
      <Popover.Content>
        <Popover.Tip />
        <Popover.Card>{children}</Popover.Card>
      </Popover.Content>
    </Popover>
  );
}

Hint.displayName = "FormElement.Hint";

Hint.propTypes = propTypes;
Hint.defaultProps = defaultProps;

export default Hint;
