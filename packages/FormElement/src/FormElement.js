import React from "react";
import PropTypes from "prop-types";

import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import extractChildren from "@paprika/helpers/lib/extractChildren";
import isNil from "lodash/isNil";
import uuidv4 from "uuid/v4";

import Description from "./components/Description";
import Instructions from "./components/Instructions";
import Content from "./components/Content";
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

  /** Label text of this field. */
  label: PropTypes.string.isRequired,

  /** Size of the label, error, help and description (font size, min-height, padding, etc). */
  size: PropTypes.oneOf(ShirtSizes.DEFAULT),
};

const defaultProps = {
  hasOptionalLabel: false,
  hasRequiredLabel: false,
  id: null,
  isDisabled: false,
  isInline: false,
  isLabelVisuallyHidden: false,
  size: ShirtSizes.MEDIUM,
};

const subComponentDisplayNames = {
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
    ...moreProps
  } = props;

  const extractedChildren = extractChildren(children, [
    subComponentDisplayNames.Description,
    subComponentDisplayNames.Error,
    subComponentDisplayNames.Help,
    subComponentDisplayNames.Instructions,
    subComponentDisplayNames.Content,
  ]);
  const ariaDescriptionId = React.useRef(uuidv4()).current;
  const ariaErrorId = React.useRef(uuidv4()).current;
  const ariaInstructionsId = React.useRef(uuidv4()).current;
  const uniqueInputId = React.useRef(uuidv4()).current;
  const hasError =
    !!extractedChildren[subComponentDisplayNames.Error] &&
    !!extractedChildren[subComponentDisplayNames.Error].props.children;
  const idForLabel = isNil(id) || id === "" ? uniqueInputId : id;
  const refLabel = React.useRef(null);

  const getClonedElement = (displayName, extraProps = {}) => {
    return React.cloneElement(extractedChildren[displayName], extraProps);
  };

  function renderFooter() {
    if (hasError) {
      return (
        <div role="alert">
          {getClonedElement(subComponentDisplayNames.Error, {
            id: ariaErrorId,
          })}
        </div>
      );
    }

    if (extractedChildren[subComponentDisplayNames.Description]) {
      return getClonedElement(subComponentDisplayNames.Description, {
        id: ariaDescriptionId,
      });
    }

    return null;
  }

  function renderContent() {
    return getClonedElement(subComponentDisplayNames.Content, {
      idForLabel,
      refLabel,
      ariaDescribedBy: `${ariaErrorId} ${ariaInstructionsId} ${ariaDescriptionId}`,
    });
  }

  function renderInstructions() {
    return getClonedElement(subComponentDisplayNames.Instructions, {
      id: ariaInstructionsId,
    });
  }
  return (
    <div css={formElementStyles} isInline={isInline} size={size} isDisabled={isDisabled} {...moreProps}>
      <Label
        hasOptionalLabel={hasOptionalLabel}
        hasRequiredLabel={hasRequiredLabel}
        help={extractedChildren[subComponentDisplayNames.Help]}
        id={idForLabel}
        isInline={isInline}
        isVisuallyHidden={isLabelVisuallyHidden}
        label={label}
        ref={refLabel}
      />
      <div css={isInline ? inlineContainerStyles : null}>
        {extractedChildren[subComponentDisplayNames.Instructions] ? renderInstructions() : null}
        {extractedChildren[subComponentDisplayNames.Content] ? renderContent() : null}
        {renderFooter()}
      </div>
    </div>
  );
}

FormElement.displayName = "FormElement";
FormElement.propTypes = propTypes;
FormElement.defaultProps = defaultProps;
FormElement.SubComponentDisplayNames = subComponentDisplayNames;
FormElement.Content = Content;
FormElement.Instructions = Instructions;
FormElement.Description = Description;
FormElement.Error = ErrorMessage;
FormElement.Help = Help;

export default FormElement;
