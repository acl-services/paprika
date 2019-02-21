import React from "react";
import { func } from "prop-types";
import { select } from "@storybook/addon-knobs";
import { Story } from "storybook/assets/styles/common.styles";
import L10n from "../../L10n";
import Locales from "../../locales";

const contextTypes = {
  t: func,
};

const FakeComponent = (props, context) => {
  return `Change the knob and watch this change: ${context.t("moreInformation")}`;
};

FakeComponent.contextTypes = contextTypes;

const L10nStory = () => (
  <Story>
    <L10n locales={Locales} locale={select("locale", ["de", "en", "es", "fr"], "en")}>
      <FakeComponent />
    </L10n>
  </Story>
);

export default L10nStory;
