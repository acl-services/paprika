import React from "react";
import { storiesOf } from "@storybook/react";
import { Story } from "storybook/assets/styles/common.styles";
import Uploader from "../src/Uploader";
import Testing from "./Testing";

storiesOf("Uploader", module)
  .add("Basic example with all files successfully uploaded", () => (
    <Story>
      <Uploader
        endpoint="http://localhost:9000/upload.php"
        onChange={files => {
          console.log("onChange files:", files);
        }}
      >
        <Testing />
      </Uploader>
    </Story>
  ))
  .add("Basic example with all files failing at upload", () => (
    <Story>
      <Uploader
        endpoint="http://localhost:9000/upload.php?error=true"
        onChange={files => {
          console.log("onChange files:", files);
        }}
      >
        <Testing />
      </Uploader>
    </Story>
  ))
  .add("on invalid file type", () => (
    <Story>
      <Uploader
        endpoint="http://localhost:9000/upload.php"
        okFileTypes={["image/*"]}
        onChange={files => {
          console.log("onChange files:", files);
        }}
      >
        <Testing />
      </Uploader>
    </Story>
  ))
  .add("Imposing a maxium filesize", () => (
    <Story>
      <p>
        Will only allow images under 1 <strong>mebibyte</strong> (close to 1 MB)
      </p>
      <Uploader
        endpoint="http://localhost:9000/upload.php"
        okFileTypes={["image/*"]}
        maxFileSize={Uploader.convertUnitsToMebibytes(1)}
        onChange={files => {
          console.log("onChange files:", files);
        }}
      >
        <Testing />
      </Uploader>
    </Story>
  ))
  .add("Upload on demand", () => (
    <Story>
      <p>
        Will upload image until you select your images and then click the button with the legend
        <strong>upload images</strong>
      </p>
      <Uploader endpoint="http://localhost:9000/upload.php" okFileTypes={["image/*"]} hasAutoUpload={false}>
        <Testing hasUploadButton />
      </Uploader>
    </Story>
  ))
  .add("Only accept files if are drop on the FileInput area", () => (
    <Story>
      <p>Will accept dropped files only if they are drop at the FileInput area.</p>
      <Uploader isBodyDroppable={false} endpoint="http://localhost:9000/upload.php">
        <Testing />
      </Uploader>
    </Story>
  ))
  .add("Allow only one file per upload", () => (
    <Story>
      <p>Allow only one file per upload.</p>
      <Uploader canChooseMultiple={false} endpoint="http://localhost:9000/upload.php">
        <Testing />
      </Uploader>
    </Story>
  ))
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
  ))
  .add("Adding custom headers", () => (
    <Story>
      <p>
        You can add custom header using the headers props, which take an array of object where use the key as the name
        of the header you want to use and the value as the header value.
      </p>
      <Uploader
        headers={[{ "API-Key": "your-api-key" }, { "X-CSRF-Token": "your-token" }]}
        onCompleted={files => console.log("on finished:", files)}
        endpoint="http://localhost:9000/upload.php"
      >
        <Testing />
      </Uploader>
    </Story>
  ));
