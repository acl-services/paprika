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
      <div style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
        {card.map(card => {
          return (
            <div style={{ margin: "10px" }}>
              <Card size="small">
                <Card.Content>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Metadata>
                    {card.attrTypes ? card.attrTypes.concat(" attribute types") : ""}{" "}
                    {card.questions ? card.questions.concat(" questions") : ""}
                  </Card.Metadata>
                  <div style={{ width: "100%", height: "32px" }} />
                  <Card.Metadata>Created by {card.creator}</Card.Metadata>
                  <Card.Metadata>Last updated by {card.updatedBy}</Card.Metadata>
                </Card.Content>
              </Card>
            </div>
          );
        })}
      </div>
    </Story>
  );
};
