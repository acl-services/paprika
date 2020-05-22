import React from "react";
import Screener from "./examples/Screener";
import { defaultParameters } from "./CollapsibleText.stories.helpers";

export default {
  title: " | Collapsible Text/ Automation Tests",
};

export const screener = () => <Screener />;
screener.story = { parameters: defaultParameters };
