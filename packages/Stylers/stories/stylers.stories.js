import React from "react";
import { storiesOf } from "@storybook/react";
import { Story, Rule } from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import {
  Box,
  TruncatedBox,
  UntruncatedBox,
  InvisibleBox,
  InputWithPlaceholder,
  FontScale,
  FontStep,
  LeadingStep,
  ZBox,
  ZStep,
  FocusBox,
} from "./stylers.stories.styles";

const storyName = getStoryName("Stylers");

storiesOf(storyName, module)
  .add("Includes", () => (
    <Story>
      <h1>Include Examples</h1>

      <h4>
        <code>stylers.truncateText()</code>
      </h4>
      <TruncatedBox>Lorem ipsum tumeric direct trade snackwave locavore taxidermy live-edge wolf mixtape.</TruncatedBox>

      <h4>
        <code>stylers.noTruncateText()</code>
      </h4>
      <UntruncatedBox>
        Lorem ipsum tumeric direct trade snackwave locavore taxidermy live-edge wolf mixtape.
      </UntruncatedBox>

      <Rule />

      <h4>
        <code>stylers.visuallyHidden</code>
      </h4>
      <InvisibleBox>
        <span role="img" aria-label="ghost">
          👻
        </span>
      </InvisibleBox>

      <Rule />

      <h4>
        <code>stylers.placeholders()</code>
      </h4>
      <Box>
        <InputWithPlaceholder placeholder="placeholder" />
        <br />
        <InputWithPlaceholder placeholder="placeholder" disabled />
      </Box>

      <Rule />

      <h3>Focus Indicators</h3>
      <h4>
        <code>stylers.focusRing()</code>
      </h4>
      <FocusBox.Default tabIndex={0} />
      <h4>
        <code>stylers.focusRing(true)</code>
      </h4>
      <FocusBox.Inset tabIndex={0} />
      <h4>
        <code>stylers.focusRing.bordered()</code>
      </h4>
      <FocusBox.Bordered tabIndex={0} />
      <h4>
        <code>stylers.focusRing.bordered(true)</code>
      </h4>
      <FocusBox.Bordered.Inset tabIndex={0} />
      <h4>
        <code>stylers.focusRing.subtle()</code>
      </h4>
      <FocusBox.Subtle tabIndex={0} />
      <h4>
        <code>stylers.focusRing.subtle(true)</code>
      </h4>
      <FocusBox.Subtle.Inset tabIndex={0} />
    </Story>
  ))

  .add("Helpers", () => (
    <Story>
      <h1>Helper Examples</h1>

      <h4>
        <code>stylers.fontSize()</code>
      </h4>
      <FontScale>
        <FontStep scale={-5}>
          <span>-5</span>
          <span>9px</span>
        </FontStep>
        <FontStep scale={-4}>
          <span>-4</span>
          <span>10px</span>
        </FontStep>
        <FontStep scale={-3}>
          <span>-3</span>
          <span>11px</span>
        </FontStep>
        <FontStep scale={-2}>
          <span>-2</span>
          <span>13px</span>
        </FontStep>
        <FontStep scale={-1}>
          <span>-1</span>
          <span>14px</span>
        </FontStep>
        <FontStep scale={0}>
          <span>0</span>
          <span>16px</span>
        </FontStep>
        <FontStep scale={1}>
          <span>1</span>
          <span>18px</span>
        </FontStep>
        <FontStep scale={2}>
          <span>2</span>
          <span>20px</span>
        </FontStep>
        <FontStep scale={3}>
          <span>3</span>
          <span>23px</span>
        </FontStep>
        <FontStep scale={4}>
          <span>4</span>
          <span>26px</span>
        </FontStep>
        <FontStep scale={5}>
          <span>5</span>
          <span>29px</span>
        </FontStep>
        <FontStep scale={6}>
          <span>6</span>
          <span>32px</span>
        </FontStep>
        <FontStep scale={7}>
          <span>7</span>
          <span>36px</span>
        </FontStep>
      </FontScale>

      <Rule />

      <h4>
        <code>stylers.lineHeight()</code>
      </h4>
      <LeadingStep scale={-3}>
        <code>line-height(-3) === 0.98</code>
        <br /> Hexagon street art selfies locavore ethical mixtape.
      </LeadingStep>
      <LeadingStep scale={-2}>
        <code>line-height(-2) === 1.11</code>
        <br /> Hexagon street art selfies locavore ethical mixtape.
      </LeadingStep>
      <LeadingStep scale={-1}>
        <code>line-height(-1) === 1.24</code>
        <br /> Hexagon street art selfies locavore ethical mixtape.
      </LeadingStep>
      <LeadingStep scale={0}>
        <code>line-height() === 1.4</code>
        <br /> Hexagon street art selfies locavore ethical mixtape.
      </LeadingStep>
      <LeadingStep scale={1}>
        <code>line-height(1) === 1.58</code>
        <br /> Hexagon street art selfies locavore ethical mixtape.
      </LeadingStep>
      <LeadingStep scale={2}>
        <code>line-height(2) === 1.77</code>
        <br /> Hexagon street art selfies locavore ethical mixtape.
      </LeadingStep>
      <LeadingStep scale={3}>
        <code>line-height(3) === 1.99</code>
        <br /> Hexagon street art selfies locavore ethical mixtape.
      </LeadingStep>
      <Rule />

      <h4>
        <code>stylers.z()</code>
      </h4>
      <ZBox>
        {[...Array(8).keys()].map(index => (
          <ZStep key={index} level={index}>
            {index}
          </ZStep>
        ))}
      </ZBox>
    </Story>
  ));
