import React from "react";
import Blocks, { Block } from "storybook/components/Blocks";

import ListBox from "../../../src";
import CardComponent from "../../../../Card/src";

import * as characters from "../../fixtures/characters";

const Card = ({ children }) => <CardComponent style={{ padding: "16px", width: "280px" }}>{children}</CardComponent>;

const Up = () => (
  <span aria-label="up key" role="img">
    ↑
  </span>
);
const Down = () => (
  <span aria-label="up key" role="img">
    ↓
  </span>
);

export function SingleStory() {
  return (
    <Blocks>
      <Block>
        <Card>
          <ListBox>{characters.antiHeroes}</ListBox>
        </Card>
      </Block>
      <Block>
        Simple story, the ListBox it should received focus on tab open using Enter, Space, <Up /> or <Down />{" "}
      </Block>
    </Blocks>
  );
}

export function MultiStory() {
  return (
    <Blocks>
      <Block>
        <Card>
          <ListBox isMulti>{characters.antiHeroes}</ListBox>
        </Card>
      </Block>
      <Block>
        Simple story, the ListBox it should received focus on tab open using Enter, Space, <Up /> or <Down />{" "}
      </Block>
    </Blocks>
  );
}
