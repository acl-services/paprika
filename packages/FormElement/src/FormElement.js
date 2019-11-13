import React from "react";
import PropTypes from "prop-types";

import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import isNil from "lodash/isNil";
import uuidv4 from "uuid/v4";

import { extractChildren } from "./helpers/extractChildren";
import Description from "./components/Description";
import Instructions from "./components/Instructions";
import ErrorMessage from "./components/ErrorMessage";
import Help from "./components/Help";
import Label from "./components/Label";

import formElementStyles, { inlineContainerStyles, formElementChildStyle } from "./FormElement.styles";

const propTypes = {
  children: PropTypes.node.isRequired,

  /** Should show is optional text besides the label or not. */
  hasOptionalLabel: PropTypes.bool,

  /** Should show is required text besides the label or not. */
  hasRequiredLabel: PropTypes.bool,

  /** ID for the child element. */
  id: PropTypes.string,

  /** Should be disabled or not, default is false. */
  isDisabled: PropTypes.bool,

  /** Should label and children be inline or not, default is false. */
  isInline: PropTypes.bool,

  /** Should label be hidden, default is false. Note: this is discouraged because of accessibility requirements. */
  isLabelVisuallyHidden: PropTypes.bool,

  /** Should be read-only or not, default is false. */
  isReadOnly: PropTypes.bool,

  /** Label text of this field. */
  label: PropTypes.string.isRequired,

  /** Size of the label, child component, error, help and description (font size, min-height, padding, etc). */
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
};

const defaultProps = {
  hasOptionalLabel: false,
  hasRequiredLabel: false,
  id: null,
  isDisabled: false,
  isInline: false,
  isLabelVisuallyHidden: false,
  isReadOnly: false,
  size: ShirtSizes.MEDIUM,
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
    isReadOnly,
    label,
    size,
    ...moreProps
  } = props;

  const extractedChildren = extractChildren(children, [
    "FormElement.Description",
    "FormElement.Error",
    "FormElement.Help",
    "FormElement.Instructions",
  ]);
  const ariaDescriptionId = React.useRef(uuidv4()).current;
  const ariaErrorId = React.useRef(uuidv4()).current;
  const ariaInstructionsId = React.useRef(uuidv4()).current;
  const hasError = !!extractedChildren["FormElement.Error"] && !!extractedChildren["FormElement.Error"].props.children;
  const uniqueInputId = React.useRef(uuidv4()).current;
  const inputId = isNil(id) || id === "" ? uniqueInputId : id;

  function renderFooter() {
    if (hasError) {
      return React.cloneElement(extractedChildren["FormElement.Error"], {
        ariaErrorId,
      });
    }

    if (extractedChildren["FormElement.Description"]) {
      return React.cloneElement(extractedChildren["FormElement.Description"], {
        ariaDescriptionId,
      });
    }

    return null;
  }

  function renderInstructions() {
    if (extractedChildren["FormElement.Instructions"]) {
      return React.cloneElement(extractedChildren["FormElement.Instructions"], {
        ariaInstructionsId,
      });
    }
  }

  const nativeChildTypes = ["input", "textarea", "select"];

  const renderFormElementChild = (child, index) => (
    <div key={`child-key_${index}`} css={formElementChildStyle}>
      {child}
    </div>
  );

  const ariaIds = `${ariaErrorId} ${ariaInstructionsId} ${ariaDescriptionId}`;

  return (
    <div css={formElementStyles} isInline={isInline} size={size} isDisabled={isDisabled} {...moreProps}>
      <Label
        hasOptionalLabel={hasOptionalLabel}
        hasRequiredLabel={hasRequiredLabel}
        help={extractedChildren["FormElement.Help"]}
        id={inputId}
        isInline={isInline}
        isVisuallyHidden={isLabelVisuallyHidden}
        label={label}
      />
      <div css={isInline ? inlineContainerStyles : null}>
        {renderInstructions()}
        {extractedChildren.children.map((child, index) => {
          if (React.isValidElement(child)) {
            const extendedProps = nativeChildTypes.includes(child.type)
              ? {
                  disabled: isDisabled,
                  readOnly: isReadOnly,
                  "aria-describedby": ariaIds,
                  id: inputId,
                }
              : {
                  hasError,
                  isDisabled,
                  isReadOnly,
                  size,
                  "aria-describedby": ariaIds,
                  id: child.type.displayName === "Input" ? inputId : null,
                };

            return renderFormElementChild(React.cloneElement(child, extendedProps), index);
          }

          return renderFormElementChild(child, index);
        })}
        {renderFooter()}
      </div>
    </div>
  );
}

FormElement.displayName = "FormElement";

FormElement.propTypes = propTypes;
FormElement.defaultProps = defaultProps;

FormElement.Instructions = Instructions;
FormElement.Description = Description;
FormElement.Error = ErrorMessage;
FormElement.Help = Help;

export default FormElement;
