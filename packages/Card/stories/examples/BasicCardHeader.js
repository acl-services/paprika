import React from "react";
import Icon from "@paprika/icon/lib/Lock";
import { Story } from "storybook/assets/styles/common.styles";
import Card from "../../src";
import Avatar from "../../src/components/Avatar";

export default () => {
  const card = [
    {
      title: "Asset Types",
      total: "7",
    },
    {
      title: "Entity Types",
      total: "5",
    },
    {
      title: "Questionnaires",
      total: "1,500",
    },
    {
      title: "Roles",
      total: "10",
    },
    {
      title: "Workflows",
      total: "3",
    },
  ];

  return (
    <Story>
      <h1>Configuration</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {card.map(asset => {
          return (
            <div style={{ display: "flex", width: "312px", padding: "8px" }}>
              <Card>
                <Card.Header>
                  <Avatar size="medium">
                    <Icon />
                  </Avatar>
                </Card.Header>
                <Card.Content>
                  <Card.Title>{asset.title}</Card.Title>
                  <Card.MetaData>{asset.total} total</Card.MetaData>
                </Card.Content>
              </Card>
            </div>
          );
        })}
      </div>
    </Story>
  );
};
