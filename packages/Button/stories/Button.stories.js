import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Showcase from "./examples/Showcase";
import Basic from "./examples/Basic";
import NewRef from "./examples/NewRef";
import OldRef from "./examples/OldRef";
import CloseButtonRef from "./examples/CloseButtonRef";

import CommonButtons from "./examples/CommonButtons";
import ButtonStates from "./examples/ButtonStates";
import ButtonVariations from "./examples/ButtonVariations";
import ButtonSubmit from "./examples/ButtonSubmit";

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add("Showcase", Showcase);

storiesOf("Button/Examples", module)
  .add("Basic", () => <Basic />)
  .add("Ref", () => <NewRef />)
  .add("Old Ref", () => <OldRef />)
  .add("Button.Close Ref", () => <CloseButtonRef />)
  .add("Button onSubmit", () => <ButtonSubmit />);

storiesOf("Button/Starling", module)
  .add("Common Buttons", () => <CommonButtons />)
  .add("Button States", () => <ButtonStates />)
  .add("Button Variations", () => <ButtonVariations />);
