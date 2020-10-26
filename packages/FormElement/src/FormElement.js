import React from "react";
import PropTypes from "prop-types";
import * as constants from "@paprika/constants/lib/Constants";
import extractChildren from "@paprika/helpers/lib/extractChildren";
import * as sc from "./FormElement.styles";

const subComponentDisplayNames = {
  Label: "FormElement.Label",
  Error: "FormElement.Error",
  Description: "FormElement.Description",
  Content: "FormElement.Content",
  Instructions: "FormElement.Instructions",
  Help: "FormElement.Help",
};

function FormElement(props) {
  const {
    children,
    hasOptionalLabel,
    hasRequiredLabel,
    id,
    isDisabled,
    isInline,
    isLabelVisuallyHidden,
    label,
    size,
    hasFieldSet,
    onClickLabel,
    internalA11yProps,
    ...moreProps
  } = props;

  const extractedChildren = extractChildren(children, Object.values(subComponentDisplayNames));
  const hasError =
    !!extractedChildren[subComponentDisplayNames.Error] &&
    !!extractedChildren[subComponentDisplayNames.Error].props.children;

  const getClonedElement = (displayName, extraProps = {}) => {
    if (!extractedChildren[displayName]) return null;
    return React.cloneElement(extractedChildren[displayName], extraProps);
  };

  function renderError() {
    if (hasError) {
      return <div role="alert">{getClonedElement(subComponentDisplayNames.Error)}</div>;
    }
    return null;
  }

  // next steps, render description, error, label and instructions with context

  function renderLabel() {
    return getClonedElement(subComponentDisplayNames.Label, {
      id: internalA11yProps.labelA11yProps,
      hasInstructionsShowing: extractedChildren[subComponentDisplayNames.Instructions],
      hasOptionalLabel: hasRequiredLabel ? false : hasOptionalLabel,
      hasRequiredLabel,
      help: extractedChildren[subComponentDisplayNames.Help],
      isInline,
      isVisuallyHidden: isLabelVisuallyHidden,
      label,
      hasFieldSet,
      onClick: onClickLabel,
    });
  }

  return (
    <sc.FormElement
      as={hasFieldSet ? "fieldset" : "div"}
      isInline={isInline}
      size={size}
      isDisabled={isDisabled}
      {...moreProps}
    >
      {children.map(child => {
        if (child.type.displayName === subComponentDisplayNames.Label) {
          return renderLabel();
        }

        if (child.type.displayName === subComponentDisplayNames.Error) {
          return renderError();
        }
        return child;
      })}
    </sc.FormElement>
  );
}

FormElement.types = {
  size: constants.defaultSize,
};

const propTypes = {
  internalA11yProps: PropTypes.object,

  children: PropTypes.node.isRequired,

  /** Should show is optional text besides the label or not. Will not show if hasRequiredLabel prop is true */
  hasOptionalLabel: PropTypes.bool,

  /** Should show is required text besides the label or not. Takes presendence over hasOptionalLabel prop */
  hasRequiredLabel: PropTypes.bool,

  /** ID for the child element. */
  id: PropTypes.string,

  /** Should be disabled or not, default is false. */
  isDisabled: PropTypes.bool,

  /** Should label and children be inline or not, default is false. */
  isInline: PropTypes.bool,

  /** Should label be hidden, default is false. Note: this is discouraged because of accessibility requirements. */
  isLabelVisuallyHidden: PropTypes.bool,

  /** Label text of this field. */
  label: PropTypes.node.isRequired,

  /** Size of the label, error, help and description (font size, min-height, padding, etc). */
  size: PropTypes.oneOf([FormElement.types.size.SMALL, FormElement.types.size.MEDIUM, FormElement.types.size.LARGE]),

  /** FormElement contains multiple children so Renders a legend element instead of label. */
  hasFieldSet: PropTypes.bool,

  onClickLabel: PropTypes.func,
};

const defaultProps = {
  internalA11yProps: {},
  hasOptionalLabel: false,
  hasRequiredLabel: false,
  id: null,
  isDisabled: false,
  isInline: false,
  isLabelVisuallyHidden: false,
  size: FormElement.types.size.MEDIUM,
  hasFieldSet: false,
  onClickLabel: () => {},
};

FormElement.displayName = "FormElement";
FormElement.propTypes = propTypes;
FormElement.defaultProps = defaultProps;

export default FormElement;
