import React from "react";
import PropTypes from "prop-types";

import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import extractChildren from "@paprika/helpers/lib/extractChildren";
import isNil from "lodash/isNil";
import isString from "lodash/isString";
import uuidv4 from "uuid/v4";

import Description from "./components/Description";
import ErrorMessage from "./components/ErrorMessage";
import Help from "./components/Help";
import Label from "./components/Label";

import formElementStyles, { inlineContainerStyles } from "./FormElement.styles";

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

  const extratedChildren = extractChildren(children, [
    "FormElement.Description",
    "FormElement.Error",
    "FormElement.Help",
  ]);
  const ariaDescriptionId = React.useRef(uuidv4()).current;
  const hasError = !!extratedChildren["FormElement.Error"] && !!extratedChildren["FormElement.Error"].props.children;
  const uniqueInputId = React.useRef(uuidv4()).current;
  const inputId = isNil(id) || id === "" ? uniqueInputId : id;
  let isFooterInserted = false;

  function renderFooter() {
    if (isFooterInserted) return;

    isFooterInserted = true;

    if (hasError) {
      return extratedChildren["FormElement.Error"];
    }

    if (extratedChildren["FormElement.Description"]) {
      return React.cloneElement(extratedChildren["FormElement.Description"], {
        ariaDescriptionId,
      });
    }

    return null;
  }

  return (
    <div css={formElementStyles} isInline={isInline} size={size} isDisabled={isDisabled} {...moreProps}>
      <Label
        hasOptionalLabel={hasOptionalLabel}
        hasRequiredLabel={hasRequiredLabel}
        help={extratedChildren["FormElement.Help"]}
        id={inputId}
        isInline={isInline}
        isVisuallyHidden={isLabelVisuallyHidden}
        label={label}
      />

      {extratedChildren.children.map(child => {
        if (React.isValidElement(child)) {
          const extendedProps = isString(child.type)
            ? {
                "aria-describedby": ariaDescriptionId,
                id: inputId,
                disabled: isDisabled,
                readOnly: isReadOnly,
              }
            : {
                "aria-describedby": ariaDescriptionId,
                hasError,
                id: inputId,
                isDisabled,
                isReadOnly,
                size,
              };
          const clonedChild = React.cloneElement(child, extendedProps);

          return (
            <React.Fragment key={child.key}>
              {isInline ? (
                <div css={inlineContainerStyles}>
                  {clonedChild}
                  {renderFooter()}
                </div>
              ) : (
                <React.Fragment>
                  {clonedChild}
                  {renderFooter()}
                </React.Fragment>
              )}
            </React.Fragment>
          );
        }

        return child;
      })}
    </div>
  );
}

FormElement.displayName = "FormElement";

FormElement.propTypes = propTypes;
FormElement.defaultProps = defaultProps;

FormElement.Description = Description;
FormElement.Error = ErrorMessage;
FormElement.Help = Help;

export default FormElement;
