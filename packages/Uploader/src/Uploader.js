/*
  TODO:
  - [x] make isDisabled work
  - [x] pass down states onDrag/onDragOver etc..
  - [x] pass down all different state for individuals files as well globally state for the uploading process
  - [x] pass down function to interact with the uploader, ~retry file~, upload file, delete file, etc
  - [x] pass headers down
  - [x] abstract complexity for uploading into hook useProcessFiles
  - [x] filter by file extension
  - [x] create testing cases for the component
  - [x] deleter remove item, will work only once hasFinished and file.status === types.IDLE
  - [x] handle errors
  - [x] match the file button and the render button automatically.
  - [x] upload on demand not only with hasAutoupload
  - [x] ProgressBar component
  - [x] if it's disabled shouldn't execute any uploading at all.
  - [x] ability to have focus highlight.active.withBorder.boxShadow	automatically
  - [x] drop only in a designated area
  - [x] allowMultipleFile let the user upload multiple or only one file via dropping or clicking file input
  - [x] implementing onFinished callback which get fired once all files are processed.
  - [] ability to pass custom headers as example [X-CSRF-Token]
  - [] cleanup

  NOTES:

  - let's say you have designated only the FileInput to be a droppable area,
    shouldn't we display an error if you dropped the file outside of the container?
  - for the contrary, shouldn't we display in the other case that they can drop the files wherever they want?
  - when the file has uploaded
*/
import React from "react";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";
import stylers from "@paprika/stylers/";
import useI18n from "@paprika/l10n/lib/useI18n";
import { inputFileStyles, labelStyles, containerStyles } from "./Uploader.styles";
import { getFiles } from "./helpers";
import ProgressBar from "./components/ProgressBar";
import types from "./types";
import useDragAndDropEvents from "./useDragAndDropEvents";
import useProcessFiles from "./useProcessFiles";

const oneMebibyte = 1048576;

const propTypes = {
  a11yText: PropTypes.string,
  acceptableFileTypes: PropTypes.arrayOf(PropTypes.string),
  allowMultipleFile: PropTypes.bool,
  children: PropTypes.func.isRequired,
  defaultIsDisable: PropTypes.bool,
  endpoint: PropTypes.string.isRequired,
  hasAutoupload: PropTypes.bool,
  isBodyDroppableArea: PropTypes.bool,
  maximumFileSize: PropTypes.number,
  onChange: PropTypes.func,
  onFinished: PropTypes.func,
};

const defaultProps = {
  a11yText: null,
  acceptableFileTypes: ["*/*"],
  allowMultipleFile: true,
  defaultIsDisable: false,
  hasAutoupload: true,
  isBodyDroppableArea: true,
  maximumFileSize: oneMebibyte * 10, // 1048576bytes * 10 = 10,485,760 Mebibytes
  onChange: () => {},
  onFinished: () => {},
};

function getDocumentBody() {
  return document.body;
}

function getContainer(refContainer) {
  return function findContainer() {
    return refContainer.current;
  };
}

function UploaderComponent(props, ref) {
  const {
    a11yText,
    acceptableFileTypes,
    allowMultipleFile,
    hasAutoupload,
    maximumFileSize,
    onChange,
    onFinished,
    isBodyDroppableArea,
    endpoint,
    children,
    defaultIsDisable,
  } = props;

  const refInput = React.useRef();
  const refContainer = React.useRef(null);
  const [refId] = React.useState(uuidv4());
  const i18n = useI18n();
  const label = a11yText || i18n.t("uploader.label");

  React.useImperativeHandle(ref, () => ({
    focus: () => {
      refInput.current.focus();
    },
  }));

  const { files, hasFinished, isDisabled, removeItem, setFiles, upload } = useProcessFiles({
    defaultIsDisable,
    hasAutoupload,
    onChange,
    onFinished,
    endpoint,
  });

  function handleChange(event) {
    if (isDisabled) return;

    const files = getFiles({ event, maximumFileSize, acceptableFileTypes });
    setFiles(() => {
      if (refInput.current) {
        refInput.current.value = "";
      }
      return allowMultipleFile ? files : [files[0]]; // in case only allow one file per upload
    });
  }

  const { isDragLeave, isDragOver } = useDragAndDropEvents({
    dropArea: isBodyDroppableArea ? getDocumentBody : getContainer(refContainer),
    handleChange,
    defaultIsDisable,
  });

  function FileInput(props) {
    const { children } = props;
    return (
      <div css={containerStyles} ref={refContainer}>
        <input
          multiple={allowMultipleFile}
          id={refId}
          onChange={handleChange}
          ref={refInput}
          css={inputFileStyles}
          type="file"
          accept={acceptableFileTypes.join(",")}
        />
        <label css={labelStyles} htmlFor={refId}>
          <span css={stylers.visuallyHidden}>{label}</span>
        </label>
        {/* a11y help require, is this the best approach? */}
        {/* aria-hidden will prevent from rendering content that can be counter intuitive for the screen reader */}
        <div aria-hidden>{children}</div>
      </div>
    );
  }

  return (
    <>
      {children({
        FileInput,
        files,
        hasFinished,
        isDisabled,
        isDragLeave,
        isDragOver,
        removeItem,
        upload,
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
