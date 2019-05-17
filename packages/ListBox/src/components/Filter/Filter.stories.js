import React from "react";
import { storiesOf } from "@storybook/react";
import ListBox from "../..";
import { ImageOption } from "../../../stories/stories.styles";
import { images } from "../../../stories/fixtures/images";

const options = ["Punisher", "Catwoman", "Venom", "Thunderbolts", "Deadpool", "Spawn", "Wolverine"];

storiesOf("ListBox / With Filter", module).add("Basic", () => (
  <ListBox>
    <ListBox.Filter />
    {options.map(option => (
      <ListBox.Option>{option}</ListBox.Option>
    ))}
  </ListBox>
));

storiesOf("ListBox / With Filter", module).add("Inline", () => (
  <ListBox isInline>
    <ListBox.Filter />
    {options.map(option => (
      <ListBox.Option>{option}</ListBox.Option>
    ))}
  </ListBox>
));

storiesOf("ListBox / With Filter", module).add("Custom Children", () => (
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
));

storiesOf("ListBox / With Filter", module).add("Multi Custom Children", () => (
  <ListBox isMulti>
    <ListBox.Filter />
    {options.map(option => (
      <ListBox.Option>{option}</ListBox.Option>
    ))}
  </ListBox>
));

storiesOf("ListBox / With Filter", module).add("Multi Custom Children", () => (
  <ListBox isMulti height={325}>
    {images.map(image => (
      <ListBox.Option key={image.src} label={image.label}>
        <ImageOption>
          <img alt={image.label} src={image.src} />
        </ImageOption>
      </ListBox.Option>
    ))}
  </ListBox>
));

storiesOf("ListBox / With Filter", module).add("Multi Inline Custom Children", () => (
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
