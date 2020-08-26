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
      <Card size={Card.types.size.LARGE}>
        <Card.Content>
          <Card.Title>Asset type name</Card.Title>
          <Input />
          <div style={{ width: "100%", height: "24px" }} />
          <Checkbox>Use a display name</Checkbox>
          <div style={{ width: "100%", height: "24px" }} />
          <Card.Title>Description (optional)</Card.Title>
          <Textarea placeholder="Kanye is the only one who can edit this.." />
          <div style={{ width: "100%", height: "24px" }} />
          <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <div style={{ width: "50%", display: "flex", justifyContent: "space-between" }}>
              <Button isDisabled="true">Save</Button>
              <Button isDisabled="true" kind={Button.types.kind.MINOR}>
                Cancel
              </Button>
            </div>
            <Button kind={Button.types.kind.MINOR}>Archive</Button>
          </div>
          <div style={{ width: "100%", height: "24px" }} />
          <Card.Metadata>Created by Cory McBain</Card.Metadata>
          <Card.Metadata>Last updated by Charles Bradley</Card.Metadata>
          <Button kind={Button.types.kind.LINK}>See full activity log</Button>
        </Card.Content>
      </Card>
    </Story>
  );
};
