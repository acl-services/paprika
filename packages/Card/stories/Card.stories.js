import React from "react";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import Showcase from "./examples/Showcase";
import DeluxeCard from "./examples/DeluxeCard";
import BasicCard from "./examples/BasicCard";
import BasicCardContent from "./examples/BasicCardContent";
import MultipleCard from "./examples/MultipleCard";
import TagCard from "./examples/TagCard";
import IconCard from "./examples/IconCard";

const storyName = getStoryName("Card");

storiesOf(storyName, module).add("Showcase", Showcase);

storiesOf(`${storyName}/Examples`, module)
  .add("Basic Card with Icon", () => <BasicCard />)
  .add("Deluxe Card", () => <DeluxeCard />)
  .add("Basic Card with Content", () => <BasicCardContent />)
  .add("Multiple Card Icons", () => <MultipleCard />)
  .add("Card with Footer Tag", () => <TagCard />)
  .add("Card with Icon", () => <IconCard />);
