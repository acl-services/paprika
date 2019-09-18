import React from "react";
import { storiesOf } from "@storybook/react";
import Uploader from "../src/Uploader";
import Testing from "./Testing";

function TestingFn({ files, isDisabled, isDragOver, isDragLeave, hasFinished, upload, removeItem }) {
  return (
    <Testing
      files={files}
      isDisabled={isDisabled}
      isDragOver={isDragOver}
      isDragLeave={isDragLeave}
      hasFinished={hasFinished}
      upload={upload}
      removeItem={removeItem}
    />
  );
}

function TestingFnForUploadOnDemand({ files, isDisabled, isDragOver, isDragLeave, hasFinished, upload, removeItem }) {
  return (
    <Testing
      files={files}
      isDisabled={isDisabled}
      isDragOver={isDragOver}
      isDragLeave={isDragLeave}
      hasFinished={hasFinished}
      upload={upload}
      hasUploadButton
      removeItem={removeItem}
    />
  );
}

storiesOf("Uploader", module)
  .add("on success", () => (
    <>
      <Uploader
        url="http://localhost:9000/upload.php"
        onChange={files => {
          console.log("onChange files:", files);
        }}
      >
        {TestingFn}
      </Uploader>
    </>
  ))
  .add("on failed", () => (
    <>
      <Uploader
        url="http://localhost:9000/upload.php?error=true"
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
        url="http://localhost:9000/upload.php"
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
        url="http://localhost:9000/upload.php"
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
        Will upload image until you select your images and then click the button with the legend{" "}
        <strong>upload images</strong>
      </p>
      <Uploader url="http://localhost:9000/upload.php" acceptableFileTypes={["image/*"]} hasAutoupload={false}>
        {TestingFnForUploadOnDemand}
      </Uploader>
    </>
  ));
