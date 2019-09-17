import React from "react";
import { storiesOf } from "@storybook/react";
import Uploader from "../src/Uploader";
import Testing from "./Testing";

function TestingFn({ files, isDisabled, isDragOver, isDragLeave, hasSucceeded }) {
  console.log("hasSucceeded >>>>>>>>>>>>", hasSucceeded);
  return (
    <Testing
      files={files}
      isDisabled={isDisabled}
      isDragOver={isDragOver}
      isDragLeave={isDragLeave}
      hasSucceeded={hasSucceeded}
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
  ));
