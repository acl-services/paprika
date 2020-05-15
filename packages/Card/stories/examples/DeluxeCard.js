import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Card from "../../src";
import Avatar from "../../src/components/Avatar";

export default () => {
  return (
    <Story>
      <Card>
        <Card.Header>
          <Avatar color="blue" />
        </Card.Header>
        <Card.Content>
          <Card.Title>Card</Card.Title>
          <Card.MetaData>100,000 total</Card.MetaData>
        </Card.Content>
        <Card.Footer>250 attributes</Card.Footer>
      </Card>
    </Story>
  );
};
