import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Avatar from "@paprika/avatar";
import Calendar from "@paprika/icon/lib/Calendar";
import Button from "@paprika/button";
import Ellipsis from "@paprika/icon/lib/Ellipsis";
import Card from "../../src";

export default () => (
  <Story style={{ width: "312px" }}>
    <Card size={Card.types.size.SMALL}>
      <Card.Header>
        <Avatar backgroundColor="black" color="white">
          <Calendar />
        </Avatar>
        <Button.Icon kind="minor">
          <Ellipsis />
        </Button.Icon>
      </Card.Header>
      <Card.Content>
        <Card.Title>Card</Card.Title>
        <Card.Metadata>100,000 total</Card.Metadata>
      </Card.Content>
    </Card>
  </Story>
);
