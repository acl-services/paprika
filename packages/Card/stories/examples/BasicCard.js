import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import EllipsisIcon from "@paprika/icon/lib/Ellipsis";
import CalendarIcon from "@paprika/icon/lib/Calendar";
import Card from "../../src";
import Avatar from "../../src/components/Avatar";

export default () => (
  <Story style={{ width: "312px" }}>
    <Card size={Card.types.size.SMALL}>
      <Card.Header icon={<EllipsisIcon />} onButtonClick={() => {}}>
        <Avatar backgroundColor="black" color="white">
          <CalendarIcon />
        </Avatar>
      </Card.Header>
      <Card.Content>
        <Card.Title>Card</Card.Title>
        <Card.Metadata>100,000 total</Card.Metadata>
      </Card.Content>
    </Card>
  </Story>
);
