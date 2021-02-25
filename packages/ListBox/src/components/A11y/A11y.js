/* eslint-disable react/no-unused-prop-types */

/* A shell component to collect and distribute a11y related props and DOM
 * attributes to the appropriate (interactive) element
 */

import React from "react";
import PropTypes from "prop-types";
import { RefOf } from "@paprika/helpers";

export default function A11y() {
  return <></>;
}

export const propTypes = {
  /** DOM id attribute for focussable control (trigger element or ul element if isInline=true) */
  id: PropTypes.string,

  /** Ref for a DOM element containing the label for this component */
  refLabel: RefOf(PropTypes.instanceOf(Element)),
};

A11y.displayName = "ListBox.A11y";

A11y.propTypes = propTypes;

A11y.defaultProps = {
  id: null,
  refLabel: null,
};
