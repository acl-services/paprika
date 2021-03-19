import React from "react";
import Blocks, { Block } from "storybook/components/Blocks";

import ListBox from "../../../src";
import CardComponent from "../../../../Card/src";
// import Toast from "../../../../Toast/src";

import * as characters from "../../fixtures/characters";
import List from "../../../src/components/List";

const Card = ({ children }) => <CardComponent style={{ padding: "16px", width: "280px" }}>{children}</CardComponent>;

export function InfiniteScrollStory() {
  function handleReachedOffset() {
    console.log("onReachedOffset");
  }

  const options = Array(1500)
    .fill(null)
    .map((_, index) => {
      return index;
    });

  return (
    <>
      <h2>Infinite Scroll</h2>
      <Blocks>
        <Block>
          <h3>Single</h3>
          <Card>
            <ListBox>
              <ListBox.InfiniteScroll optionsOffset={5} onReachedOffset={handleReachedOffset} />
              {options.map((option, index) => {
                return (
                  <ListBox.Option>
                    {index}.- {option}
                  </ListBox.Option>
                );
              })}
            </ListBox>
          </Card>
          <h3>Multi</h3>
          <Card>
            <ListBox isMulti>
              <ListBox.InfiniteScroll optionsOffset={5} onReachedOffset={handleReachedOffset} />
              {options.map((option, index) => {
                return (
                  <ListBox.Option>
                    {index}.- {option}
                  </ListBox.Option>
                );
              })}
            </ListBox>
          </Card>
        </Block>
        <Block>It should load item on demand</Block>
      </Blocks>
    </>
  );
}
