import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
import { containerStyles } from "./Uploader.styles";
import { getFiles } from "./helpers";
import ProgressBar from "./components/ProgressBar";
import FileList from "./components/FileList";
import DropZone from "./components/DropZone";
import types from "./types";
import useDragAndDropEvents from "./useDragAndDropEvents";
import useProcessFiles from "./useProcessFiles";

const oneMebibyte = 1048576;

export const UploaderContext = React.createContext(null);

const propTypes = {
  /**
    Accessible message for the input[type="file"].
  */
  a11yText: PropTypes.string,
  /**
    An array of string describing the allowed file types for the uploader.
  */
  okFileTypes: PropTypes.arrayOf(PropTypes.string),
  /**
    When false the uploader only accept one file per upload.
   */
  canChooseMultiple: PropTypes.bool,
  /**
    children nodes
  */
  children: PropTypes.node.isRequired,
  /**
    initial disable state for the uploader
  */
  defaultIsDisabled: PropTypes.bool,
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
    This callback fires every time a file has been processed
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

const Uploader = React.forwardRef((props, ref) => {
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
  const i18n = useI18n();
  const label = a11yText || i18n.t("uploader.label");

  React.useImperativeHandle(ref, () => ({
    focus: () => {
      refInput.current.focus();
    },
  }));

  const { files, isCompleted, isDisabled, removeFile, cancelFile, setFiles, upload } = useProcessFiles({
    defaultIsDisabled,
    endpoint,
    hasAutoUpload,
    headers,
    onChange,
    onCompleted,
  });

  const handleChange = React.useCallback(
    function handleChange(event) {
      if (isDisabled) return;

      const files = getFiles({ event, maxFileSize, okFileTypes, endpoint });
      setFiles(() => {
        if (refInput.current) {
          refInput.current.value = "";
        }
        return canChooseMultiple ? files : [files[0]]; // in case only allow one file per upload
      });
    },
    [canChooseMultiple, endpoint, isDisabled, maxFileSize, okFileTypes, setFiles]
  );

  const { isDragLeave, isDraggingOver } = useDragAndDropEvents({
    dropArea: isBodyDroppable ? getDocumentBody : getContainer(refContainer),
    handleChange,
    defaultIsDisabled,
  });

  const value = React.useMemo(() => {
    function FileInput(props) {
      const { children } = props;
      return (
        <div css={containerStyles} ref={refContainer} data-pka-anchor="uploader">
          <input
            multiple={canChooseMultiple}
            onChange={handleChange}
            ref={refInput}
            type="file"
            accept={okFileTypes.join(",")}
            aria-label={label}
          />
          {/* is this the best approach? */}
          {/* aria-hidden will prevent from rendering content that can be counter intuitive for the screen reader */}
          <div aria-hidden>{children}</div>
        </div>
      );
    }
    return {
      FileInput,
      files,
      isCompleted,
      isDisabled,
      isDragLeave,
      isDraggingOver,
      refInput,
      removeFile,
      cancelFile,
      upload,
    };
  }, [
    canChooseMultiple,
    cancelFile,
    files,
    handleChange,
    isCompleted,
    isDisabled,
    isDragLeave,
    isDraggingOver,
    label,
    okFileTypes,
    removeFile,
    upload,
  ]);

  return <UploaderContext.Provider value={value}>{children}</UploaderContext.Provider>;
});

Uploader.defaultProps = defaultProps;
Uploader.propTypes = propTypes;
Uploader.displayName = "Uploader";
Uploader.types = types;

Uploader.DropZone = DropZone;
Uploader.FileList = FileList;

// utility tool to help creating a maximum desirable size for files
Uploader.convertUnitsToMebibytes = (MiB = 1) => oneMebibyte * MiB;

// subcomponents
Uploader.ProgressBar = ProgressBar;

export default Uploader;
