import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Button from "@paprika/button";
import Sortable from "@paprika/sortable";
import Panel from "../../src";

export default function WithSortable() {
  const refHeading = React.useRef(null);
  const [isOpen, setOpen] = React.useState(false);

  const initChildren = [
    <Sortable.Item sortId="1" key={1} className="my-custom-sortable-item-classname" data-qa-id="my-custom-data-qa-id">
      Item One
    </Sortable.Item>,
    <Sortable.Item sortId="2" key={2}>
      Item Two
    </Sortable.Item>,
    <Sortable.Item sortId="3" key={3}>
      Item Three
    </Sortable.Item>,
  ];
  const [children, setChildren] = React.useState(initChildren);

  const handleChange = result => {
    console.log("sortable change");

    const { source, destination } = result;

    if (destination === null || source === destination) return;

    const reorderedChildren = [...children];
    const movedChild = reorderedChildren.splice(source, 1);
    reorderedChildren.splice(destination, 0, ...movedChild);

    setChildren(reorderedChildren);
  };

  return (
    <Story>
      <Button
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        {isOpen ? "Close" : "Open"} Panel
      </Button>
      <Panel
        isOpen={isOpen}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Panel.Header refHeading={refHeading}>Header</Panel.Header>
        <Panel.Content>
          <Sortable onChange={handleChange} onRemove={() => {}} className="my-custom-sortable-classname">
            {children}
          </Sortable>
        </Panel.Content>
      </Panel>
    </Story>
  );
}
