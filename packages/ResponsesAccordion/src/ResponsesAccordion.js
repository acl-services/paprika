import React from "react";
import PropTypes from "prop-types";
import Item from "./components/Item";
import Indicator from "./components/Indicator";
import Responses from "./components/Responses";
import Collapsible from "./components/Collapsible";
import {
  accordionStyles,
  itemStyles,
  activeItemStyles,
  activeLabelStyles,
  activeStatusStyles,
} from "./ResponsesAccordion.styles";

const propTypes = {
  activeIndex: PropTypes.number,
  activeStatus: PropTypes.node,
  children: PropTypes.node,
};

const defaultProps = {
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
  const { activeIndex, activeStatus, children, ...moreProps } = props;

  const validChildren = filterChildren(children);

  const getLabel = (label, index) => {
    return activeIndex === index ? (
      <div css={activeItemStyles}>
        <div css={activeLabelStyles}>{label}</div>
        <div css={activeStatusStyles}>{activeStatus}</div>
      </div>
    ) : (
      label
    );
  };

  return (
    <div css={accordionStyles} {...moreProps}>
      {validChildren.length > 0 &&
        validChildren.map((child, index) => {
          const { label, ...moreChildProps } = child.props;
          const isComplete = activeIndex > index;
          const indicatorProps = {
            isComplete,
            isActive: activeIndex === index,
            isLast: index === validChildren.length - 1,
          };

          return (
            <div css={itemStyles}>
              <Indicator {...indicatorProps} />
              <Collapsible label={getLabel(label, index)} isComplete={isComplete} {...moreChildProps}>
                {child}
              </Collapsible>
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
