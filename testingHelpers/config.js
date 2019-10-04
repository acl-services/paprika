/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { configure, render } from "@testing-library/react";
import L10n from "@paprika/l10n";

configure({ testIdAttribute: "data-pka-anchor" });

// github.com/vuejs/vue-test-utils/issues/319#issuecomment-354667621
Element.prototype.scrollTo = () => {};

global.renderWithL10n = (reactElement, ...otherArgs) => {
  const renderedComponent = render(<L10n locale="en">{reactElement}</L10n>, ...otherArgs);
  const rerender = newReactElement => {
    renderedComponent.rerender(<L10n locale="en">{newReactElement}</L10n>);
  };

  return {
    ...renderedComponent,
    rerender,
  };
};
