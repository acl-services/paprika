import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Icon from "@paprika/icon/lib/Calendar";
import Card from "../../src";
import Avatar from "../../src/components/Avatar";

export default () => {
  return (
    <Story style={{ width: "312px" }}>
      <Card size="small">
        <Card.Header>
          <Avatar>
            <Icon />
          </Avatar>
        </Card.Header>
        <Card.Content>
          <Card.Title>Card</Card.Title>
          <Card.MetaData>100,000 total</Card.MetaData>
        </Card.Content>
      </Card>
    </Story>
  );
};
