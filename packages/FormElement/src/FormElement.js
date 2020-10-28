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
    size,
    hasFieldSet,
    onClickLabel,
    formElementA11yProps,
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
      const errorComponent = formElementA11yProps
        ? getClonedElement(subComponentDisplayNames.Error, { id: formElementA11yProps.errorA11yProps.id })
        : subComponentDisplayNames.Error;
      return <div role="alert">{errorComponent}</div>;
    }
    return null;
  }

  // next steps, render description, error, label and instructions with context

  function renderLabel() {
    const a11yProps = formElementA11yProps
      ? { id: formElementA11yProps.labelA11yProps.id, ref: formElementA11yProps.labelA11yProps.ref }
      : {};
    return getClonedElement(subComponentDisplayNames.Label, {
      hasOptionalLabel: hasRequiredLabel ? false : hasOptionalLabel,
      hasRequiredLabel,
      help: extractedChildren[subComponentDisplayNames.Help],
      isInline,
      isVisuallyHidden: isLabelVisuallyHidden,
      hasFieldSet,
      onClick: onClickLabel,
      ...a11yProps,
    });
  }

  function renderDescription() {
    if (!formElementA11yProps) {
      return subComponentDisplayNames.Description;
    }
    return getClonedElement(subComponentDisplayNames.Description, {
      id: formElementA11yProps.descriptionA11yProps.id,
    });
  }

  function renderInstructions() {
    if (!formElementA11yProps) {
      return subComponentDisplayNames.Instructions;
    }
    return getClonedElement(subComponentDisplayNames.Instructions, {
      id: formElementA11yProps.instructionsA11yProps.id,
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
      {children.length
        ? children.map(child => {
            if (child.type?.displayName === subComponentDisplayNames.Label) {
              return renderLabel();
            }

            if (child.type?.displayName === subComponentDisplayNames.Instructions) {
              return renderInstructions();
            }

            if (child.type?.displayName === subComponentDisplayNames.Error) {
              return renderError();
            }

            if (child.type?.displayName === subComponentDisplayNames.Description) {
              return renderDescription();
            }
            return child;
          })
        : children}
    </sc.FormElement>
  );
}

FormElement.types = {
  size: constants.defaultSize,
};

const propTypes = {
  formElementA11yProps: PropTypes.shape({
    id: PropTypes.string,
    // cell: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    // cellPropsResetCSS: PropTypes.bool,
  }), // should use shape

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

  /** Size of the label, error, help and description (font size, min-height, padding, etc). */
  size: PropTypes.oneOf([FormElement.types.size.SMALL, FormElement.types.size.MEDIUM, FormElement.types.size.LARGE]),

  /** FormElement contains multiple children so Renders a legend element instead of label. */
  hasFieldSet: PropTypes.bool,

  onClickLabel: PropTypes.func,
};

const defaultProps = {
  formElementA11yProps: null,
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
