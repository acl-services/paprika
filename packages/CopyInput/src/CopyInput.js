import React from "react";
import PropTypes from "prop-types";
import Input from "@paprika/input";
import Popover from "@paprika/popover";
import Button from "@paprika/button";
import Toast from "@paprika/toast";
import useI18n from "@paprika/l10n/lib/useI18n";
import { extractChildrenProps } from "@paprika/helpers";
import CopyIcon from "@paprika/icon/lib/Clipboard";
import CopyInputInputPropsCollector from "./components/Input/Input";
import CopyInputButtonPropsCollector from "./components/Button/Button";
import * as sc from "./CopyInput.styles";

function CopyInput(props) {
  const { children, isReadOnly, hasInputContainer, hasValueContainer, value, ...moreProps } = props;
  const extendedInputProps = extractChildrenProps(children, CopyInputInputPropsCollector);
  const extendedButtonProps = extractChildrenProps(children, CopyInputButtonPropsCollector);
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
    <sc.CopyInput data-pka-anchor="copy-input" hasDefaultButtonBorder={!hasInputContainer} {...moreProps}>
      {hasValueContainer ? <sc.Value>{value}</sc.Value> : null}
      {!hasInputContainer ? (
        <sc.HiddenInput ref={inputRef} defaultValue={value} />
      ) : (
        <Input isReadOnly={isReadOnly} ref={inputRef} defaultValue={value} {...extendedInputProps} />
      )}
      <div ref={buttonRef} data-pka-anchor="copy-input.button">
        <Button.Icon
          a11yText={I18n.t("copyInput.hover_tooltip")}
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
      >
        <Popover.Content>
          <Popover.Card>{I18n.t("copyInput.hover_tooltip")}</Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
      <Popover
        align="bottom"
        getPositioningElement={() => buttonRef.current}
        isOpen={isClickedTooltipOpen}
        shouldKeepFocus
      >
        <Popover.Content>
          <Popover.Card>{I18n.t("copyInput.clicked_tooltip")}</Popover.Card>
        </Popover.Content>
        <Popover.Tip />
      </Popover>
      {isClickedTooltipOpen && (
        <Toast kind={Toast.types.kind.VISUALLY_HIDDEN} aria-hidden isPolite>
          {I18n.t("copyInput.clicked_tooltip")}
        </Toast>
      )}
    </sc.CopyInput>
  );
}

const propTypes = {
  /** Used for CopyInput.Input */
  children: PropTypes.node,
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
  children: null,
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

export default CopyInput;
