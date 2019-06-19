import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import momentPropTypes from "react-moment-proptypes";

import ArrowLeft from "@paprika/icon/lib/ArrowLeft";
import ArrowRight from "@paprika/icon/lib/ArrowRight";
import Button from "@paprika/button";
import tokens from "@paprika/tokens";
import useI18n from "@paprika/l10n/lib/useI18n";

import {
  ActionBarStyled,
  ColumnHeaderStyled,
  ContainerStyled,
  MonthListStyled,
  OptionWrapperStyled,
  PanelContentStyled,
  YearListStyled,
} from "./ShortcutPanel.styles";

const propTypes = {
  date: momentPropTypes.momentObj.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

function ShortcutPanel(props) {
  const { date, onCancel, onConfirm } = props;
  const [pageIndex, setPageIndex] = React.useState(0);
  const [selectedMonth, setSelectedMonth] = React.useState(date.month());
  const [selectedyear, setSelectedYear] = React.useState(date.year());
  const I18n = useI18n();

  const panelRef = React.useRef(null);

  React.useEffect(() => {
    panelRef.current.focus();
  }, [date]);

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
      <OptionWrapperStyled key={month} isSelected={monthIndex === selectedMonth}>
        <input
          type="radio"
          name="month"
          id={monthIndex}
          value={month}
          defaultChecked={monthIndex === selectedMonth}
          onChange={handleChange}
        />
        <label htmlFor={monthIndex}>{month}</label>
      </OptionWrapperStyled>
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
      <OptionWrapperStyled key={year} isSelected={year === selectedyear}>
        <input
          type="radio"
          name="year"
          id={year}
          value={year}
          defaultChecked={year === selectedyear}
          onChange={handleChange}
        />
        <label htmlFor={year}>{year}</label>
      </OptionWrapperStyled>
    ));
  }

  function handleClickPrev() {
    setPageIndex(pageIndex - 1);
  }

  function handleClickNext() {
    setPageIndex(pageIndex + 1);
  }

  return (
    <ContainerStyled tabIndex={-1} ref={panelRef}>
      <PanelContentStyled>
        <MonthListStyled>
          <ColumnHeaderStyled>{I18n.t("datePicker.month")}</ColumnHeaderStyled>
          <div role="group">{renderMonthList()}</div>
        </MonthListStyled>
        <YearListStyled>
          <ColumnHeaderStyled isYear>
            <Button.Icon onClick={handleClickPrev} kind="minor" size="small">
              <ArrowLeft color={tokens.textColor.icon} />
            </Button.Icon>
            {I18n.t("datePicker.year")}
            <Button.Icon onClick={handleClickNext} kind="minor" size="small">
              <ArrowRight color={tokens.textColor.icon} />
            </Button.Icon>
          </ColumnHeaderStyled>
          <div role="group">{renderYearList()}</div>
        </YearListStyled>
      </PanelContentStyled>
      <ActionBarStyled>
        <Button kind="primary" onClick={handleConfirm} size="small">
          {I18n.t("actions.apply")}
        </Button>
        <Button kind="minor" onClick={onCancel} size="small">
          {I18n.t("actions.cancel")}
        </Button>
      </ActionBarStyled>
    </ContainerStyled>
  );
}

ShortcutPanel.propTypes = propTypes;
ShortcutPanel.displayName = "DatePicker.ShortcutPanel";

export default ShortcutPanel;
