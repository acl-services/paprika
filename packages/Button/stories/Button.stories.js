import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { getStoryName } from "storybook/storyTree";
import Showcase from "./examples/Showcase";
import Variations from "./examples/Variations";
import NewRef from "./examples/NewRef";
import OldRef from "./examples/OldRef";
import CloseButtonRef from "./examples/CloseButtonRef";
import Focus from "./examples/Focus";
import CommonButtons from "./examples/CommonButtons";
import ButtonStates from "./examples/ButtonStates";
import ButtonVariations from "./examples/ButtonVariations";
import ButtonSubmit from "./examples/ButtonSubmit";

const storyName = getStoryName("Button");

storiesOf(storyName, module)
  .addDecorator(withKnobs)
  .add("Showcase", Showcase);

storiesOf(storyName, module).add("Variations", () => <Variations />);

storiesOf(`${storyName}/Examples`, module)
  .add("Ref", () => <NewRef />)
  .add("Old Ref", () => <OldRef />)
  .add("Button.Close Ref", () => <CloseButtonRef />)
  .add("Button onSubmit", () => <ButtonSubmit />)
  .add("Focus", () => <Focus />);

storiesOf(`${storyName}/Backyard/Starling`, module)
  .add("Common Buttons", () => <CommonButtons />)
  .add("Button States", () => <ButtonStates />)
  .add("Button Variations", () => <ButtonVariations />);
