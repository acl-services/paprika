import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
import Item from "./components/Item";
import Indicator from "./components/Indicator";
import Responses from "./components/Responses";
import * as sc from "./ProgressAccordion.styles";

const propTypes = {
  /** A11y text for assistive technologies to descibe the semantic list. */
  a11yText: PropTypes.string,

  /*
   * The list item that is currently active or pending. If all items are
   * complete, this can be set to a value greater than the list length.
   */
  activeIndex: PropTypes.number,

  /** Optional status text to be displayed with the active list item. */
  activeStatus: PropTypes.node,

  /** List items (must be of type <ProgressAccordion.Item>. */
  children: PropTypes.node,
};

const defaultProps = {
  a11yText: null,
  activeIndex: 0,
  activeStatus: null,
  children: null,
};

function filterChildren(children) {
  return React.Children.toArray(children).filter(child => child.type && child.type.displayName === Item.displayName);
}

const ProgressAccordion = props => {
  const { a11yText, activeIndex, activeStatus, children, ...moreProps } = props;

  const I18n = useI18n();

  const validChildren = filterChildren(children);

  const getLabel = (label, index) => {
    return activeIndex === index ? (
      <sc.ActiveItem>
        <sc.ActiveLabel>
          {label}
          <sc.ActiveLabelText>. {I18n.t("progressAccordion.active")}</sc.ActiveLabelText>
        </sc.ActiveLabel>
        <sc.ActiveStatus>{activeStatus}</sc.ActiveStatus>
      </sc.ActiveItem>
    ) : (
      label
    );
  };

  return (
    <sc.Accordion {...moreProps} role="list" aria-label={a11yText} data-pka-anchor="progress-accordion">
      {validChildren.length > 0 &&
        validChildren.map((child, index) => {
          const isComplete = activeIndex > index;
          const indicatorProps = {
            isComplete,
            isActive: activeIndex === index,
            isLast: index === validChildren.length - 1,
          };

          return (
            // eslint-disable-next-line react/no-array-index-key
            <sc.Item key={index} role="listitem" data-pka-anchor="progress-accordion.item">
              <Indicator {...indicatorProps} />
              {React.cloneElement(child, { label: getLabel(child.props.label, index), isComplete })}
            </sc.Item>
          );
        })}
    </sc.Accordion>
  );
};

ProgressAccordion.displayName = "ProgressAccordion";
ProgressAccordion.propTypes = propTypes;
ProgressAccordion.defaultProps = defaultProps;

ProgressAccordion.Item = Item;
ProgressAccordion.Indicator = Indicator;
ProgressAccordion.Responses = Responses;

export default ProgressAccordion;
