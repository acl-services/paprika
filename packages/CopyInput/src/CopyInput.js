import React from "react";
import PropTypes from "prop-types";
import Input from "@paprika/input";
import Popover from "@paprika/popover";
import Button from "@paprika/button";
import useI18n from "@paprika/l10n/lib/useI18n";
import extractChildrenProps from "@paprika/helpers/lib/extractChildrenProps";
import CopyIcon from "@paprika/icon/lib/ArrowDown"; // TODO: Replace with actual icon when ready
import CopyInputInputPropsCollector from "./Input";
import * as sc from "./CopyInput.styles";

function CopyInput(props) {
  const { defaultValue, children, ...moreProps } = props;
  const extendedInputProps = extractChildrenProps(children, CopyInputInputPropsCollector);
  const I18n = useI18n();
  const inputRef = React.createRef();
  const buttonRef = React.createRef();
  const [isClickedTooltipOpen, setIsClickedTooltipOpen] = React.useState(false);
  const [isHoverTooltipOpen, setIsHoverTooltipOpen] = React.useState(false);
  const prevIsClickedTooltipOpen = React.useRef(isClickedTooltipOpen);

  React.useEffect(() => {
    let timeout;
    if (!prevIsClickedTooltipOpen.current && isClickedTooltipOpen) {
      timeout = setTimeout(() => setIsClickedTooltipOpen(false), 5000);
    }
    prevIsClickedTooltipOpen.current = isClickedTooltipOpen;

    return () => clearTimeout(timeout);
  }, [isClickedTooltipOpen]);

  function handleButtonClick() {
    const textToCopy = inputRef.current.value;
    const textbox = document.createElement("textarea");
    const activator = document.activeElement;
    document.body.appendChild(textbox);
    textbox.value = textToCopy;
    textbox.select();
    activator.focus();
    document.execCommand("copy");
    document.body.removeChild(textbox);

    setIsClickedTooltipOpen(true);
    setIsHoverTooltipOpen(false);
  }

  return (
    <sc.CopyInput data-pka-anchor="copy-input" {...moreProps}>
      <Input ref={inputRef} defaultValue={defaultValue} {...extendedInputProps} />
      <div ref={buttonRef}>
        <Button.Icon
          kind="primary"
          onClick={handleButtonClick}
          onMouseEnter={() => setIsHoverTooltipOpen(true)}
          onMouseLeave={() => setIsHoverTooltipOpen(false)}
        >
          <CopyIcon />
        </Button.Icon>
      </div>
      <Popover
        align="bottom"
        isDark
        isOpen={isHoverTooltipOpen && !isClickedTooltipOpen}
        getPositioningElement={() => buttonRef.current}
      >
        <Popover.Content>
          <Popover.Card>{I18n.t("copyInput.hover_tooltip")}</Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
      <Popover align="bottom" isOpen={isClickedTooltipOpen} getPositioningElement={() => buttonRef.current}>
        <Popover.Content>
          <Popover.Card>{I18n.t("copyInput.clicked_tooltip")}</Popover.Card>
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
