import React from "react";
import PropTypes from "prop-types";
import Input from "@paprika/input";
import Popover from "@paprika/popover";
import Button from "@paprika/button";
import Toast from "@paprika/toast";
import useI18n from "@paprika/l10n/lib/useI18n";
import { extractChildrenProps, getActiveElement } from "@paprika/helpers";
import CopyIcon from "@paprika/icon/lib/Clipboard";
import CopyInputInputPropsCollector from "./components/Input/Input";
import CopyInputButtonPropsCollector from "./components/Button/Button";
import CopyInputPopoverPropsCollector from "./components/Popover/Popover";
import * as sc from "./CopyInput.styles";

function CopyInput(props) {
  const {
    alterCopiedText,
    children,
    clickedText,
    hoverText,
    isReadOnly,
    hasInputContainer,
    hasValueContainer,
    value,
    ...moreProps
  } = props;
  const extendedInputProps = extractChildrenProps(children, CopyInputInputPropsCollector);
  const extendedButtonProps = extractChildrenProps(children, CopyInputButtonPropsCollector);
  const extendedPopoverProps = extractChildrenProps(children, CopyInputPopoverPropsCollector);
  const I18n = useI18n();
  const _hoverText = hoverText ?? I18n.t("copyInput.hover_tooltip");
  const _clickedText = clickedText ?? I18n.t("copyInput.clicked_tooltip");

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
    let textToCopy = inputRef.current.value;

    if (alterCopiedText) {
      textToCopy = alterCopiedText(textToCopy);
    }

    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy);
    } else {
      // Fall back browser support
      const textbox = document.createElement("textarea");
      const activator = getActiveElement();
      document.body.appendChild(textbox);
      textbox.value = textToCopy;
      textbox.select();
      activator.focus();
      document.execCommand("copy");
      document.body.removeChild(textbox);
    }
    setIsClickedTooltipOpen(true);
    setIsHoverTooltipOpen(false);
  }

  return (
    <sc.CopyInput data-pka-anchor="copy-input" hasDefaultButtonBorder={!hasInputContainer} {...moreProps}>
      {hasValueContainer ? <sc.Value>{value}</sc.Value> : null}
      {!hasInputContainer ? (
        <sc.HiddenInput ref={inputRef} defaultValue={value} />
      ) : (
        <Input isReadOnly={isReadOnly} ref={inputRef} defaultValue={value} {...extendedInputProps} />
      )}
      <div ref={buttonRef} data-pka-anchor="copy-input.button">
        <Button.Icon
          a11yText={_hoverText}
          kind="primary"
          {...extendedButtonProps}
          onClick={handleButtonClick}
          onMouseOver={() => setIsHoverTooltipOpen(true)}
          onMouseOut={() => setIsHoverTooltipOpen(false)}
          onFocus={() => setIsHoverTooltipOpen(true)}
          onBlur={() => setIsHoverTooltipOpen(false)}
        >
          <CopyIcon />
        </Button.Icon>
      </div>
      <Popover
        align="bottom"
        getPositioningElement={() => buttonRef.current}
        isDark
        isEager
        isOpen={isHoverTooltipOpen && !isClickedTooltipOpen}
        {...extendedPopoverProps}
      >
        <Popover.Content>
          <Popover.Card>{_hoverText}</Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
      <Popover
        align="bottom"
        getPositioningElement={() => buttonRef.current}
        isOpen={isClickedTooltipOpen}
        shouldKeepFocus
        {...extendedPopoverProps}
      >
        <Popover.Content>
          <Popover.Card>{_clickedText}</Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
      {isClickedTooltipOpen && (
        <Toast kind={Toast.types.kind.VISUALLY_HIDDEN} aria-hidden isPolite>
          {_clickedText}
        </Toast>
      )}
    </sc.CopyInput>
  );
}

const propTypes = {
  /** Called after the button is clicked, and the copied value is passed in */
  alterCopiedText: PropTypes.func,
  /** Used for CopyInput.Input */
  children: PropTypes.node,
  /** The text to show in the tooltip when the user presses the "copy" button */
  clickedText: PropTypes.string,
  /** The text to show in the tooltip when the user hovers over the "copy" button */
  hoverText: PropTypes.string,
  /** Is the input read-only. */
  isReadOnly: PropTypes.bool,
  /** If the value will be rendered in an Input component or hidden */
  hasInputContainer: PropTypes.bool,
  /** If a plain text version of the value will be rendered */
  hasValueContainer: PropTypes.bool,
  /** Default value for the input */
  value: PropTypes.string,
};

const defaultProps = {
  alterCopiedText: null,
  children: null,
  clickedText: null,
  hoverText: null,
  isReadOnly: true,
  hasInputContainer: true,
  hasValueContainer: false,
  value: "",
};

CopyInput.displayName = "CopyInput";
CopyInput.propTypes = propTypes;
CopyInput.defaultProps = defaultProps;

CopyInput.Input = CopyInputInputPropsCollector;
CopyInput.Button = CopyInputButtonPropsCollector;
CopyInput.Popover = CopyInputPopoverPropsCollector;

export default CopyInput;
