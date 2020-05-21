import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Card from "../../src";
import Avatar from "../../src/components/Avatar";

export default () => {
  return (
    <Story>
      {/* <div style={{ width: "300px" }}> */}
      <Card size="large">
        <Card.Header>
          <Avatar />
        </Card.Header>
        <Card.Content>
          <Card.Title>Card</Card.Title>
          <Card.MetaData>100,000 total</Card.MetaData>
          <Card.Seperator size="small" />
          <Card.Text>
            Cards are used to group similar concepts and tasks together to make the platform easier for users to scan,
            read, and get things done.
          </Card.Text>
        </Card.Content>
        <Card.Footer>250 attributes</Card.Footer>
      </Card>
      {/* </div> */}
    </Story>
  );
};
