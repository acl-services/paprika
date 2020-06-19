import React from "react";
import { storiesOf } from "@storybook/react";
import { getStoryName } from "storybook/storyTree";
import ListBox from "../src";
import { ImageOption } from "./stories.styles";
import { images } from "./fixtures/images";

const storyName = getStoryName("ListBox");
const options = ["Punisher", "Catwoman", "Venom", "Thunderbolts", "Deadpool", "Spawn", "Wolverine"];

function renderOptions() {
  return options.map(option => <ListBox.Option key={option}>{option}</ListBox.Option>);
}

storiesOf(`${storyName}/Subcomponents/Filter`, module)
  .add("Basic Filter", () => (
    <ListBox>
      <ListBox.Filter />
      {renderOptions()}
    </ListBox>
  ))
  .add("Inline Filter", () => (
    <ListBox isInline>
      <ListBox.Filter />
      {renderOptions()}
    </ListBox>
  ))
  .add("Custom Filter", () => (
    <React.Fragment>
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
    </React.Fragment>
  ))
  .add("Custom Children Filter", () => (
    <ListBox height={325}>
      <ListBox.Filter />
      {images.map(image => (
        <ListBox.Option key={image.src} label={image.label}>
          <ImageOption>
            <img alt={image.label} src={image.src} />
          </ImageOption>
        </ListBox.Option>
      ))}
    </ListBox>
  ))
  .add("Multi Filter", () => (
    <>
      <ListBox isMulti height={325}>
        <ListBox.Filter />
        {renderOptions()}
      </ListBox>
      <p>
        This paragraph helps testing the tabbing and clear state of the filter on a onClose event happening.
        <button type="button">Im an useless button</button>
      </p>
    </>
  ))
  .add("Multi Inline Custom Children Filter", () => (
    <ListBox isMulti isInline height={325}>
      <ListBox.Filter />
      {images.map(image => (
        <ListBox.Option key={image.src} label={image.label}>
          <ImageOption>
            <img alt={image.label} src={image.src} />
          </ImageOption>
        </ListBox.Option>
      ))}
    </ListBox>
  ));
