import React from "react";
import Blocks, { Block } from "storybook/components/Blocks";

import ListBox from "../../../src";
import CardComponent from "../../../../Card/src";

const Card = ({ children }) => <CardComponent style={{ padding: "16px", width: "280px" }}>{children}</CardComponent>;

const sizeItemCount = 500;
const data = {};
for (let i = 0, len = sizeItemCount; i < len; i++) {
  data[i] = { id: `list_box_virtualize_${i}`, label: i };
}

export function VirtualizeStory() {
  const [selectedMultiple, setSelectedMultiple] = React.useState(new Set([data[1], data[3], data[6]]));
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
                isOptionSelected={index => {
                  return selectedSingle.has(data[index]);
                }}
                onClickClear={() => {
                  setSelectedSingle(new Set());
                }}
                onSelectedOptions={() => {
                  return Array.from(selectedSingle);
                }}
                onRenderLabel={() => {
                  return `label ${selectedSingle.values().next().value.id}`;
                }}
                onRenderOption={props => {
                  if ([0, 5].includes(props.index)) {
                    return (
                      <ListBox.Divider key={props.index} {...props}>
                        Hi
                      </ListBox.Divider>
                    );
                  }
                  return (
                    <ListBox.Option {...props} label={`${props.index}`}>
                      {props.index}
                    </ListBox.Option>
                  );
                }}
                itemCount={sizeItemCount}
              />
            </ListBox>
          </Card>
          <h3>Multi</h3>
          <Card>
            <ListBox
              isMulti
              onChange={(...args) => {
                setSelectedMultiple(prevSet => {
                  const [, , index] = args;
                  const nextSet = new Set(prevSet);
                  if (nextSet.has(data[index])) {
                    nextSet.delete(data[index]);
                    return nextSet;
                  }

                  nextSet.add(data[index]);
                  return nextSet;
                });
              }}
            >
              <ListBox.Virtualize
                isOptionSelected={index => {
                  return selectedMultiple.has(data[index]);
                }}
                onClickClear={() => {
                  setSelectedMultiple(new Set());
                }}
                onSelectedOptions={() => {
                  return Array.from(selectedMultiple);
                }}
                onRenderLabel={option => {
                  return `${option.label}`;
                }}
                onRenderOption={props => {
                  if ([0, 5].includes(props.index)) {
                    return (
                      <ListBox.Divider key={props.index} {...props}>
                        Hi
                      </ListBox.Divider>
                    );
                  }
                  return (
                    <ListBox.Option {...props} label={`${props.index}`}>
                      {props.index}
                    </ListBox.Option>
                  );
                }}
                itemCount={sizeItemCount}
              />
            </ListBox>
          </Card>
        </Block>
        <Block>Virtualize example</Block>
      </Blocks>
      <Blocks>
        <Block>
          <h3>SingleWithFilter</h3>
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
              <ListBox.Filter />
              <ListBox.Virtualize
                isOptionSelected={index => {
                  return selectedSingle.has(data[index]);
                }}
                onClickClear={() => {
                  setSelectedSingle(new Set());
                }}
                onSelectedOptions={() => {
                  return Array.from(selectedSingle);
                }}
                onRenderLabel={() => {
                  return `label ${selectedSingle.values().next().value.id}`;
                }}
                onRenderOption={props => {
                  if ([0, 5].includes(props.index)) {
                    return (
                      <ListBox.Divider key={props.index} {...props}>
                        Hi
                      </ListBox.Divider>
                    );
                  }
                  return (
                    <ListBox.Option {...props} label={`${props.index}`}>
                      {props.index}
                    </ListBox.Option>
                  );
                }}
                itemCount={sizeItemCount}
              />
            </ListBox>
          </Card>
          <h3>MultiWithFilter</h3>
          <Card>
            <ListBox
              isMulti
              onChange={(...args) => {
                setSelectedMultiple(prevSet => {
                  const [, , index] = args;
                  const nextSet = new Set(prevSet);
                  if (nextSet.has(data[index])) {
                    nextSet.delete(data[index]);
                    return nextSet;
                  }

                  nextSet.add(data[index]);
                  return nextSet;
                });
              }}
            >
              <ListBox.Filter />
              <ListBox.Virtualize
                isOptionSelected={index => {
                  return selectedMultiple.has(data[index]);
                }}
                onClickClear={() => {
                  setSelectedMultiple(new Set());
                }}
                onSelectedOptions={() => {
                  return Array.from(selectedMultiple);
                }}
                onRenderLabel={option => {
                  return `${option.label}`;
                }}
                onRenderOption={props => {
                  if ([0, 5].includes(props.index)) {
                    return (
                      <ListBox.Divider key={props.index} {...props}>
                        Hi
                      </ListBox.Divider>
                    );
                  }
                  return (
                    <ListBox.Option {...props} label={`${props.index}`}>
                      {props.index}
                    </ListBox.Option>
                  );
                }}
                itemCount={sizeItemCount}
              />
            </ListBox>
          </Card>
        </Block>
        <Block>Virtualize example</Block>
      </Blocks>
    </>
  );
}
