import React from "react";
import CollapsibleCard from "@paprika/collapsible-card";
import ListBox from "../../src";
import * as characters from "../fixtures/characters";

export default function CollapsedContainer() {
  return (
    <CollapsibleCard>
      <CollapsibleCard.Header>
        <CollapsibleCard.Segment>This is the header. Click to reveal body.</CollapsibleCard.Segment>
      </CollapsibleCard.Header>
      <CollapsibleCard.Body>
        <ListBox
          isMulti
          onChange={selectedOptions => {
            console.log(selectedOptions);
          }}
        >
          {characters.antiHeroesRaw.map((item, index) => (
            <ListBox.Option key={item.label} defaultIsSelected={Boolean(index % 2)}>
              {item.label}
            </ListBox.Option>
          ))}
        </ListBox>
      </CollapsibleCard.Body>
    </CollapsibleCard>
  );
}
