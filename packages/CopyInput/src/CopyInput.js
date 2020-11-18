import React from "react";
import PropTypes from "prop-types";
import CopyIcon from "@acl-services/wasabicons/lib/Clipboard";
import Input from "@paprika/input";
import Popover from "@paprika/popover";
import Button from "@paprika/button";
import useI18n from "@paprika/l10n/lib/useI18n";
import extractChildrenProps from "@paprika/helpers/lib/extractChildrenProps";
import CopyInputInputPropsCollector from "./CopyInputInputPropsCollector";
import * as sc from "./CopyInput.styles";

function CopyInput(props) {
  const { defaultValue, children, ...moreProps } = props;
  const I18n = useI18n();
  const extendedInputProps = extractChildrenProps(children, CopyInputInputPropsCollector);

  const [value, setValue] = React.useState(defaultValue);
  const [isClickedTooltipOpen, setIsClickedTooltipOpen] = React.useState(false);

  function handleButtonClick() {
    navigator.clipboard.writeText(value);
    setIsClickedTooltipOpen(true);
    setTimeout(() => setIsClickedTooltipOpen(false), 5000);
  }

  return (
    <sc.CopyInput data-pka-anchor="copy-input" {...moreProps}>
      <Input defaultValue={defaultValue} onChange={e => setValue(e.target.value)} {...extendedInputProps} />
      <Popover
        align="bottom"
        isDark={!isClickedTooltipOpen}
        isEager={!isClickedTooltipOpen}
        isOpen={isClickedTooltipOpen || null}
      >
        <Popover.Trigger>
          <Button.Icon kind="primary" onClick={handleButtonClick}>
            <CopyIcon />
          </Button.Icon>
        </Popover.Trigger>
        <Popover.Content>
          <Popover.Card>
            {isClickedTooltipOpen ? I18n.t("copyInput.clicked_tooltip") : I18n.t("copyInput.hover_tooltip")}
          </Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
    </sc.CopyInput>
  );
}

const propTypes = {
  /** Used for CopyInput.Input */
  children: PropTypes.node,
  /** Default value for the input. */
  defaultValue: PropTypes.string,
};

const defaultProps = {
  children: null,
  defaultValue: "",
};

CopyInput.displayName = "CopyInput";
CopyInput.propTypes = propTypes;
CopyInput.defaultProps = defaultProps;

CopyInput.Input = CopyInputInputPropsCollector;

export default CopyInput;
