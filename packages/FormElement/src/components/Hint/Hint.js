import React from "react";
import PropTypes from "prop-types";

import Popover from "@paprika/popover";
import InfoCircleIcon from "@paprika/icon/lib/InfoCircle";
import useI18n from "@paprika/l10n/lib/useI18n";

import hintStyles, { iconStyles } from "./Hint.styles";

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
    <Popover css={hintStyles} align="bottom" {...moreProps}>
      <Popover.Trigger a11yText={triggerA11yText || I18n.t("formElement.aria_info_circle")}>
        <InfoCircleIcon css={iconStyles} aria-hidden size={16} type="exclamation-circle" />
      </Popover.Trigger>
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
