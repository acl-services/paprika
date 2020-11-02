import React from "react";
import PropTypes from "prop-types";

import InfoCircleIcon from "@paprika/icon/lib/InfoCircle";
import Popover from "@paprika/popover";
import useI18n from "@paprika/l10n/lib/useI18n";

import helpStyles, { StyledTrigger, iconStyles } from "./Help.styles";

const propTypes = {
  children: PropTypes.node.isRequired,

  /** Aria text for information button to trigger help popover. */
  triggerA11yText: PropTypes.string,
};

const defaultProps = {
  triggerA11yText: null,
};

function Help(props) {
  const { children, triggerA11yText, ...moreProps } = props;
  const I18n = useI18n();

  return (
    <Popover css={helpStyles} align="bottom" data-pka-anchor="form-element.help" {...moreProps}>
      <StyledTrigger a11yText={triggerA11yText || I18n.t("formElement.aria_info_circle")}>
        <InfoCircleIcon css={iconStyles} aria-hidden type="exclamation-circle" />
      </StyledTrigger>
      <Popover.Content>
        <Popover.Card>{children}</Popover.Card>
      </Popover.Content>
      <Popover.Tip />
    </Popover>
  );
}

Help.displayName = "FormElement.Help";

Help.propTypes = propTypes;
Help.defaultProps = defaultProps;

export default Help;
