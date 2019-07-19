import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
import { visuallyHidden } from "@paprika/stylers/lib/includes";
import Item from "./components/Item";
import Indicator from "./components/Indicator";
import Responses from "./components/Responses";
import {
  accordionStyles,
  itemStyles,
  activeItemStyles,
  activeLabelStyles,
  activeStatusStyles,
} from "./ResponsesAccordion.styles";

const propTypes = {
  a11yText: PropTypes.string,
  activeIndex: PropTypes.number,
  activeStatus: PropTypes.node,
  children: PropTypes.node,
};

const defaultProps = {
  a11yText: null,
  activeIndex: 0,
  activeStatus: null,
  children: null,
};

function filterChildren(children) {
  return React.Children.toArray(children).filter(
    child => child.type && child.type.displayName === "ResponsesAccordion.Item"
  );
}

const ResponsesAccordion = props => {
  const { a11yText, activeIndex, activeStatus, children, ...moreProps } = props;

  const I18n = useI18n();

  const validChildren = filterChildren(children);

  const getLabel = (label, index) => {
    return activeIndex === index ? (
      <div css={activeItemStyles}>
        <div css={activeLabelStyles}>
          {label}
          <span css={visuallyHidden}>. {I18n.t("responsesAccordion.active")}</span>
        </div>
        <div css={activeStatusStyles}>{activeStatus}</div>
      </div>
    ) : (
      label
    );
  };

  return (
    <div css={accordionStyles} {...moreProps} role="list" aria-label={a11yText}>
      {validChildren.length > 0 &&
        validChildren.map((child, index) => {
          const { id, label } = child.props;

          const isComplete = activeIndex > index;
          const indicatorProps = {
            isComplete,
            isActive: activeIndex === index,
            isLast: index === validChildren.length - 1,
          };

          return (
            <div css={itemStyles} key={id} role="listitem">
              <Indicator {...indicatorProps} />
              {React.cloneElement(child, { label: getLabel(label, index), isComplete })}
            </div>
          );
        })}
    </div>
  );
};

ResponsesAccordion.displayName = "ResponsesAccordion";
ResponsesAccordion.propTypes = propTypes;
ResponsesAccordion.defaultProps = defaultProps;

ResponsesAccordion.Item = Item;
ResponsesAccordion.Indicator = Indicator;
ResponsesAccordion.Responses = Responses;

export default ResponsesAccordion;
