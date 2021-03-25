import React from "react";
import Blocks, { Block } from "storybook/components/Blocks";

import ListBox from "../../../src";
import CardComponent from "../../../../Card/src";

import * as characters from "../../fixtures/characters";
import List from "../../../src/components/List";

const Card = ({ children }) => <CardComponent style={{ padding: "16px", width: "280px" }}>{children}</CardComponent>;

const sizeItemCount = 500;
const data = {};
for (let i = 0, len = sizeItemCount; i < len; i++) {
  data[i] = { id: `list_box_virtualize_${i}`, label: i };
}

export function VirtualizeStory() {
  const [selected, setSelected] = React.useState(new Set([data[1], data[3], data[6]]));
  const [selectedSingle, setSelectedSingle] = React.useState(new Set([data[2]]));

  return (
    <>
      <h2>Simple Case</h2>
      <Blocks>
        <Block>
          <h3>Single</h3>
          <Card>
            <ListBox
              onChange={index => {
                setSelectedSingle(() => {
                  const nextSet = new Set();
                  nextSet.add(data[index]);
                  return nextSet;
                });
              }}
            >
              <ListBox.Virtualize
                onClickClear={() => {
                  setSelectedSingle(new Set());
                }}
                isOptionSelected={index => {
                  return selectedSingle.has(data[index]);
                }}
                onSelectedOptions={() => {
                  return Array.from(selectedSingle);
                }}
                onRenderLabel={() => {
                  return `label ${selectedSingle.values().next().value.id}`;
                }}
                itemCount={sizeItemCount}
                onRenderOption={props => {
                  if ([0, 15].includes(props.index)) {
                    return <ListBox.Divider>Hi</ListBox.Divider>;
                  }
                  return (
                    <ListBox.Option {...props} label={`${props.index}`}>
                      {props.index}
                    </ListBox.Option>
                  );
                }}
              />
            </ListBox>
          </Card>
          <h3>Multi</h3>
          <Card>
            <ListBox isMulti>
              <ListBox.Virtualize
                isOptionSelected={index => {
                  return selected.has(index);
                }}
                onSelectedOptions={() => {
                  return Array.from(selected);
                }}
                onRenderLabel={index => {
                  return `label ${index}`;
                }}
                itemCount={sizeItemCount}
                onRenderOption={props => {
                  return (
                    <ListBox.Option id={data[props.index]} {...props} label={`${props.index}`}>
                      {props.index}
                    </ListBox.Option>
                  );
                }}
              />
            </ListBox>
          </Card>
        </Block>
        <Block>Virtualize example</Block>
      </Blocks>
    </>
  );
}
