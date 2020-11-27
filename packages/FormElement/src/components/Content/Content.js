import React from "react";
import PropTypes from "prop-types";
import { FormElementContext } from "../../FormElement";

export const FieldsetContext = React.createContext({});

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
};

function Content(props) {
  const { ariaDescribedBy, refLabel, labelId, hasFieldSet } = React.useContext(FormElementContext);
  const { children, ...moreProps } = props;

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
    refLabel,
    id: labelId,
  };

  if (ariaDescribedByIdsString.length) {
    a11yProps["aria-describedby"] = ariaDescribedByIdsString;
  }

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

Content.displayName = "FormElement.Content";
Content.propTypes = propTypes;

export default Content;
