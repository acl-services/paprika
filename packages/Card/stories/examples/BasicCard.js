import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Icon from "@paprika/icon/lib/Calendar";
import Card from "../../src";
import Avatar from "../../src/components/Avatar";

export default () => {
  return (
    <Story style={{ width: "312px" }}>
      <Card size={Card.types.size.SMALL}>
        <Card.Header>
          <Avatar backgroundColor="black" color="white">
            <Icon />
          </Avatar>
        </Card.Header>
        <Card.Content>
          <Card.Title>Card</Card.Title>
          <Card.Metadata>100,000 total</Card.Metadata>
        </Card.Content>
      </Card>
    </Story>
  );
};
