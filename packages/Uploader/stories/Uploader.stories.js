import React from "react";
import { storiesOf } from "@storybook/react";
import { Story, Rule, Tagline } from "storybook/assets/styles/common.styles";
import { getStoryName } from "storybook/storyTree";
import Heading from "@paprika/heading";
import L10n from "@paprika/l10n";
import Uploader, { UploaderContext } from "../src/Uploader";
import File from "../src/components/File/File";
import * as types from "../src/types";

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
  status: types.status.IDLE,
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
  .add("Failed upload error using onError", () => (
    <Story>
      <Uploader
        {...props}
        onError={error => `Oh dear... the server returned this error: ${error}`}
        endpoint="http://localhost:9000/upload.php?error=true"
      >
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
        <File {...fileProps} progress={37} status={types.status.PROCESSING} />
        <File {...fileProps} progress={100} status={types.status.SUCCESS} />
        <File {...fileProps} progress={25} status={types.status.CANCEL} />
        <File {...fileProps} progress={37} error="Something went wrong" status={types.status.ERROR} />
      </Uploader>
    </Story>
  ))
  .add("onCompleted prop", () => (
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
  .add("onRequest callback", () => (
      <Story>
        <p>Override how files are uploaded.</p>
        <Uploader
          onCompleted={files => console.log("on finished:", files)}
          endpoint="http://localhost:9000/upload.php"
          onChange={files => {
            console.log("Selected files:", files);
          }}
          onRequest={({ file, onProgress, onEnd, formData }) => {
            file.request
              .send(formData)
              .on("progress", onProgress)
              .end(onEnd);

            /**
             * With this approach you could use you own process to upload
             * each file read superagent API for more info
             */

            // file.request
            //   .get("https://api.example.com:4001/")
            //   .auth('you_token', { type: 'bearer' })
            //   .withCredentials()
            //   .on("progress", onProgress)
            //   .end(onEnd);
          }}
        >
          <Uploader.DropZone />
          <Uploader.FileList />
        </Uploader>
      </Story>
    ))
  .add("onCancel prop callback", () => (
      <Story>
        <p>Check the console to see what is returned when you cancel an upload.</p>
        <Uploader
          onCompleted={files => console.log("on finished:", files)}
          endpoint="http://localhost:9000/upload.php"
          onCancel={file => {
            console.log("onCancel:", file);
          }}
        >
          <Uploader.DropZone />
          <Uploader.FileList />
        </Uploader>
      </Story>
    ))
  .add("extended input props", () => (
      <Story>
        <p>Check the inspector to see the attributes on the input element</p>
        <Uploader endpoint="http://localhost:9000/upload.php">
          <Uploader.DropZone />
          <Uploader.FileList />
          <Uploader.Input name="entry-file" className="MyClassName" data-qa-anchor="my-qa-anchor" />
        </Uploader>
      </Story>
    ));
