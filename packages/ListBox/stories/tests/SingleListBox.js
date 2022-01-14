import React from "react";
import ListBox from "../../src";
import * as characters from "../fixtures/characters";
import { imagesForTest } from "../fixtures/images";
import { ImageOption } from "../stories.styles";

const options = ["Punisher", "Catwoman", "Venom", "Thunderbolts", "Deadpool", "Spawn", "Wolverine"];

function renderOptions() {
  return options.map(option => <ListBox.Option key={option}>{option}</ListBox.Option>);
}

export const WithContainerScroll = () => (
  <>
    <p style={{ height: 400 }} />
    <ListBox getScrollContainer={() => document.querySelector("#root > div")}>{characters.heroes}</ListBox>
    <p style={{ height: 1000 }} />
  </>
);

export const CustomFilter = () => (
  <>
    <p style={{ padding: "10px" }}>
      Type <strong>O</strong> or <strong>P</strong> to filter specific options. P will filter indexes [1,4] and O will
      do the same with [0, 3]
    </p>
    <ListBox>
      <ListBox.Filter
        filter={({ search }) =>
          new Promise(resolve => {
            if (search.toUpperCase() === "P") {
              resolve([1, 4]);
              return;
            }

            if (search.toUpperCase() === "O") {
              resolve([0, 3]);
              return;
            }

            resolve([]);
          })
        }
      />
      {renderOptions()}
    </ListBox>
  </>
);

export const SingleListBox = () => (
  <ListBox>
    <ListBox.Filter />
    <ListBox.Popover zIndex={10000}>Anti-Heroes</ListBox.Popover>
    {characters.villians}
    {characters.antiHeroes}
    {characters.heroes}
    {imagesForTest.map(image => (
      <ListBox.Option key={image.src} label={image.label}>
        <ImageOption>
          <img alt={image.label} src={image.src} />
        </ImageOption>
      </ListBox.Option>
    ))}
  </ListBox>
);
