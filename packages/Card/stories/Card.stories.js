import React from "react";
import { storiesOf } from "@storybook/react";
import Card from "../src/Card";

import BasicIconCard from "./examples/BasicIconCard";
import DeluxeCard from "./examples/DeluxeCard";
import BasicCardHeader from "./examples/BasicCardHeader";
import BasicCardContent from "./examples/BasicCardContent";
import MultipleCard from "./examples/MultipleCard";

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

  .add("Card with Text", () => {
    return (
      <Card>
        <Card.Title>Card</Card.Title>
        <Card.MetaData>100,000 total</Card.MetaData>
        <Card.Text>
          Cards are used to group similar concepts and tasks together to make the platform easier for users to scan,
          read, and get things done.
        </Card.Text>
        <Card.MetaData>Created by Kaan and Karen</Card.MetaData>
        <Card.MetaData>Updated 1 minute ago by Nahum</Card.MetaData>
        <Card.Footer></Card.Footer>
      </Card>
    );
  })

  .add("Card with Seperator", () => {
    return (
      <Card>
        <Card.Title>Card</Card.Title>
        <Card.MetaData>100,000 total</Card.MetaData>
        <Card.Seperator />
        <Card.Text>
          Cards are used to group similar concepts and tasks together to make the platform easier for users to scan,
          read, and get things done.
        </Card.Text>
        <Card.Seperator />
        <Card.MetaData>Created by Kaan and Karen</Card.MetaData>
        <Card.MetaData>Updated 1 minute ago by Nahum</Card.MetaData>
        <Card.Seperator />
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
  });

storiesOf("Card/Example", module)
  .add("Deluxe Card", () => {
    return <DeluxeCard />;
  })

  .add("Basic Card Icon", () => {
    return <BasicIconCard />;
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
