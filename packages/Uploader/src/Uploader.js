/*
  TODO:
  - [x] make isDisabled work
  - [x] pass down states onDrag/onDragOver etc..
  - [x] pass down all different state for individuals files as well globally state for the uploading process
  - [] pass down function to interact with the uploader, retry file, upload file, delete file, etc
  - [x] abstract complexity for uploading into hook useProcessFiles
  - [x] filter by file extension
  - [] create testing cases for the component
  - [x] handle errors
  - [] match the file button and the render button automatically.
  - [] upload on demand not only with hasAutoupload
  - [] cleanup
  - [x] ProgressBar component
*/
import React from "react";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";
import useI18n from "@paprika/l10n/lib/useI18n";
import useDragAndDropEvents from "./useDragAndDropEvents";
import useProcessFiles from "./useProcessFiles";
import { getFiles } from "./helpers";
import ProgressBar from "./components/ProgressBar";
import types from "./types";

const oneMebibyte = 1048576;

const propTypes = {
  a11yText: PropTypes.string,
  acceptableFileTypes: PropTypes.arrayOf(PropTypes.string),
  allowMultipleFile: PropTypes.bool,
  hasAutoupload: PropTypes.bool,
  maximumFileSize: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  querySelectorForDropArea: PropTypes.func,
  url: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
  defaultIsDisable: PropTypes.bool,
};

const defaultProps = {
  a11yText: null,
  acceptableFileTypes: ["*/*"],
  allowMultipleFile: true,
  hasAutoupload: true,
  maximumFileSize: oneMebibyte * 10, // 1048576bytes * 10 = 10,485,760 Mebibytes
  querySelectorForDropArea: undefined,
  defaultIsDisable: false,
};

function UploaderComponent(props, ref) {
  const {
    a11yText,
    acceptableFileTypes,
    allowMultipleFile,
    hasAutoupload,
    maximumFileSize,
    onChange,
    querySelectorForDropArea,
    url,
    children,
    defaultIsDisable,
  } = props;

  const refInput = React.useRef();
  const [refId] = React.useState(uuidv4());
  const i18n = useI18n();
  const [isDragOver, setIsDragOver] = React.useState(defaultIsDisable);
  const [isDragLeave, setIsDragLeave] = React.useState(defaultIsDisable);

  const label = a11yText || i18n.t("uploader.label");

  const { files, setFiles, isDisabled, hasSucceeded } = useProcessFiles({
    hasAutoupload,
    onChange,
    url,
    defaultIsDisable,
  });

  React.useImperativeHandle(ref, () => ({
    focus: () => {
      refInput.current.focus();
    },
  }));

  function handleChange(event) {
    const files = getFiles({ event, maximumFileSize, acceptableFileTypes });
    setFiles(() => {
      refInput.current.value = "";
      return files;
    });
  }

  function onDragOver(event) {
    setIsDragOver(() => true);
    setIsDragLeave(() => false);
    // this prevent images from rendering on the browser
    event.preventDefault();
  }

  function onDragLeave() {
    setIsDragOver(() => false);
    setIsDragLeave(() => true);
  }

  function onDrop(event) {
    // this prevent images from rendering on the browser
    setIsDragOver(() => false);
    setIsDragLeave(() => true);
    event.preventDefault();
    handleChange(event);
  }

  useDragAndDropEvents({ dropArea: querySelectorForDropArea, onDragOver, onDragLeave, onDrop });

  return (
    <>
      <label htmlFor={refId}>
        {label}
        <input
          multiple={allowMultipleFile}
          id={refId}
          onChange={handleChange}
          ref={refInput}
          css="opacity: 1;"
          type="file"
          accept={acceptableFileTypes.join(",")}
        />
      </label>
      {children({
        attributes: { "data-uploader-id": `child_${refId}` },
        files,
        isDisabled,
        isDragLeave,
        isDragOver,
        hasSucceeded,
      })}
    </>
  );
}

const Uploader = React.forwardRef(UploaderComponent);

UploaderComponent.defaultProps = defaultProps;
UploaderComponent.propTypes = propTypes;

Uploader.defaultProps = defaultProps;
Uploader.propTypes = propTypes;
Uploader.displayName = "Uploader";
Uploader.types = types;

// utility tool to help creating a maximum desirable size for files
Uploader.convertUnitsToMebibytes = (MiB = 1) => oneMebibyte * MiB;

// subcomponents
Uploader.ProgressBar = ProgressBar;

export default Uploader;
