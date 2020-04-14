import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, number, text } from "@storybook/addon-knobs";
import { Story } from "storybook/assets/styles/common.styles";
import File from "./File";

const defaultProps = {
  error: "",
  name: "myFile.csv",
  progress: 0,
  size: 100000,
};

storiesOf("Uploader | File", module)
  .addDecorator(withKnobs)
  .add("In progress", () => {
    return (
      <Story>
        <File
          {...defaultProps}
          name={text("name", "really-long-filename-really-long-filename-really-long-filename.png")}
          size={number("size", defaultProps.size)}
          progress={number("progress", 37)}
        />
      </Story>
    );
  })
  .add("Complete", () => {
    return (
      <Story>
        <File {...defaultProps} progress={100} />
      </Story>
    );
  })
  .add("Error", () => {
    return (
      <Story>
        <File {...defaultProps} name={text("name", defaultProps.name)} error={text("error", "Error occurred")} />
      </Story>
    );
  });
