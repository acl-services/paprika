import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Card from "../../src";
import Input from "../../../Input";
import Checkbox from "../../../Checkbox";
import Textarea from "../../../Textarea";
import Button from "../../../Button";

export default () => {
  return (
    <Story>
      <Card size="large">
        <Card.Content>
          <Card.Title>Asset type name</Card.Title>
          <Input />
          <Card.Seperator size="small" />
          <Checkbox>Use a display name</Checkbox>
          <Card.Seperator size="small" />
          <Card.Title>Description (optional)</Card.Title>
          <Textarea placeholder="Kanye is the only one who can edit this.." />
          <Card.Seperator size="small" />
          <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <div style={{ width: "50%", display: "flex", justifyContent: "space-between" }}>
              <Button isDisabled="true">Save</Button>
              <Button isDisabled="true" kind="minor">
                Cancel
              </Button>
            </div>
            <Button kind="minor">Archive</Button>
          </div>
          <Card.Seperator size="small" />
          <Card.Metadata>Created by Cory McBain</Card.Metadata>
          <Card.Metadata>Last updated by Charles Bradley</Card.Metadata>
          <Button kind="link">See full activity log</Button>
        </Card.Content>
      </Card>
    </Story>
  );
};
