import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Card from "../../src";
import Avatar from "../../src/components/Avatar";

export default () => {
  const data = [
    {
      avatar: "A",
      title: "Animals",
      meta1: "500 total",
      text: "Talk with Steve Brule first.",
      meta2: "Created by Cory McBain",
      meta3: "Updated 3 months ago by Charles Bradley",
      footer1: "150 attribute types",
    },
    {
      avatar: "B",
      title: "Bee",
      meta1: "12 total",
      text: "Talk with Steve Brule first.",
      meta2: "Created by Cory McBain",
      meta3: "Updated 3 months ago by Charles Bradley",
      footer1: "150 attribute types",
    },
    {
      avatar: "C",
      title: "Canary",
      meta1: "12 total",
      text: "Talk with Steve Brule first.",
      meta2: "Created by Cory McBain",
      meta3: "Updated 3 months ago by Charles Bradley",
      footer1: "150 attribute types",
    },
    {
      avatar: "D",
      title: "Donkey",
      meta1: "12 total",
      text: "Talk with Steve Brule first.",
      meta2: "Created by Cory McBain",
      meta3: "Updated 3 months ago by Charles Bradley",
      footer1: "150 attribute types",
    },
    {
      avatar: "E",
      title: "Elephant",
      meta1: "12 total",
      text: "Talk with Steve Brule first.",
      meta2: "Created by Cory McBain",
      meta3: "Updated 3 months ago by Charles Bradley",
      footer1: "150 attribute types",
    },
    {
      avatar: "F",
      title: "Flamingo",
      meta1: "12 total",
      text: "Talk with Steve Brule first.",
      meta2: "Created by Cory McBain",
      meta3: "Updated 3 months ago by Charles Bradley",
      footer1: "150 attribute types",
    },
    {
      avatar: "G",
      title: "Gorilla",
      meta1: "12 total",
      text: "Talk with Steve Brule first.",
      meta2: "Created by Cory McBain",
      meta3: "Updated 3 months ago by Charles Bradley",
      footer1: "150 attribute types",
    },
  ];

  return (
    <Story>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {data.map(props => {
          return (
            <div style={{ margin: "8px" }}>
              <Card size="medium">
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
          );
        })}
      </div>
    </Story>
  );
};
