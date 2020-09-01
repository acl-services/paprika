import React from "react";
import PropTypes from "prop-types";
import { RefOf } from "@paprika/helpers/lib/customPropTypes";
import extractChildren from "@paprika/helpers/lib/extractChildren";
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

const getElement = (elements, cloneFn) => (Array.isArray(elements) ? elements.map(cloneFn) : cloneFn(elements));
const componentsRequiringIdForLabel = ["Input", "DatePicker", "TimePicker"];
const nativeElementsRequiringIdForLabel = ["input"];
const componentsRequiringA11yDescribedByIds = [
  "Input",
  "Checkbox",
  "Radio.Group",
  "TimePicker",
  "DatePicker",
  "children",
  "FormElement",
];
const componentsRequiringLabelRef = ["ListBox"];

const isOtherChildRequiringId = (key, element) =>
  key === "children" && nativeElementsRequiringIdForLabel.includes(element?.type);

const cloneWithAriaAttributes = ({ element, idForLabel, a11yDescribedByIds, isNative, refLabel }) => {
  const a11yProps = {};

  if (a11yDescribedByIds && isNative) {
    a11yProps["aria-describedby"] = a11yDescribedByIds;
  }

  if (a11yDescribedByIds && !isNative) {
    a11yProps.a11yDescribedByIds = a11yDescribedByIds;
  }

  if (idForLabel) {
    a11yProps.id = idForLabel;
  }

  if (refLabel) {
    a11yProps.refLabel = refLabel;
  }

  return React.cloneElement(element, {
    ...a11yProps,
  });
};

const createFormElementChild = ({ element, a11yDescribedByIds }) => {
  const formElementChildren = element.props.children.map(item =>
    item.type.displayName === "FormElement.Content"
      ? React.cloneElement(item, { wrapperA11yDescribedByIds: a11yDescribedByIds })
      : item
  );

  return React.cloneElement(element, { children: formElementChildren });
};

function Content(props) {
  const { children, idForLabel, refLabel, wrapperA11yDescribedByIds, ...moreProps } = props;

  let isLabelSet = false;

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
        getElement(extractedChildren[key], element => {
          // Future api can override this behaviour to choose which element can receive labelId
          let oneTimeUseIdForLabel = null;
          if (!isLabelSet) {
            oneTimeUseIdForLabel =
              componentsRequiringIdForLabel.includes(key) || isOtherChildRequiringId(key, element) ? idForLabel : null;
            isLabelSet = Boolean(oneTimeUseIdForLabel);
          }

          const a11yProps = {
            element,
            idForLabel: oneTimeUseIdForLabel,
            refLabel: componentsRequiringLabelRef.includes(key) ? refLabel : null,
            a11yDescribedByIds: componentsRequiringA11yDescribedByIds.includes(key) ? a11yDescribedByIds : null,
            isNative: key === "children" && element?.type,
          };

          return key === "FormElement" ? createFormElementChild(a11yProps) : cloneWithAriaAttributes(a11yProps);
        })
      )}
    </sc.ContentContainer>
  );
}

Content.displayName = "FormElement.Content";
Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

export default Content;
