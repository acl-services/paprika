import React from "react";
import Popover from "@paprika/popover";
import ArrowIcon from "@paprika/icon/lib/ArrowRightB";
import useI18n from "@paprika/l10n/lib/useI18n";
import extractChildren from "@paprika/helpers/lib/extractChildren";
import isElementContainsFocus from "@paprika/helpers/lib/dom/isElementContainsFocus";
import { AlignTypes } from "@paprika/helpers/lib/customPropTypes";
import createPropsCollector from "./createPropsCollector";
import * as styled from "./DateRangePicker.styles";

const START_INPUT_BORDER_RADIUS = [true, false, false, true];
const END_INPUT_BORDER_RADIUS = [false, true, true, false];

const DateRangePicker = ({ startDate, endDate, onChangeStartDate, onChangeEndDate, children }) => {
  const [shouldShowPopover, setShouldShowPopover] = React.useState(false);

  const popoverContentRef = React.useRef(null);
  const startDateInputRef = React.useRef(null);
  const endDateInputRef = React.useRef(null);

  const I18n = useI18n();

  const {
    "DateRangePicker.Input": { props: inputProps = {} } = {},
    "DateRangePicker.StartInput": {
      props: { placeholder: startInputPlaceholder = I18n.t("daterange.start_date"), ...startInputProps } = {},
    } = {},
    "DateRangePicker.EndInput": {
      props: { placeholder: endInputPlaceholder = I18n.t("daterange.end_date"), ...endInputProps } = {},
    } = {},
    "DateRangePicker.Popover": { props: popoverProps = {} } = {},
  } = extractChildren(children, [
    "DateRangePicker.Input",
    "DateRangePicker.StartInput",
    "DateRangePicker.EndInput",
    "DateRangePicker.Popover",
  ]);

  function isAnyElementContainsFocus() {
    return (
      isElementContainsFocus(popoverContentRef.current) ||
      isElementContainsFocus(startDateInputRef.current) ||
      isElementContainsFocus(endDateInputRef.current)
    );
  }

  function showPopover() {
    if (!shouldShowPopover) setShouldShowPopover(true);
  }

  function hidePopover() {
    if (shouldShowPopover) setShouldShowPopover(false);
    if (startDateInputRef.current) startDateInputRef.current.blur();
    if (endDateInputRef.current) endDateInputRef.current.blur();
  }

  function handleClosePopover() {
    if (!isAnyElementContainsFocus()) {
      hidePopover();
    }
  }

  function handleKeyUpOnEscape(event) {
    if (event.key === "Escape") {
      hidePopover();
    }
  }

  return (
    <Popover
      edge={AlignTypes.LEFT}
      maxWidth="none"
      offset={8}
      {...popoverProps}
      isOpen={shouldShowPopover}
      onKeyUp={handleKeyUpOnEscape}
      onClose={handleClosePopover}
      shouldKeepFocus
    >
      <styled.Wrapper>
        <styled.DateInput
          ref={startDateInputRef}
          date={startDate}
          onChange={onChangeStartDate}
          hasBorderRadius={START_INPUT_BORDER_RADIUS}
          placeholder={startInputPlaceholder}
          onClick={showPopover}
          beforeConfirmation={hidePopover}
          denyConfirmation={isAnyElementContainsFocus}
          {...inputProps}
          {...startInputProps}
        />
        <styled.Separator>
          <ArrowIcon />
        </styled.Separator>
        <styled.DateInput
          ref={endDateInputRef}
          date={endDate}
          onChange={onChangeEndDate}
          hasBorderRadius={END_INPUT_BORDER_RADIUS}
          placeholder={endInputPlaceholder}
          onClick={showPopover}
          beforeConfirmation={hidePopover}
          denyConfirmation={isAnyElementContainsFocus}
          {...inputProps}
          {...endInputProps}
        />
      </styled.Wrapper>

      <Popover.Content ref={popoverContentRef}>
        <Popover.Card>
          <styled.PopoverCardContent>
            <styled.CalendarsWrapper>
              <styled.Calendar />
              <styled.Calendar />
            </styled.CalendarsWrapper>
            {/* there will be picker for predefined ranges */}
          </styled.PopoverCardContent>
        </Popover.Card>
      </Popover.Content>
    </Popover>
  );
};

DateRangePicker.Input = createPropsCollector("DateRangePicker.Input");
DateRangePicker.StartInput = createPropsCollector("DateRangePicker.StartInput");
DateRangePicker.EndInput = createPropsCollector("DateRangePicker.EndInput");
DateRangePicker.Popover = createPropsCollector("DateRangePicker.Popover");

export default DateRangePicker;
