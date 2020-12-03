import React from "react";
import PropTypes from "prop-types";
import Popover from "@paprika/popover";
import useI18n from "@paprika/l10n/lib/useI18n";
import * as sc from "./Help.styles";

function Help(props) {
  const { children, a11yText, ...moreProps } = props;
  const I18n = useI18n();

  return (
    <sc.Help align="bottom" data-pka-anchor="form-element.help" {...moreProps}>
      <Popover.Trigger a11yText={a11yText || I18n.t("formElement.aria_info_circle")}>
        <sc.HelpIcon aria-hidden type="exclamation-circle" />
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Card>{children}</Popover.Card>
      </Popover.Content>
      <Popover.Tip />
    </sc.Help>
  );
}

const propTypes = {
  /** Content of help popover */
  children: PropTypes.node.isRequired,

  /** Aria label for icon button that triggers help popover */
  a11yText: PropTypes.string,
};

const defaultProps = {
  a11yText: null,
};

Help.displayName = "FormElement.Help";
Help.propTypes = propTypes;
Help.defaultProps = defaultProps;

export default Help;
