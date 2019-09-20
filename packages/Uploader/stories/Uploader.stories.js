import React from "react";
import { storiesOf } from "@storybook/react";
import Uploader from "../src/Uploader";
import Testing from "./Testing";

function TestingFn({
  FileInput,
  files,
  isDisabled,
  isDragOver,
  isDragLeave,
  hasFinished,
  upload,
  removeFile,
  cancelFile,
}) {
  return (
    <Testing
      files={files}
      isDisabled={isDisabled}
      isDragOver={isDragOver}
      isDragLeave={isDragLeave}
      hasFinished={hasFinished}
      upload={upload}
      FileInput={FileInput}
      removeFile={removeFile}
      cancelFile={cancelFile}
    />
  );
}

function TestingFnForUploadOnDemand({
  FileInput,
  files,
  isDisabled,
  isDragOver,
  isDragLeave,
  hasFinished,
  upload,
  removeFile,
  cancelFile,
}) {
  return (
    <Testing
      files={files}
      isDisabled={isDisabled}
      isDragOver={isDragOver}
      isDragLeave={isDragLeave}
      hasFinished={hasFinished}
      upload={upload}
      removeFile={removeFile}
      cancelFile={cancelFile}
      FileInput={FileInput}
      hasUploadButton
    />
  );
}

function TestingFnWithoutFileInput({ files, hasFinished }) {
  return (
    <>
      {!hasFinished ? <span>{files.length ? "⏰ wait a moment!" : "🧘‍♀️🧘‍♀️🧘‍♀️🧘‍♀️"}</span> : null}

      <span>{hasFinished ? "💯✅" : ""}</span>
      <ul>
        {files.map(file => (
          <li>{file.filename}</li>
        ))}
      </ul>
    </>
  );
}

storiesOf("Uploader", module)
  .add("Basic example with all files successfully uploaded", () => (
    <>
      <Uploader
        endpoint="http://localhost:9000/upload.php"
        onChange={files => {
          console.log("onChange files:", files);
        }}
      >
        {TestingFn}
      </Uploader>
    </>
  ))
  .add("Basic example with all files failing at upload", () => (
    <>
      <Uploader
        endpoint="http://localhost:9000/upload.php?error=true"
        onChange={files => {
          console.log("onChange files:", files);
        }}
      >
        {TestingFn}
      </Uploader>
    </>
  ))
  .add("on invalid file type", () => (
    <>
      <Uploader
        endpoint="http://localhost:9000/upload.php"
        acceptableFileTypes={["image/*"]}
        onChange={files => {
          console.log("onChange files:", files);
        }}
      >
        {TestingFn}
      </Uploader>
    </>
  ))
  .add("Imposing a maxium filesize", () => (
    <>
      <p>
        Will only allow images under 1 <strong>mebibyte</strong> (close to 1 MB)
      </p>
      <Uploader
        endpoint="http://localhost:9000/upload.php"
        acceptableFileTypes={["image/*"]}
        maximumFileSize={Uploader.convertUnitsToMebibytes(1)}
        onChange={files => {
          console.log("onChange files:", files);
        }}
      >
        {TestingFn}
      </Uploader>
    </>
  ))
  .add("Upload on demand", () => (
    <>
      <p>
        Will upload image until you select your images and then click the button with the legend
        <strong>upload images</strong>
      </p>
      <Uploader endpoint="http://localhost:9000/upload.php" acceptableFileTypes={["image/*"]} hasAutoupload={false}>
        {TestingFnForUploadOnDemand}
      </Uploader>
    </>
  ))
  .add("Only accept files if are drop on the FileInput area", () => (
    <>
      <p>Will accept dropped files only if they are drop at the FileInput area.</p>
      <Uploader isBodyDroppableArea={false} endpoint="http://localhost:9000/upload.php">
        {TestingFn}
      </Uploader>
    </>
  ))
  .add("Allow only one file per upload", () => (
    <>
      <p>Allow only one file per upload.</p>
      <Uploader allowMultipleFile={false} endpoint="http://localhost:9000/upload.php">
        {TestingFn}
      </Uploader>
    </>
  ))
  .add("Making use of onFinished prop", () => (
    <>
      <p>
        The onFinished prop callback is fired once all files have been processed which dont neccessaril means that all
        files were successuflly uploaded. The callback received as parameter the file list of all files processed with
        their last status, you easily could map over the list and figured out if all files have file.status ===
        Uploader.types.SUCCESS and verified if all file were uploaded correctly.
      </p>
      <Uploader onFinished={files => console.log("on finished:", files)} endpoint="http://localhost:9000/upload.php">
        {TestingFn}
      </Uploader>
    </>
  ))
  .add("Using uploader without FileInput component", () => (
    <>
      <p>
        The uploader can be use without render the FileInput component provided by renderChildrenProp function. While
        this is not a common scenario, showcase that is possible to keep draggin and dropping files and still working.
      </p>
      <Uploader onFinished={files => console.log("on finished:", files)} endpoint="http://localhost:9000/upload.php">
        {TestingFnWithoutFileInput}
      </Uploader>
    </>
  ))
  .add("Adding custom headers", () => (
    <>
      <p>
        You can add custom header using the headers props, which take an array of object where use the key as the name
        of the header you want to use and the value as the header value.
      </p>
      <Uploader
        headers={[{ "API-Key": "your-api-key" }, { "X-CSRF-Token": "your-token" }]}
        onFinished={files => console.log("on finished:", files)}
        endpoint="http://localhost:9000/upload.php"
      >
        {TestingFn}
      </Uploader>
    </>
  ));
