import React from "react";
import PropTypes from "prop-types";
import Popover from "@paprika/popover";
import useI18n from "@paprika/l10n/lib/useI18n";
import * as sc from "./Help.styles";

function Help({ children, isDisabled, a11yText, align, zIndex }) {
  const I18n = useI18n();

  return (
    <sc.Help align={align} data-pka-anchor="form-element.help" zIndex={zIndex}>
      {isDisabled ? (
        <sc.HelpIcon aria-hidden />
      ) : (
        <>
          <Popover.Trigger a11yText={a11yText || I18n.t("formElement.aria_info_circle")} isDisabled={isDisabled}>
            <sc.HelpIcon aria-hidden />
          </Popover.Trigger>
          <Popover.Content>
            <Popover.Card>{children}</Popover.Card>
          </Popover.Content>
          <Popover.Tip />
        </>
      )}
    </sc.Help>
  );
}

const propTypes = {
  /** zIndex when component using in modals */
  zIndex: PropTypes.number,

  /** Aria label for icon button that triggers help popover */
  a11yText: PropTypes.string,

  /** Content of help popover */
  children: PropTypes.node.isRequired,

  /** If the Popover should be disabled */
  isDisabled: PropTypes.bool,

  /** Change tooltip alignment */
  align: PropTypes.oneOf([
    Popover.types.align.TOP,
    Popover.types.align.RIGHT,
    Popover.types.align.BOTTOM,
    Popover.types.align.LEFT,
  ]),
};

const defaultProps = {
  a11yText: null,
  isDisabled: false,
  align: Popover.types.align.TOP,
  zIndex: undefined,
};

Help.displayName = "FormElement.Help";
Help.propTypes = propTypes;
Help.defaultProps = defaultProps;

export default Help;
