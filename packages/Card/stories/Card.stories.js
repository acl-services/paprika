import React from "react";
import { storiesOf } from "@storybook/react";
import Card from "../src/Card";

storiesOf("Card", module)
  .add("Card", () => {
    return <Card />;
  })

  .add("Card with Title", () => {
    return (
      <Card>
        <Card.Title>hello</Card.Title>
      </Card>
    );
  });
