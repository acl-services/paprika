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
  })

  .add("Card with Metadata", () => {
    return (
      <Card>
        <Card.Title>hello</Card.Title>
        <Card.MetaData>100 total</Card.MetaData>
      </Card>
    );
  })

  .add("Card with Header", () => {
    return (
      <Card>
        <Card.Header>Header</Card.Header>
        <Card.Title>hello</Card.Title>
        <Card.MetaData>100 total</Card.MetaData>
      </Card>
    );
  })

  .add("Card with Footer", () => {
    return (
      <Card>
        <Card.Title>hello</Card.Title>
        <Card.Footer></Card.Footer>
      </Card>
    );
  });
