/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { TextEncoder, TextDecoder } from "util";
import { configure, render } from "@testing-library/react";
import { toHaveNoViolations } from "jest-axe";
import L10n from "@paprika/l10n";

configure({ testIdAttribute: "data-pka-anchor" });

// jsdom provides neither global, but superagent's node entry (formidable -> @noble/hashes)
// reaches for TextEncoder while it is being imported.
global.TextEncoder = global.TextEncoder || TextEncoder;
global.TextDecoder = global.TextDecoder || TextDecoder;

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

global.context = describe;

expect.extend(toHaveNoViolations);
