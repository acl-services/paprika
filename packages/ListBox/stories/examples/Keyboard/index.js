import React from "react";
import Blocks, { Block } from "storybook/components/Blocks";

import ListBox from "../../../src";
import CardComponent from "../../../../Card/src";

import * as characters from "../../fixtures/characters";
import Toast from "../../../../Toast/src";

const Card = ({ children }) => <CardComponent style={{ padding: "16px", width: "280px" }}>{children}</CardComponent>;
const CheckListItem = ({ children }) => (
  /* eslint-disable jsx-a11y/label-has-associated-control */
  <div style={{ padding: "8px", display: "flex", position: "relative" }}>
    <label>
      <div style={{ position: "absolute", top: "10px", left: "-20px" }}>
        <input type="checkbox" tabIndex="-1" />
      </div>
      <div>{children}</div>
    </label>
  </div>
);
/* eslint-enable jsx-a11y/label-has-associated-control */
const Up = () => (
  <span aria-label="up key" role="img">
    ↑
  </span>
);
const Down = () => (
  <span aria-label="down key" role="img">
    ↓
  </span>
);

export function SimpleStory() {
  return (
    <>
      <h2>Simple Case</h2>
      <Blocks>
        <Block>
          <h3>Single</h3>
          <Card>
            <ListBox>{characters.antiHeroes}</ListBox>
          </Card>
          <h3>Multi</h3>
          <Card>
            <ListBox isMulti>{characters.antiHeroes}</ListBox>
          </Card>
        </Block>
        <Block>
          <CheckListItem>
            when trigger has focus and pressing <Up /> or <Down /> the popover menu opens
          </CheckListItem>
          <CheckListItem>
            while the menu is open and there is not previous selection and is single selection, the component should
            wait for an interaction from the user before selecting something either clicking or <Up />
            <Down />. In case there is a previous selection in single selection the selected option will be focus.
          </CheckListItem>
          <CheckListItem>
            it should be possible to navigate with <Up /> <Down /> across all the items
          </CheckListItem>
          <CheckListItem>
            Once a value has been selected and the popover has been closed, when the user interacts again with the
            ListBox and the popover has been opened, the focus should focus on the latest selected item if has the
            single selection prop on. Meanwhile if has isMulti on should just open the ListBox.
            <br />
            <br />
          </CheckListItem>
          <CheckListItem>
            If the user reaches the top or the bottom length of the List, the focus should remain in the first or last
            item depending the cases. We are not looping the list to avoid confusion to our users.
          </CheckListItem>
        </Block>
      </Blocks>
    </>
  );
}

export function WithFilterStory() {
  return (
    <>
      <h2>Case with filters</h2>
      <Blocks>
        <Block>
          <h3>Single</h3>
          <Card>
            <ListBox>
              <ListBox.Filter />
              {characters.antiHeroes}
            </ListBox>
          </Card>
          <h3>Multi</h3>
          <Card>
            <ListBox isMulti>
              <ListBox.Filter />
              {characters.antiHeroes}
            </ListBox>
          </Card>
        </Block>
        <Block>
          <Toast hasCloseButton={false}>
            The keyboard navigation should has the same behaviour as the previous examples with few variations, since
            now includes a filter in both examples.
          </Toast>
          <CheckListItem>
            When there is not an item selected and ListBox hasFilter prop on, it should focus automatically on the
            filter input after the popover opened, this applies to both case isMulti and single selection
          </CheckListItem>
          <CheckListItem>
            Once the <strong>Single option ListBox</strong> has at least one selected option, it should focus on it even
            if the filter exists.
          </CheckListItem>
          <CheckListItem>
            If the user filtered the options, the keyboard navigation should not change. It should keep behaving
            smoothly and transparent to the user
          </CheckListItem>
          <CheckListItem>
            If the user is located at the first focusable list item and press <Up />, the next focusable item it should
            be the Filter input. Clicking again up should result in a NO ACTION, the focus should remain on the input.
          </CheckListItem>
        </Block>
      </Blocks>
    </>
  );
}

export function WithDividers() {
  return (
    <>
      <h2>With Dividers</h2>
      <Blocks>
        <Block>
          <h3>Single</h3>
          <Card>
            <ListBox>
              <ListBox.Filter />
              <ListBox.Divider>Anti-heroes</ListBox.Divider>
              {characters.antiHeroes}
              <ListBox.Divider>Heroes</ListBox.Divider>
              {characters.heroes}
              <ListBox.Divider>Villians</ListBox.Divider>
              {characters.villians}
            </ListBox>
          </Card>
          <h3>Multi</h3>
          <Card>
            <ListBox isMulti>
              <ListBox.Filter />
              <ListBox.Divider>Anti-heroes</ListBox.Divider>
              {characters.antiHeroes}
              <ListBox.Divider>Heroes</ListBox.Divider>
              {characters.heroes}
              <ListBox.Divider>Villians</ListBox.Divider>
              {characters.villians}
            </ListBox>
          </Card>
        </Block>
        <Block>
          <CheckListItem>
            Divider Item should be ignore while pressing the <Up /> and <Down /> keys.
          </CheckListItem>
        </Block>
      </Blocks>
    </>
  );
}

export function WithDisabled() {
  return (
    <>
      <h2>With Disabled Items</h2>
      <Blocks>
        <Block>
          <h3>Single</h3>

          <Card>
            <ListBox>
              <ListBox.Filter />
              <ListBox.Divider>Anti-heroes</ListBox.Divider>
              {characters.antiHeroes}
              <ListBox.Divider>Heroes</ListBox.Divider>
              <ListBox.Option isDisabled>Achilles</ListBox.Option>
              <ListBox.Option isDisabled>Odysseus</ListBox.Option>
              {characters.heroes}
              <ListBox.Divider>Villians</ListBox.Divider>
              {characters.villians}
            </ListBox>
          </Card>
          <h3>Multi</h3>

          <Card>
            <ListBox isMulti>
              <ListBox.Filter />
              <ListBox.Divider>Anti-heroes</ListBox.Divider>
              {characters.antiHeroes}
              <ListBox.Divider>Heroes</ListBox.Divider>
              <ListBox.Option isDisabled>Achilles</ListBox.Option>
              <ListBox.Option isDisabled>Odysseus</ListBox.Option>
              {characters.heroes}
              <ListBox.Divider>Villians</ListBox.Divider>
              {characters.villians}
            </ListBox>
          </Card>
        </Block>
        <Block>
          <CheckListItem>
            The user is allowed to navigate over disabled elements but can not selected them or interact with them. This
            might required further discussion of what we really want to do.
          </CheckListItem>
        </Block>
      </Blocks>
    </>
  );
}

export function WithRawItems() {
  return (
    <>
      <h2>With Option.RawItem</h2>
      <Blocks>
        <Block>
          <h3>Single</h3>

          <Card>
            <ListBox>
              <ListBox.Filter />
              <ListBox.Divider>Raw-Items</ListBox.Divider>
              <ListBox.RawItem
                onClick={() => {
                  console.log("RawItem clicked");
                }}
              >
                Achilles
              </ListBox.RawItem>
              <ListBox.RawItem
                onClick={() => {
                  console.log("RawItem clicked");
                }}
              >
                Odysseus
              </ListBox.RawItem>
              <ListBox.Divider>Anti-heroes</ListBox.Divider>
              {characters.antiHeroes}
              <ListBox.Divider>Heroes</ListBox.Divider>
              {characters.heroes}
              <ListBox.Divider>Villians</ListBox.Divider>
              {characters.villians}
            </ListBox>
          </Card>
          <h3>Multi</h3>

          <Card>
            <ListBox isMulti>
              <ListBox.Filter />
              <ListBox.Divider>Raw-Items</ListBox.Divider>
              <ListBox.RawItem
                onClick={() => {
                  console.log("RawItem clicked");
                }}
              >
                Achilles
              </ListBox.RawItem>
              <ListBox.RawItem
                onClick={() => {
                  console.log("RawItem clicked");
                }}
              >
                Odysseus
              </ListBox.RawItem>
              <ListBox.Divider>Anti-heroes</ListBox.Divider>
              {characters.antiHeroes}
              <ListBox.Divider>Heroes</ListBox.Divider>
              {characters.heroes}
              <ListBox.Divider>Villians</ListBox.Divider>
              {characters.villians}
            </ListBox>
          </Card>
        </Block>
        <Block>
          <CheckListItem>
            The user is allowed to navigate over RawItem elements but can not select them or interact with them. This
            might required further discussion of what we really want to do.
          </CheckListItem>
        </Block>
      </Blocks>
    </>
  );
}

export function WithInline() {
  return (
    <>
      <h2>With Inline stories</h2>
      <Blocks>
        <Block>
          <h3>Single</h3>

          <Card>
            <ListBox isInline>
              <ListBox.Divider>Anti-heroes</ListBox.Divider>
              {characters.antiHeroes}
              <ListBox.Divider>Heroes</ListBox.Divider>
              {characters.heroes}
              <ListBox.Divider>Villians</ListBox.Divider>
              {characters.villians}
            </ListBox>
          </Card>

          <h3>Multi</h3>
          <Card>
            <ListBox isMulti isInline>
              <ListBox.Divider>Anti-heroes</ListBox.Divider>
              {characters.antiHeroes}
              <ListBox.Divider>Heroes</ListBox.Divider>
              {characters.heroes}
              <ListBox.Divider>Villians</ListBox.Divider>
              {characters.villians}
            </ListBox>
          </Card>
        </Block>
        <Block>
          <CheckListItem>
            When the ListBox is on inline state, the keyboard navigation should behave exactly to any of the previous
            examples
          </CheckListItem>
        </Block>
      </Blocks>
    </>
  );
}
