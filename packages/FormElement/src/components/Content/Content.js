import React from "react";
import PropTypes from "prop-types";
import { RefOf } from "@paprika/helpers/lib/customPropTypes";
import extractChildren from "@paprika/helpers/lib/extractChildren";
import renderFunctions from "./renderFunctions";
import * as sc from "./Content.styles";

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  /** Sets id for label */
  idForLabel: PropTypes.string,
  refLabel: RefOf(),
  /** Used for aria-describedby on the FormElement */
  a11yDescribedByIds: PropTypes.string,
  /** Used when form Elements are nested and is automatically appended to aria-describedby */
  wrapperA11yDescribedByIds: PropTypes.string,
};

const defaultProps = {
  idForLabel: null,
  a11yDescribedByIds: null,
  refLabel: null,
  wrapperA11yDescribedByIds: null,
};

const supportedComponentNames = {
  Input: "Input",
  Checkbox: "Checkbox",
  RadioGroup: "Radio.Group",
  DatePicker: "DatePicker",
  ListBox: "ListBox",
  FormElement: "FormElement",
  TimePicker: "TimePicker",
};

function Content(props) {
  const { children, idForLabel, refLabel, wrapperA11yDescribedByIds, ...moreProps } = props;

  const a11yDescribedByIds = wrapperA11yDescribedByIds
    ? `${props.a11yDescribedByIds} ${wrapperA11yDescribedByIds}`
    : props.a11yDescribedByIds;

  const extractedChildren = extractChildren(children, Object.values(supportedComponentNames));

  if (!children) {
    return null;
  }

  if (!extractedChildren?.children.length) {
    delete extractedChildren.children;
  }

  return (
    <sc.ContentContainer data-pka-anchor="form-element.content" {...moreProps}>
      {Object.keys(extractedChildren).map(key =>
        renderFunctions[key]({
          extractedElements: extractedChildren[key],
          a11yDescribedByIds,
          idForLabel,
          refLabel,
        })
      )}
    </sc.ContentContainer>
  );
}

Content.displayName = "FormElement.Content";
Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

export default Content;
