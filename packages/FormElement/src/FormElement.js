import React from "react";
import PropTypes, { func } from "prop-types";

import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import isNil from "lodash/isNil";
import uuid from "uuid/v1";

import Description from "./components/Description";
import ErrorMessage from "./components/ErrorMessage";
import Hint from "./components/Hint";
import Label from "./components/Label";

import { extractChildren } from "./helpers/extractChildren";

import formElementStyles from "./FormElement.styles";

const propTypes = {
  children: PropTypes.node.isRequired,

  /** Should be disabled or not, default is false. */
  isDisabled: PropTypes.bool,

  /** Should label and children be inline or not, default is false. */
  isInline: PropTypes.bool,

  /** Should show is optional text besides the label or not. */
  isOptional: PropTypes.bool,

  /** Should be read-only or not, default is false. */
  isReadOnly: PropTypes.bool,

  /** Should show is required text besides the label or not. */
  isRequired: PropTypes.bool,

  /** Size of the label, child component, error, hint and description (font size, min-height, padding, etc). */
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
};

const defaultProps = {
  isDisabled: false,
  isInline: false,
  isOptional: false,
  isReadOnly: false,
  isRequired: false,
  size: "medium",
};

function FormElement(props) {
  const { children, isDisabled, isInline, isOptional, isReadOnly, isRequired, size } = props;

  const extratedChildren = extractChildren(children, [
    "FormElement.Description",
    "FormElement.Error",
    "FormElement.Hint",
  ]);

  const footer = extratedChildren["FormElement.Error"] || extratedChildren["FormElement.Description"];

  return (
    <div css={formElementStyles} isInline={isInline} size={size} isDisabled={isDisabled}>
      {extratedChildren.children.map(child => {
        console.log("child", child, React.isValidElement(child));
        // TODO: Also check if display name is Input, DatePicker...
        if (React.isValidElement(child) && child.type.displayName) {
          const uniqueId = isNil(child.props.id) ? uuid() : child.props.id;
          const clonedChild = (
            <child.type //datepicker
              {...child.props}
              id={uniqueId}
              isDisabled={isDisabled}
              isReadOnly={isReadOnly}
              label={null}
              size={size}
            >
              {child.props.children}
            </child.type>
          );

          return (
            <React.Fragment key={child.key}>
              {child.props.label ? (
                <Label
                  label={child.props.label}
                  id={uniqueId}
                  isOptional={isOptional}
                  isRequired={isRequired}
                  isInline={isInline}
                />
              ) : null}

              {isInline ? (
                <div>
                  {clonedChild}
                  {footer}
                </div>
              ) : (
                <React.Fragment>
                  {clonedChild}
                  {footer}
                </React.Fragment>
              )}
            </React.Fragment>
          );
        }

        return (
          <React.Fragment>
            {child}
            {footer}
          </React.Fragment>
        );
      })}
    </div>
  );
}

FormElement.displayName = "FormElement";

FormElement.propTypes = propTypes;
FormElement.defaultProps = defaultProps;

FormElement.Description = Description;
FormElement.Error = ErrorMessage;
FormElement.Hint = Hint;
FormElement.Label = Label;

export default FormElement;
