import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, number } from "@storybook/addon-knobs";
import { Story } from "storybook/assets/styles/common.styles";
import Uploader, { UploaderContext } from "../src/Uploader";

const defaultProps = {
  a11yText: "",
  canChooseMultiple: true,
  defaultIsDisabled: false,
  endpoint: "http://localhost:9000/upload.php", // could also use webhook.site as the endpoint (enable CORS in it)
  hasAutoUpload: true,
  headers: [{ "API-Key": "your-api-key" }, { "X-CSRF-Token": "your-token" }],
  isBodyDroppable: false,
  maxFileSize: Uploader.convertUnitsToMebibytes(10),
  okFileTypes: ["image/png", "image/jpeg"],
  onChange: files => {
    console.log("onChange files", files);
  },
  onCompleted: files => {
    console.log("onCompleted!");
    files.map(file => console.log(file, `${file.name}: ${file.status}`));
  },
};

function ManualUploadButton() {
  const uc = React.useContext(UploaderContext);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          uc.upload();
        }}
      >
        Upload now
      </button>
    </div>
  );
}

storiesOf("Uploader", module)
  .addDecorator(withKnobs)
  .add("Showcase", () => {
    return (
      <Story>
        <Uploader
          {...defaultProps}
          canChooseMultiple={boolean("canChooseMultiple", defaultProps.canChooseMultiple)}
          hasAutoUpload={boolean("hasAutoUpload", defaultProps.hasAutoUpload)}
          isBodyDroppable={boolean("isBodyDroppable", defaultProps.isBodyDroppable)}
          maxFileSize={number("maxFileSize", defaultProps.maxFileSize)}
        >
          <Uploader.DefaultDropZone />
          <Uploader.FileList />
        </Uploader>
      </Story>
    );
  })
  .add("DefaultDropZone", () => {
    return (
      <Story>
        <Uploader {...defaultProps}>
          <Uploader.DefaultDropZone />
          <Uploader.FileList />
        </Uploader>
      </Story>
    );
  })
  .add("CompactDropzone", () => {
    return (
      <Story>
        <Uploader {...defaultProps}>
          <Uploader.CompactDropZone />
          <Uploader.FileList />
        </Uploader>
      </Story>
    );
  })
  .add("No auto-upload", () => {
    return (
      <Story>
        <Uploader {...defaultProps} hasAutoUpload={false}>
          <Uploader.DefaultDropZone />
          <ManualUploadButton />
          <Uploader.FileList />
        </Uploader>
      </Story>
    );
  })
  .add("Simulate failed upload", () => (
    <Story>
      <Uploader {...defaultProps} endpoint="http://localhost:9000/upload.php?error=true">
        <Uploader.DefaultDropZone />
        <Uploader.FileList />
      </Uploader>
    </Story>
  ))
  .add("Making use of onCompleted prop", () => (
    <Story>
      <p>
        The onCompleted prop callback is fired once all files have been processed. It does not mean that all files where
        uploaded successfully. The callback receives the list of files, including their last status.
      </p>
      <Uploader
        onCompleted={files =>
          files.forEach(file => {
            console.log(`${file.filename}: ${file.status}`);
          })
        }
        endpoint="http://localhost:9000/upload.php"
      >
        <Uploader.DefaultDropZone />
        <Uploader.FileList />
      </Uploader>
    </Story>
  ));
