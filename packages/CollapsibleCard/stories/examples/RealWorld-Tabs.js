import React from "react";
import Tabs from "@paprika/tabs";
import CollapsibleCard from "../../src";

export default function RealWorldTabsStory() {
  const [activetabIndex, setActivetabIndex] = React.useState(0);

  function renderCards() {
    if (activetabIndex === 0) {
      return [
        <CollapsibleCard key="card1">
          <CollapsibleCard.Header>
            <CollapsibleCard.Segment>First card on the first tab</CollapsibleCard.Segment>
          </CollapsibleCard.Header>
          <CollapsibleCard.Body>
            <div role="tabpanel" aria-labelledby="tab1">
              Put your body here1.
            </div>
          </CollapsibleCard.Body>
        </CollapsibleCard>,
        <CollapsibleCard key="card2">
          <CollapsibleCard.Header>
            <CollapsibleCard.Segment>Last card on the first tab</CollapsibleCard.Segment>
          </CollapsibleCard.Header>
          <CollapsibleCard.Body>
            <div role="tabpanel" aria-labelledby="tab1">
              Put your body here2.
            </div>
          </CollapsibleCard.Body>
        </CollapsibleCard>,
      ];
    }

    if (activetabIndex === 1) {
      return [
        <CollapsibleCard key="card3">
          <CollapsibleCard.Header>
            <CollapsibleCard.Segment>Only card on the second tab</CollapsibleCard.Segment>
          </CollapsibleCard.Header>
          <CollapsibleCard.Body>
            <div role="tabpanel" aria-labelledby="tab2">
              Put your body here3.
            </div>
          </CollapsibleCard.Body>
        </CollapsibleCard>,
      ];
    }

    return [
      <CollapsibleCard key="card4">
        <CollapsibleCard.Header>
          <CollapsibleCard.Segment>Only card on the third tab</CollapsibleCard.Segment>
        </CollapsibleCard.Header>
        <CollapsibleCard.Body>
          <div role="tabpanel" aria-labelledby="tab3">
            Put your body here4.
          </div>
        </CollapsibleCard.Body>
      </CollapsibleCard>,
    ];
  }

  return (
    <CollapsibleCard.Group>
      <CollapsibleCard.Group.Header>
        <Tabs
          defaultIndex={activetabIndex}
          size={Tabs.types.size.LARGE}
          onClickTab={index => {
            setActivetabIndex(index);
          }}
        >
          <Tabs.List>
            <Tabs.Tab id="tab1">First Tab</Tabs.Tab>
            <Tabs.Tab id="tab2">Second Tab</Tabs.Tab>
            <Tabs.Tab id="tab3">Third Tab</Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </CollapsibleCard.Group.Header>
      {renderCards()}
    </CollapsibleCard.Group>
  );
}
