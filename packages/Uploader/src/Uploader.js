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
  /**
    Accessible message for the input[type="file"].
  */
  a11yText: PropTypes.string,
  /**
    An array of string describing the allowed file types for the uploader ex. ["image/*", ".pdf", ".doc", "docx"]
    reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers.
  */
  okFileTypes: PropTypes.arrayOf(PropTypes.string),
  /**
    When false the uploader only accept one file per upload.
   */
  canChooseMultiple: PropTypes.bool,
  /**
    children function received the following parameters which you can use to build you own UI:

    FileInput,   // the input[type="file"] element ready to be consumed
    files,       // a enhance list of the user selected files
    hasFinished, // is true when all files have been processed
    isDisabled,  // describe the status of the component
    isDragLeave, // will be true if a dragOver event occurred and leave the droppable area
    isDragOver,  // True when detecting the user is draggin files over the droppable area
    removeFile,  // removeFile(key) will remove a file from the files list, this function doesn't work while the file is on PROCESSING state.
    cancelFile,  // cancelFile(key) stop the request cycle keep in mind that if it's on WAITINGFORSERVER state the server might save the file even if the request has been cancel
    upload,      // upload() give you the option to manually upload the files if you are decide to not use hasAutoUpload
  */
  children: PropTypes.func.isRequired,
  /**
    initial disable state for the uploader
  */
  defaultIsDisabled: PropTypes.bool,
  /**
    The url that will be use to upload the files ex. https://yourEndPointURL.com
  */
  endpoint: PropTypes.string.isRequired,
  /**
    On true will upload the file as soon they are selected or dropped
  */
  hasAutoUpload: PropTypes.bool,
  /**
    When true the user will be able to drop files at any part of the document.body triggering
    the upload listeners. On false will only received files if they are drop exactly on the FileInput area.
  */
  isBodyDroppable: PropTypes.bool,
  /**
    Size in Mebibytes which is use for comparing each file that will be upload
    you can make use of Uploader.convertUnitsToMebibytes() for easily convert units to Mebibyes
    ex.  Uploader.convertUnitsToMebibytes(4) => 4194304 (close to 4MB);
  */
  maxFileSize: PropTypes.number,
  /**
    This callback fires every time a file has been processed
  */
  onChange: PropTypes.func,
  /**
    Will be fire once all files has been processed with the files as parameter, finishing doesn't mean that all
    files has been correctly uploaded, only means that they were processed, to find about the state of each file
    iterate over the files list.
  */
  onCompleted: PropTypes.func,
  /**
    you can pass an array of header objects as need it ex.
    <Uploader headers={[{ "API-Key": "your-api-key" }, { Accept: "application/json" }, { "X-CSRF-Token": "your-token"} ]} ...>
      {({...}) => <YourUI />}
    </Uploader>
  */
  headers: PropTypes.arrayOf(PropTypes.object),
};

const defaultProps = {
  a11yText: null,
  okFileTypes: ["*/*"],
  canChooseMultiple: true,
  defaultIsDisabled: false,
  hasAutoUpload: true,
  headers: [],
  isBodyDroppable: true,
  maxFileSize: oneMebibyte * 10, // 1048576bytes * 10 = 10,485,760 Mebibytes
  onChange: () => {},
  onCompleted: () => {},
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
    okFileTypes,
    canChooseMultiple,
    hasAutoUpload,
    maxFileSize,
    onChange,
    onCompleted,
    isBodyDroppable,
    endpoint,
    children,
    defaultIsDisabled,
    headers,
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

  const { files, hasFinished, isDisabled, removeFile, cancelFile, setFiles, upload } = useProcessFiles({
    defaultIsDisabled,
    endpoint,
    hasAutoUpload,
    headers,
    onChange,
    onCompleted,
  });

  function handleChange(event) {
    if (isDisabled) return;

    const files = getFiles({ event, maxFileSize, okFileTypes, endpoint });
    setFiles(() => {
      if (refInput.current) {
        refInput.current.value = "";
      }
      return canChooseMultiple ? files : [files[0]]; // in case only allow one file per upload
    });
  }

  const { isDragLeave, isDragOver } = useDragAndDropEvents({
    dropArea: isBodyDroppable ? getDocumentBody : getContainer(refContainer),
    handleChange,
    defaultIsDisabled,
  });

  function FileInput(props) {
    const { children } = props;
    return (
      <div css={containerStyles} ref={refContainer}>
        <input
          multiple={canChooseMultiple}
          id={refId}
          onChange={handleChange}
          ref={refInput}
          css={inputFileStyles}
          type="file"
          accept={okFileTypes.join(",")}
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
        removeFile,
        cancelFile,
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
