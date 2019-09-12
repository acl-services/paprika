import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Uploader from "../src/Uploader";

storiesOf("Uploader", module)
  .addDecorator(withKnobs)
  .add("Showcase", () => (
    <Uploader
      url="http://localhost:9000/upload.php"
      onChange={files => {
        console.log("onChange files:", files);
      }}
    />
  ));
