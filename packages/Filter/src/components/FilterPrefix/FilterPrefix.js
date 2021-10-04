import React from "react";
import PropTypes from "prop-types";
import Radio from "@paprika/radio";
import useI18n from "@paprika/l10n/lib/useI18n";
import { logicalFilterOperators } from "../../rules";
import * as sc from "./FilterPrefix.styles";

const propTypes = {
  index: PropTypes.number.isRequired,
  onChangeOperator: PropTypes.func.isRequired,
  operator: PropTypes.oneOf([logicalFilterOperators.AND, logicalFilterOperators.OR]),
};

const defaultProps = {
  operator: logicalFilterOperators.AND,
};

function Prefix(props) {
  const { index, onChangeOperator, operator } = props;
  const I18n = useI18n();
  const isAnd = operator === logicalFilterOperators.AND;
  const staticPrefix = <sc.TextWrapper>{I18n.t(`filter.${isAnd ? "and" : "or"}`)}</sc.TextWrapper>;

  function handleChangeOperator(activeIndex) {
    onChangeOperator(activeIndex === 0 ? logicalFilterOperators.AND : logicalFilterOperators.OR);
  }

  switch (index) {
    case 0:
      return null;
    case 1:
      if (onChangeOperator) {
        return (
          <sc.RadioGroup onChange={handleChangeOperator}>
            <Radio defaultIsChecked={isAnd}>{I18n.t("filter.and")}</Radio>
            <Radio defaultIsChecked={!isAnd}>{I18n.t("filter.or")}</Radio>
          </sc.RadioGroup>
        );
      }
      return staticPrefix;
    default:
      return staticPrefix;
  }
}

Prefix.propTypes = propTypes;
Prefix.defaultProps = defaultProps;

export default Prefix;
