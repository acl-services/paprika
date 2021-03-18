import React from "react";
import PropTypes from "prop-types";
import { FormElementContext } from "../../FormElement";

export const FieldsetContext = React.createContext({});

function Content(props) {
  const { children, ...moreProps } = props;
  const { ariaDescribedBy, isRequired, isDisabled, refLabel, labelId, hasFieldSet } = React.useContext(
    FormElementContext
  );

  if (!children) {
    return null;
  }

  const ariaDescribedByIdsArray = [
    ariaDescribedBy?.ariaErrorId,
    ariaDescribedBy?.ariaDescriptionId,
    ariaDescribedBy?.ariaInstructionsId,
    ariaDescribedBy?.fieldsetAriaDescribedBy,
  ].filter(Boolean);

  const ariaDescribedByIdsString = ariaDescribedByIdsArray.join(" ");

  const a11yProps = {
    "aria-describedby": ariaDescribedByIdsString.length ? ariaDescribedByIdsString : null,
    "aria-disabled": isDisabled || null,
    "aria-required": isRequired || null,
    disabled: isDisabled || null,
    id: labelId,
  };

  const renderChildren = () => {
    return typeof children === "function" ? children(a11yProps, refLabel) : children;
  };

  const contextValue = { fieldsetAriaDescribedBy: ariaDescribedByIdsString };

  return (
    <div data-pka-anchor="form-element.content" {...moreProps}>
      {hasFieldSet ? (
        <FieldsetContext.Provider value={contextValue}>{renderChildren()}</FieldsetContext.Provider>
      ) : (
        renderChildren()
      )}
    </div>
  );
}

const propTypes = {
  /** Input field and layout elements. May be a render function with a11yProps object and refLabel.
   * a11yProps includes: { id, disabled?, "aria-disabled"?, "aria-describedby"?, "aria-required"? }
   * refLabel is a React ref for the `<FormElement.Label />`
   */
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
};

Content.displayName = "FormElement.Content";
Content.propTypes = propTypes;

export default Content;
