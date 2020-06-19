import React from "react";
import { storiesOf } from "@storybook/react";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import Heading from "@paprika/heading";
import L10n from "@paprika/l10n";
import Uploader, { UploaderContext } from "../src/Uploader";
import File from "../src/components/File/File";
import statuses from "../src/statuses";

const storyName = getStoryName("Uploader");

const props = {
  endpoint: "http://localhost:9000/upload.php",
  onChange: files => {
    console.log("Selected files:", files);
  },
};

const fileProps = {
  error: null,
  name: "MyFile.jpg",
  progress: 0,
  size: 12345678,
  status: statuses.IDLE,
};

function StartUploadButton() {
  const uc = React.useContext(UploaderContext);
  return (
    <button type="button" onClick={uc.upload}>
      Start upload
    </button>
  );
}

storiesOf(storyName, module).add("Showcase", () => (
  <Story>
    <L10n locale="en">
      <Heading level={1} displayLevel={2} isLight>
        <code>&lt;Uploader /&gt;</code>
      </Heading>
      <Tagline>
        <b>Showcase</b> – Interact with the props API
      </Tagline>
      <Rule />
      <Uploader {...props}>
        <Uploader.DropZone />
        <Uploader.FileList />
      </Uploader>
    </L10n>
  </Story>
));

storiesOf(`${storyName}/Examples`, module)
  .add("Failed upload error", () => (
    <Story>
      <Uploader {...props} endpoint="http://localhost:9000/upload.php?error=true">
        <Uploader.DropZone />
        <Uploader.FileList />
      </Uploader>
    </Story>
  ))
  .add("Invalid mime type error", () => (
    <Story>
      <Uploader {...props} supportedMimeTypes={["audio/wav", "audio/ogg"]}>
        <Uploader.DropZone />
        <Uploader.FileList />
      </Uploader>
    </Story>
  ))
  .add("File too big error", () => (
    <Story>
      <Uploader {...props} maxFileSize={1}>
        <Uploader.DropZone />
        <Uploader.FileList />
      </Uploader>
    </Story>
  ))
  .add("No auto-upload", () => (
    <Story>
      <Uploader {...props} hasAutoUpload={false}>
        <Uploader.DropZone />
        <Uploader.FileList />
        <StartUploadButton />
      </Uploader>
    </Story>
  ))
  .add("Only accept files dropped on the DropZone", () => (
    <Story>
      <Uploader {...props} isBodyDroppable={false}>
        <Uploader.DropZone />
        <Uploader.FileList />
      </Uploader>
    </Story>
  ))
  .add("Allow only one file per upload", () => (
    <Story>
      <Uploader {...props} canChooseMultiple={false}>
        <Uploader.DropZone />
        <Uploader.FileList />
      </Uploader>
    </Story>
  ))
  .add("Firing onCompleted prop", () => (
    <Story>
      <p>
        The onCompleted callback is fired once all files have been processed (but it does not neccessarily mean that all
        files were _successuflly_ uploaded). The callback receives an array of all of the files processed with their
        last status. You could then loop over the list to see if all files have the status
        <code>Uploader.status.SUCCESS</code> (which would mean all were uploaded correctly).
      </p>
      <Uploader {...props} onCompleted={files => console.log("on finished:", files)}>
        <Uploader.DropZone />
        <Uploader.FileList />
      </Uploader>
    </Story>
  ))
  .add("Adding custom headers", () => (
    <Story>
      <p>
        You can add custom header using the headers props, which take an array of object where use the key as the name
        of the header you want to use and the value as the header value.
      </p>
      <Uploader
        headers={[{ "API-Key": "your-api-key" }, { "X-CSRF-Token": "your-token" }]}
        onCompleted={files => console.log("on completed:", files)}
        endpoint="http://localhost:9000/upload.php"
      >
        <Uploader.DropZone />
        <Uploader.FileList />
      </Uploader>
    </Story>
  ))
  .add("File statuses", () => (
    <Story>
      <Uploader>
        <File {...fileProps} />
        <File {...fileProps} progress={37} status={statuses.PROCESSING} />
        <File {...fileProps} progress={100} status={statuses.SUCCESS} />
        <File {...fileProps} progress={37} error="Something went wrong" status={statuses.ERROR} />
      </Uploader>
    </Story>
  ));
