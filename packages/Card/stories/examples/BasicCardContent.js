import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Card from "../../src";

export default () => {
  const card = [
    {
      title: "Master view",
      attrTypes: "25",
      questions: "100",
      creator: "Cory McBain",
      updatedBy: "Charles Bradley",
    },
    {
      title: "General Information",
      attrTypes: "12",
      questions: "",
      creator: "Cory McBain",
      updatedBy: "Charles Bradley",
    },
    {
      title: "Vendor identification",
      attrTypes: "100",
      questions: "",
      creator: "Cory McBain",
      updatedBy: "Charles Bradley",
    },
    {
      title: "Criticality",
      attrTypes: "12",
      questions: "",
      creator: "Cory McBain",
      updatedBy: "Charles Bradley",
    },
    {
      title: "Vendor relationships",
      attrTypes: "",
      questions: "10",
      creator: "Cory McBain",
      updatedBy: "Charles Bradley",
    },

    {
      title: "RapidRatings",
      attrTypes: "100",
      questions: "",
      creator: "Cory McBain",
      updatedBy: "Charles Bradley",
    },
    {
      title: "BitSite security ratings",
      attrTypes: "100",
      questions: "",
      creator: "Cory McBain",
      updatedBy: "Charles Bradley",
    },
    {
      title: "Security scorecard ratings",
      attrTypes: "",
      questions: "10",
      creator: "Cory McBain",
      updatedBy: "Charles Bradley",
    },
  ];

  return (
    <Story>
      <h1>Views</h1>
      <div style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
        {card.map(asset => {
          return (
            <div style={{ margin: "10px" }}>
              <Card size="small">
                <Card.Content>
                  <Card.Title>{asset.title}</Card.Title>
                  <Card.MetaData>
                    {asset.attrTypes ? asset.attrTypes.concat(" attribute types") : ""}{" "}
                    {asset.questions ? asset.questions.concat(" questions") : ""}
                  </Card.MetaData>
                  <Card.Seperator />
                  <Card.MetaData>Created by {asset.creator}</Card.MetaData>
                  <Card.MetaData>Last updated by {asset.updatedBy}</Card.MetaData>
                </Card.Content>
              </Card>
            </div>
          );
        })}
      </div>
    </Story>
  );
};
