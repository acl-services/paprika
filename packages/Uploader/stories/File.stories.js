import React from "react";
import { storiesOf } from "@storybook/react";
import { Story } from "storybook/assets/styles/common.styles";
import File from "../src/components/File/File";
import Uploader from "../src/Uploader";
import statuses from "../src/statuses";

const props = {
  error: null,
  name: "MyFile.jpg",
  progress: 0,
  size: 12345678,
  status: statuses.IDLE,
};

storiesOf("Uploader/Subcomponents", module).add("File", () => (
  <Story>
    <Uploader>
      <File {...props} />
      <File {...props} progress={37} status={statuses.PROCESSING} />
      <File {...props} progress={100} status={statuses.SUCCESS} />
      <File {...props} progress={37} error="Something went wrong" status={statuses.ERROR} />
    </Uploader>
  </Story>
));
