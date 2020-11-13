import React from "react";
import PropTypes from "prop-types";
import { FormElementContext } from "../../FormElement";

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
};

function Content(props) {
  const { ariaDescribedBy, refLabel, idForLabel } = React.useContext(FormElementContext);
  const { children, ...moreProps } = props;

  if (!children) {
    return null;
  }

  const ariaDescribedByIdsArray = [];
  if (ariaDescribedBy.ariaErrorId) {
    ariaDescribedByIdsArray.push(ariaDescribedBy.ariaErrorId);
  }
  if (ariaDescribedBy.ariaDescriptionId) {
    ariaDescribedByIdsArray.push(ariaDescribedBy.ariaDescriptionId);
  }
  if (ariaDescribedBy.ariaInstructionsId) {
    ariaDescribedByIdsArray.push(ariaDescribedBy.ariaInstructionsId);
  }
  if (ariaDescribedBy.wrapperAriaDescribedBy) {
    ariaDescribedByIdsArray.push(ariaDescribedBy.wrapperAriaDescribedBy);
  }

  const ariaDescribedByIdsString = ariaDescribedByIdsArray.join(" ");

  const a11yProps = {
    refLabel,
    id: idForLabel,
  };

  if (ariaDescribedByIdsString.length) {
    a11yProps["aria-describedby"] = ariaDescribedByIdsString;
  }

  const renderChildren = () => {
    return React.Children.map(children, child => {
      if (child.type.displayName === "FormElement") {
        return React.cloneElement(child, {
          wrapperAriaDescribedBy: ariaDescribedByIdsString,
        });
      }
      return child;
    });
  };

  return (
    <div data-pka-anchor="form-element.content" {...moreProps}>
      {typeof children === "function" ? children(a11yProps) : renderChildren()}
    </div>
  );
}

Content.displayName = "FormElement.Content";
Content.propTypes = propTypes;

export default Content;
