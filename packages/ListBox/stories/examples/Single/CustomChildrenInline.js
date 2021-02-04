import React from "react";
import { ImageOption } from "../../stories.styles";
import { images } from "../../fixtures/images";
import ListBox from "../../../src";

export const CustomChildrenInline = () => (
  <ListBox height={320} isInline>
    {images.map(image => (
      <ListBox.Option key={image.src} label={image.label}>
        <ImageOption>
          <img alt={image.label} src={image.src} />
        </ImageOption>
      </ListBox.Option>
    ))}
  </ListBox>
);
