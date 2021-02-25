/* A shell component to collect and distribute a11y related props and DOM
 * attributes to the appropriate (interactive) element
 */

import PropTypes from "prop-types";
import { RefOf } from "@paprika/helpers";

export default function A11yPropsCollector() {
  return null;
}

export const propTypes = {
  /** DOM id attribute for focussable control (trigger element or ul element if isInline=true) */
  id: PropTypes.string,

  /** Ref for a DOM element containing the label for this component */
  refLabel: RefOf(PropTypes.instanceOf(Element)),
};

A11yPropsCollector.displayName = "ListBox.A11y";

A11yPropsCollector.propTypes = propTypes;

A11yPropsCollector.defaultProps = {
  id: null,
  refLabel: null,
};
