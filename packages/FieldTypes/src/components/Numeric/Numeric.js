import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
import Container from "../Container";
import types from "../../types";

function formatNumber({ number, locale, options = {} }) {
  return Intl.NumberFormat(locale, options).format(number);
}

export function withDecimalSeparatorOnly({ number, locale }) {
  return new Intl.NumberFormat(locale, {
    useGrouping: true,
  })
    .formatToParts(number)
    .filter(chunk => chunk.type !== "group")
    .map(chunk => chunk.value)
    .join("");
}

export default function Numeric(props) {
  const { align, cell, currency: currencySymbol, intl, color, displayOnlyDecimals, ...moreProps } = props;
  const number = Number(cell);
  const i18n = useI18n();

  if (Number.isNaN(number)) {
    console.warn(`string|number ${cell} is Not a Number`);
  }

  if (displayOnlyDecimals) {
    withDecimalSeparatorOnly({ number, locale: i18n.locale });
  }

  const currency = currencySymbol ? { style: "currency", currency: currencySymbol } : {};

  const i18nNumber =
    "Intl" in window ? formatNumber({ number, locale: i18n.locale, options: { ...currency, ...intl } }) : cell;

  return (
    <Container align={align} color={color} {...moreProps} data-pka-anchor="data-fields-numeric">
      {typeof cell === "function" ? cell(i18nNumber) : i18nNumber}
    </Container>
  );
}

Numeric.propTypes = {
  /**
   * The cell value to be localize
   */
  cell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /**
   * Text alignment for the number default is right
   */
  align: PropTypes.oneOf([types.align.LEFT, types.align.RIGHT, types.align.CENTER]),
  /**
   * The window.Intl.numberFormat option object https://mzl.la/3iW0ioQ
   */
  intl: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  /**
   * When passing a currency string as 'EUR' or 'JPY' will display the correct currency symbol
   * This can also be achieved using the intl prop, which it's use internally to make this prop works.
   */
  currency: PropTypes.string,
  /**
   * Add a color to the number, accept any kind of html color #F60, rgba(100,100,100, 0.5), etc.
   */
  color: PropTypes.string,
  /**
   * Controls if the number should be display with full delimiter or only the decimal separators
   */
  displayOnlyDecimals: PropTypes.bool,
};

Numeric.defaultProps = {
  align: types.align.RIGHT,
  color: null,
  currency: null,
  displayOnlyDecimals: true,
  intl: {},
};
