import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import ArrowLeft from "@paprika/icon/lib/ArrowLeft";
import ArrowRight from "@paprika/icon/lib/ArrowRight";
import Button from "@paprika/button";
import tokens from "@paprika/tokens";
import useI18n from "@paprika/l10n/lib/useI18n";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";

import {
  actionBarStyles,
  columnHeaderStyles,
  containerStyles,
  labelStyles,
  listStyles,
  optionWrapperStyles,
  panelContentStyles,
  yearListStyles,
} from "./ShortcutPanel.styles";

const propTypes = {
  date: PropTypes.instanceOf(moment).isRequired,
  /** If the ShortcutPanel is set to be visible */
  isVisible: PropTypes.bool.isRequired,
  /** Function to call when cancel button is clicked. */
  onCancel: PropTypes.func.isRequired,
  /** Function to call when primary button is clicked. */
  onConfirm: PropTypes.func.isRequired,
};

function ShortcutPanel(props) {
  const { date, isVisible, onCancel, onConfirm } = props;
  const [pageIndex, setPageIndex] = React.useState(0);
  const [selectedMonth, setSelectedMonth] = React.useState(date.month());
  const [selectedyear, setSelectedYear] = React.useState(date.year());
  const I18n = useI18n();

  function handleChange(event) {
    const name = event.target.name;
    const id = event.target.id;

    switch (name) {
      case "month":
        setSelectedMonth(id * 1);
        break;
      case "year":
        setSelectedYear(id * 1);
        break;
      default:
        break;
    }
  }

  function handleConfirm() {
    onConfirm({
      month: selectedMonth,
      year: selectedyear,
    });
  }

  function renderMonthList() {
    return moment.monthsShort().map((month, monthIndex) => (
      <div css={optionWrapperStyles} key={month}>
        <input
          type="radio"
          name="month"
          id={monthIndex}
          value={month}
          defaultChecked={monthIndex === selectedMonth}
          onChange={handleChange}
        />
        <label css={labelStyles} htmlFor={monthIndex} isSelected={monthIndex === selectedMonth}>
          {month}
        </label>
      </div>
    ));
  }

  function renderYearList() {
    const SELECTED_YEAR_POSITION = 5;
    const YEARS_SHOWN = 12;
    const currentYear = date.year();
    const list = [];

    for (let i = 0; i < YEARS_SHOWN; i++) {
      list.push(currentYear * 1 + pageIndex * YEARS_SHOWN + (i - SELECTED_YEAR_POSITION));
    }

    return list.map(year => (
      <div css={optionWrapperStyles} key={year}>
        <input
          type="radio"
          name="year"
          id={year}
          value={year}
          defaultChecked={year === selectedyear}
          onChange={handleChange}
        />
        <label css={labelStyles} htmlFor={year} isSelected={year === selectedyear}>
          {year}
        </label>
      </div>
    ));
  }

  function handleClickPrev() {
    setPageIndex(pageIndex - 1);
  }

  function handleClickNext() {
    setPageIndex(pageIndex + 1);
  }

  return (
    <div css={containerStyles} data-pka-anchor="calendar.shortcut" isVisible={isVisible}>
      <div css={panelContentStyles}>
        <div css={listStyles}>
          <div css={columnHeaderStyles}>{I18n.t("calendar.month")}</div>
          <div role="group">{renderMonthList()}</div>
        </div>
        <div css={yearListStyles}>
          <div css={columnHeaderStyles} isYear>
            <Button.Icon isSemantic={false} onClick={handleClickPrev} kind="minor" size={ShirtSizes.SMALL}>
              <ArrowLeft color={tokens.textColor.icon} />
            </Button.Icon>
            {I18n.t("calendar.year")}
            <Button.Icon isSemantic={false} onClick={handleClickNext} kind="minor" size={ShirtSizes.SMALL}>
              <ArrowRight color={tokens.textColor.icon} />
            </Button.Icon>
          </div>
          <div role="group">{renderYearList()}</div>
        </div>
      </div>
      <div css={actionBarStyles}>
        <Button
          isSemantic={false}
          kind={Button.Kinds.PRIMARY}
          onClick={handleConfirm}
          size={ShirtSizes.SMALL}
          data-pka-anchor="calendar.apply"
        >
          {I18n.t("actions.apply")}
        </Button>
        <Button
          isSemantic={false}
          kind={Button.Kinds.MINOR}
          onClick={onCancel}
          size={ShirtSizes.SMALL}
          data-pka-anchor="calendar.cancel"
        >
          {I18n.t("actions.cancel")}
        </Button>
      </div>
    </div>
  );
}

ShortcutPanel.propTypes = propTypes;
ShortcutPanel.displayName = "Calendar.ShortcutPanel";

export default ShortcutPanel;
