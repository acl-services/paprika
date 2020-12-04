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
    "aria-required": isRequired || null,
    "aria-disabled": isDisabled || null,
    disabled: isDisabled || null,
    id: labelId,
    refLabel,
  };

  const renderChildren = () => {
    return typeof children === "function" ? children(a11yProps) : children;
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
  /** Input field and layout elemements. May be a render funtion with ({ id, refLabel, ariaDescribedBy }) as argument. */
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
};

Content.displayName = "FormElement.Content";
Content.propTypes = propTypes;

export default Content;
