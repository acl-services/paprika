import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, number } from "@storybook/addon-knobs";
import { Story } from "storybook/assets/styles/common.styles";
import Uploader, { UploaderContext, LAYOUTS } from "../src/Uploader";
import Testing from "./Testing";

// TODO: "No auto-upload" story doesnt work.

const defaultProps = {
  a11yText: "",
  canChooseMultiple: true,
  defaultIsDisabled: false,
  endpoint: "http://localhost:9000/upload.php", // could also use webhook.site as the endpoint (enable CORS in it)
  hasAutoUpload: true,
  headers: [{ "API-Key": "your-api-key" }, { "X-CSRF-Token": "your-token" }],
  isBodyDroppable: false,
  layout: LAYOUTS.DEFAULT,
  maxFileSize: Uploader.convertUnitsToMebibytes(10),
  okFileTypes: ["image/png", "image/jpeg"],
  onChange: files => {
    console.log("onChange files:", files);
  },
  onCompleted: files => {
    console.log("onCompleted files:", files);
  },
};

storiesOf("Uploader", module)
  .addDecorator(withKnobs)
  .add("JAMIE - Default Layout (and all knobs)", () => {
    return (
      <Story>
        <Uploader
          {...defaultProps}
          canChooseMultiple={boolean("canChooseMultiple", defaultProps.canChooseMultiple)}
          hasAutoUpload={boolean("hasAutoUpload", defaultProps.hasAutoUpload)}
          isBodyDroppable={boolean("isBodyDroppable", defaultProps.isBodyDroppable)}
          maxFileSize={number("maxFileSize", defaultProps.maxFileSize)}
        />
      </Story>
    );
  })
  .add("JAMIE - Compact Layout", () => {
    return (
      <Story>
        <Uploader {...defaultProps} layout={LAYOUTS.COMPACT} />
      </Story>
    );
  })
  .add("JAMIE - Custom Layout", () => {
    return (
      <Story>
        <Uploader {...defaultProps}>
          <div>
            <h3>Account photo</h3>
            <p>Upload your account photo. Only .jpg and .png files max 500KB.</p>
            <button type="button">Add file</button>
          </div>
        </Uploader>
      </Story>
    );
  })
  .add("Basic example with all files failing at upload", () => (
    <Story>
      <Uploader {...defaultProps} endpoint="http://localhost:9000/upload.php?error=true" />
    </Story>
  ))
  .add("No auto-upload", () => (
    <Story>
      <Uploader {...defaultProps} hasAutoUpload={false} />
      <button
        type="button"
        onClick={() => {
          UploaderContext.upload();
        }}
      >
        Upload now
      </button>
    </Story>
  ))
  // Move stories above this line or delete them.

  .add("Making use of onCompleted prop", () => (
    <Story>
      <p>
        The onCompleted prop callback is fired once all files have been processed which dont neccessaril means that all
        files were successuflly uploaded. The callback received as parameter the file list of all files processed with
        their last status, you easily could map over the list and figured out if all files have file.status ===
        Uploader.types.SUCCESS and verified if all file were uploaded correctly.
      </p>
      <Uploader onCompleted={files => console.log("on finished:", files)} endpoint="http://localhost:9000/upload.php">
        <Testing />
      </Uploader>
    </Story>
  ));
