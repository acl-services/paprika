import React from "react";
import PropTypes from "prop-types";
import Radio from "@paprika/radio";
import useI18n from "@paprika/l10n/lib/useI18n";
import * as types from "../../types";
import * as sc from "./FilterPrefix.styles";

const propTypes = {
  index: PropTypes.number.isRequired,
  onChangeOperator: PropTypes.func.isRequired,
  operator: PropTypes.oneOf([types.logicalFilterOperators.AND, types.logicalFilterOperators.OR]),
};

const defaultProps = {};

function Prefix(props) {
  const { index, onChangeOperator, operator } = props;
  const I18n = useI18n();
  const isAnd = operator === types.logicalFilterOperators.AND;
  const staticPrefix = <sc.TextWrapper>{I18n.t(`filters.${isAnd ? "and" : "or"}`)}</sc.TextWrapper>;

  function handleChangeOperator(activeIndex) {
    onChangeOperator(activeIndex === 0 ? types.logicalFilterOperators.AND : types.logicalFilterOperators.OR);
  }

  switch (index) {
    case 0:
      return null;
    case 1:
      if (onChangeOperator) {
        return (
          <sc.RadioGroup onChange={handleChangeOperator}>
            <Radio defaultIsChecked={isAnd}>{I18n.t("filters.and")}</Radio>
            <Radio defaultIsChecked={!isAnd}>{I18n.t("filters.or")}</Radio>
          </sc.RadioGroup>
        );
      }
      return staticPrefix;
    default:
      return staticPrefix;
  }
}

Prefix.propTypes = propTypes;
Prefix.types = types;
Prefix.defaultProps = defaultProps;

export default Prefix;
