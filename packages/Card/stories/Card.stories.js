import React from "react";
import { storiesOf } from "@storybook/react";

import CardStory from "./examples/CardStory";
import DeluxeCard from "./examples/DeluxeCard";
import BasicCard from "./examples/BasicCard";
import BasicCardContent from "./examples/BasicCardContent";
import MultipleCard from "./examples/MultipleCard";

storiesOf("Card", module).add("Showcase", CardStory);

storiesOf("Card/Examples", module)
  .add("Basic Card with Icon", () => {
    return <BasicCard />;
  })

  .add("Deluxe Card", () => {
    return <DeluxeCard />;
  })

  .add("Basic Card with Content", () => {
    return <BasicCardContent />;
  })
  .add("Multiple Card Icons", () => {
    return <MultipleCard />;
  });
