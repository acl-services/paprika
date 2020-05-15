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
  });
