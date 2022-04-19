import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
import { extractChildrenProps } from "@paprika/helpers";
import { getFiles } from "./helpers";
import FileList from "./components/FileList";
import DropZone from "./components/DropZone";
import * as types from "./types";
import useDragAndDropEvents from "./useDragAndDropEvents";
import useProcessFiles from "./useProcessFiles";
import UploaderInputPropsCollector from "./components/UploaderInputPropsCollector";

const oneMebibyte = 1048576;

export const UploaderContext = React.createContext(null);

const propTypes = {
  /**
    Accessible message for the input[type="file"].
  */
  a11yText: PropTypes.string,
  /**
    An array of accepted file extensions and/or MIME types. Note that Microsoft MIME types don't seem to be enforced.
  */
  supportedMimeTypes: PropTypes.arrayOf(PropTypes.string),
  /**
    When false the uploader only accept one file per upload.
   */
  canChooseMultiple: PropTypes.bool,
  /**
    children nodes
  */
  children: PropTypes.node.isRequired,
  /**
    Is uploader disabled.
  */
  isDisabled: PropTypes.bool,
  /**
    The url that will be use to upload the files.
  */
  endpoint: PropTypes.string.isRequired,
  /**
    On true will upload the file as soon they are selected or dropped
  */
  hasAutoUpload: PropTypes.bool,
  /**
    When true the user will be able to drop files at any part of the document.body. On false will only receive files dropped exactly on the FileInput area.
  */
  isBodyDroppable: PropTypes.bool,
  /**
    Size in Mebibytes which is used for comparing each file that will be uploaded.
  */
  maxFileSize: PropTypes.number,
  /**
    This callback fires every time the input value has been changed.
  */
  onChange: PropTypes.func,
  /**
    Will fire once all files have been processed with the files as parameter.
  */
  onCompleted: PropTypes.func,
  /**
    you can pass an array of header objects.
  */
  headers: PropTypes.arrayOf(PropTypes.object),
  /**
    This callback fires when uploading is about to start (all files have been processed to see if they are valid type/size).
  */
  onProcessed: PropTypes.func,
  /**
   * Let you to take over the request method
   */
  onRequest: PropTypes.func,
  /**
   * Callback fired whenever an error occurs while uploading a file.  It receives the raw server error as an argument. Whatever this function returns is what is displayed in the UI.  If nothing is returned, it will display the raw server error.
   */
  onError: PropTypes.func,
  /**
   * Callback fired when the user cancels an uploading file.
   */
  onCancel: PropTypes.func,
  /**
   * z-index for popovers inside the uploader.
   */
  zIndex: PropTypes.number,
};

const defaultProps = {
  a11yText: null,
  canChooseMultiple: true,
  isDisabled: false,
  hasAutoUpload: true,
  headers: [],
  isBodyDroppable: true,
  maxFileSize: oneMebibyte * 10, // 1048576bytes * 10 = 10,485,760 Mebibytes
  onCancel: () => {},
  onChange: () => {},
  onCompleted: () => {},
  onError: null,
  onProcessed: () => {},
  onRequest: null,
  supportedMimeTypes: ["*/*"],
  zIndex: 1,
};

function getDocumentBody() {
  return document.body;
}

function getContainer(refContainer) {
  return function findContainer() {
    return refContainer.current;
  };
}

const Uploader = React.forwardRef((props, ref) => {
  const {
    a11yText,
    canChooseMultiple,
    children,
    endpoint,
    hasAutoUpload,
    headers,
    isBodyDroppable,
    isDisabled,
    maxFileSize,
    onCancel,
    onChange,
    onCompleted,
    onError,
    onProcessed,
    onRequest,
    supportedMimeTypes,
    zIndex,
    ...morePropsOnUploaderWrapper
  } = props;

  const refInput = React.useRef();
  const refContainer = React.useRef(null);
  const i18n = useI18n();
  const label = a11yText || i18n.t("uploader.choose_from_computer_a11y");
  const extendedInputProps = extractChildrenProps(children, UploaderInputPropsCollector);

  React.useImperativeHandle(ref, () => ({
    focus: () => {
      refInput.current.focus();
    },
  }));

  const { files, isCompleted, isBusy, removeFile, cancelFile, setFiles, upload } = useProcessFiles({
    endpoint,
    hasAutoUpload,
    headers,
    onCompleted,
    onProcessed,
    onRequest,
  });

  const handleChange = React.useCallback(
    (event, fromDrop) => {
      if (isDisabled || isBusy) return;

      if (fromDrop && refInput.current) {
        if (canChooseMultiple) {
          refInput.current.files = event.dataTransfer.files;
        } else {
          const dataTransfer = new DataTransfer();

          dataTransfer.items.add(event.dataTransfer.files[0]);
          refInput.current.files = dataTransfer.files;
        }
      }

      const files = getFiles({ event, maxFileSize, supportedMimeTypes, endpoint });
      setFiles(() => (canChooseMultiple ? files : [files[0]])); // in case only allow one file per upload
      onChange(files);
    },
    [canChooseMultiple, endpoint, isDisabled, isBusy, maxFileSize, setFiles, supportedMimeTypes, onChange]
  );

  const { isDragLeave, isDraggingOver } = useDragAndDropEvents({
    dropArea: isBodyDroppable ? getDocumentBody : getContainer(refContainer),
    handleChange,
  });

  const value = {
    cancelFile,
    canChooseMultiple,
    extendedInputProps,
    files,
    handleChange,
    isBusy,
    isCompleted,
    isDisabled,
    isDraggingOver,
    isDragLeave,
    label,
    maxFileSize,
    morePropsOnUploaderWrapper,
    onCancel,
    onError,
    refContainer,
    refInput,
    removeFile,
    supportedMimeTypes,
    upload,
    zIndex,
  };

  return <UploaderContext.Provider value={value}>{children}</UploaderContext.Provider>;
});

Uploader.defaultProps = defaultProps;
Uploader.propTypes = propTypes;
Uploader.displayName = "Uploader";
Uploader.types = types;

Uploader.DropZone = DropZone;
Uploader.FileList = FileList;
Uploader.Input = UploaderInputPropsCollector;

// utility tool to help creating a maximum desirable size for files
Uploader.convertUnitsToMebibytes = (MiB = 1) => oneMebibyte * MiB;

export default Uploader;
