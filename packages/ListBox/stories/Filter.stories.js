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
