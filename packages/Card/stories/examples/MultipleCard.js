import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Card from "../../src";
import Avatar from "../../src/components/Avatar";

export default () => {
  const data = [
    {
      avatar: "A",
      title: "Computer",
      meta1: "500 total",
      text: "Talk with Steve Brule first.",
      meta2: "Created by Cory McBain",
      meta3: "Updated 3 months ago by Charles Bradley",
      footer1: "150 attribute types",
    },
    {
      avatar: "B",
      title: "Eternity",
      meta1: "12 total",
      text: "Talk with Steve Brule first.",
      meta2: "Created by Cory McBain",
      meta3: "Updated 3 months ago by Charles Bradley",
      footer1: "150 attribute types",
    },
    {
      avatar: "C",
      title: "Eternity",
      meta1: "12 total",
      text: "Talk with Steve Brule first.",
      meta2: "Created by Cory McBain",
      meta3: "Updated 3 months ago by Charles Bradley",
      footer1: "150 attribute types",
    },
    {
      avatar: "D",
      title: "Eternity",
      meta1: "12 total",
      text: "Talk with Steve Brule first.",
      meta2: "Created by Cory McBain",
      meta3: "Updated 3 months ago by Charles Bradley",
      footer1: "150 attribute types",
    },
    {
      avatar: "E",
      title: "Eternity",
      meta1: "12 total",
      text: "Talk with Steve Brule first.",
      meta2: "Created by Cory McBain",
      meta3: "Updated 3 months ago by Charles Bradley",
      footer1: "150 attribute types",
    },
    {
      avatar: "F",
      title: "Eternity",
      meta1: "12 total",
      text: "Talk with Steve Brule first.",
      meta2: "Created by Cory McBain",
      meta3: "Updated 3 months ago by Charles Bradley",
      footer1: "150 attribute types",
    },
    {
      avatar: "G",
      title: "Eternity",
      meta1: "12 total",
      text: "Talk with Steve Brule first.",
      meta2: "Created by Cory McBain",
      meta3: "Updated 3 months ago by Charles Bradley",
      footer1: "150 attribute types",
    },
  ];

  return data.map(props => (
    <Story>
      <div style={{ width: "300px" }}>
        <Card>
          <Card.Header>
            <Avatar>{props.avatar}</Avatar>
          </Card.Header>
          <Card.Content>
            <Card.Title>{props.title}</Card.Title>
            <Card.MetaData>{props.meta1}</Card.MetaData>
            <Card.Seperator size="small" />
            <Card.Text>{props.text}</Card.Text>
            <Card.Seperator size="small" />
            <Card.MetaData>{props.meta2}</Card.MetaData>
            <Card.MetaData>{props.meta3}</Card.MetaData>
          </Card.Content>
          <Card.Footer>{props.footer1}</Card.Footer>
        </Card>
      </div>
    </Story>
  ));
};
