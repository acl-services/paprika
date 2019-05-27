import React from "react";
import { storiesOf } from "@storybook/react";
import ListBox from "../src";
import { ImageOption } from "./stories.styles";
import { images } from "./fixtures/images";

const options = ["Punisher", "Catwoman", "Venom", "Thunderbolts", "Deadpool", "Spawn", "Wolverine"];

function renderOptions() {
  return options.map(option => <ListBox.Option key={option}>{option}</ListBox.Option>);
}

storiesOf("ListBox / ListBox.Filter", module).add("Basic Filter", () => (
  <ListBox>
    <ListBox.Filter key="filter" />
    {renderOptions()}
  </ListBox>
));

storiesOf("ListBox / ListBox.Filter", module).add("Inline Filter", () => (
  <ListBox isInline>
    <ListBox.Filter key="filter" />
    {renderOptions()}
  </ListBox>
));

storiesOf("ListBox / ListBox.Filter", module).add("Custom Children Filter", () => (
  <ListBox height={325}>
    <ListBox.Filter key="filter" />
    {images.map(image => (
      <ListBox.Option key={image.src} label={image.label}>
        <ImageOption>
          <img alt={image.label} src={image.src} />
        </ImageOption>
      </ListBox.Option>
    ))}
  </ListBox>
));

storiesOf("ListBox / ListBox.Filter", module).add("Multi Custom Children Filter", () => (
  <ListBox isMulti height={325}>
    <ListBox.Filter key="filter" />
    {renderOptions()}
  </ListBox>
));

storiesOf("ListBox / ListBox.Filter", module).add("Multi Inline Custom Children Filter", () => (
  <ListBox isMulti isInline height={325}>
    <ListBox.Filter key="filter" />
    {images.map(image => (
      <ListBox.Option key={image.src} label={image.label}>
        <ImageOption>
          <img alt={image.label} src={image.src} />
        </ImageOption>
      </ListBox.Option>
    ))}
  </ListBox>
));
