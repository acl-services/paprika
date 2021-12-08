import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Avatar from "@paprika/avatar";
import Tag from "@paprika/tag";
import Card from "../../src";

export default () => (
  <Story style={{ width: "312px" }}>
    <Card size="medium">
      <Card.Header>
        <Avatar backgroundColor="black" color="white">
          C
        </Avatar>
      </Card.Header>
      <Card.Content>
        <Card.Title>Card</Card.Title>
        <Card.Metadata>100,000 total</Card.Metadata>
        <Card.Text>
          Cards are used to group similar concepts and tasks together to make the platform easier for user to scan,
          read, and get things done. A card displays content in a manner similar to a playing card.
        </Card.Text>
        <Card.Metadata>Created by Phil Smith</Card.Metadata>
        <Card.Metadata>Updated 1 minute ago by Phil Smith</Card.Metadata>
      </Card.Content>
      <Card.Footer>
        00 items
        <Tag size={Tag.types.size.MEDIUM} theme={Tag.types.severityTheme.MEDIUM_RISK} style={{ margin: "0" }}>
          Medium Tag
        </Tag>
      </Card.Footer>
    </Card>
  </Story>
);
