import React from "react";
import { storiesOf } from "@storybook/react";
import Card from "../src/Card";

import BasicIconCard from "./examples/BasicIconCard";
import DeluxeCard from "./examples/DeluxeCard";

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
  })

  .add("Card with Content", () => {
    return (
      <Card>
        <Card.Header>Header</Card.Header>
        <Card.Content>
          <Card.Title>hello</Card.Title>
          <Card.MetaData>100 total</Card.MetaData>
        </Card.Content>
        <Card.Footer>Footer</Card.Footer>
      </Card>
    );
  })
  .add("Card with Avatar Initial", () => {
    return <DeluxeCard />;
  })

  .add("Card with Avatar Icon", () => {
    return <BasicIconCard />;
  });
