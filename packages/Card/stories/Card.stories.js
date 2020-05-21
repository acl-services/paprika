import React from "react";
import { storiesOf } from "@storybook/react";

import BasicIconCard from "./examples/BasicIconCard";
import DeluxeCard from "./examples/DeluxeCard";
import BasicCardHeader from "./examples/BasicCardHeader";
import BasicCardContent from "./examples/BasicCardContent";
import MultipleCard from "./examples/MultipleCard";

storiesOf("Card", module).add("Showcase", BasicIconCard);

storiesOf("Card/Example", module)
  .add("Deluxe Card", () => {
    return <DeluxeCard />;
  })

  .add("Card with Header", () => {
    return <BasicCardHeader />;
  })

  .add("Card with Content", () => {
    return <BasicCardContent />;
  })
  .add("Multiple Card Icons", () => {
    return <MultipleCard />;
  });
