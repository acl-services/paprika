import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
import { containerStyles } from "./Uploader.styles";
import { getFiles, getNumberWithUnits } from "./helpers";
import types from "./types";
import useDragAndDropEvents from "./useDragAndDropEvents";
import useProcessFiles from "./useProcessFiles";
import DefaultFileInput from "./components/DefaultFileInput";
import CompactFileInput from "./components/CompactFileInput";
import File from "./components/File";

const oneMebibyte = 1024 * 1024;
export const LAYOUTS = {
  DEFAULT: "default",
  COMPACT: "compact",
  // for custom layout, just pass in any children
};

// TODO: clean up all the files! lots will be un-needed
// TODO: L10n

export const UploaderContext = React.createContext(null);

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
    children nodes
  */
  children: PropTypes.node,
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
  layout: PropTypes.string,
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
  children: null,
  defaultIsDisabled: false,
  hasAutoUpload: true,
  headers: [],
  isBodyDroppable: true,
  layout: LAYOUTS.DEFAULT,
  maxFileSize: oneMebibyte * 10,
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
    layout,
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
      handleChange,
      isCompleted,
      isDisabled,
      isDragLeave,
      isDraggingOver,
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

  // const childrenWithAddedProps = React.cloneElement(children, props);

  // return <UploaderContext.Provider value={value}>{childrenWithAddedProps}</UploaderContext.Provider>;

  function renderFileInput() {
    if (layout === LAYOUTS.COMPACT) {
      return (
        <value.FileInput>
          <CompactFileInput isDraggingOver={value.isDraggingOver} fileInputRef={refInput} />
        </value.FileInput>
      );
    }

    // custom
    if (children) {
      // TODO: what about clicking?
      //          - wrap this with an 'onClick'
      //          - add a file input at the end? that'd require more props (text)
      //          - force them to include one button (or show warning), and override its 'onclick'?
      // TODO: add `pointer: cursor`? ...or is it `cursor: pointer`?
      return (
        <value.FileInput>
          <div>{children}</div>
        </value.FileInput>
      );
    }

    // default
    return (
      <value.FileInput>
        <DefaultFileInput isDraggingOver={value.isDraggingOver} fileInputRef={refInput} />
      </value.FileInput>
    );
  }

  function renderFiles() {
    if (!files.length) {
      return null;
    }

    return files.map(file => {
      let errorMessage = "";

      if (!file.isSizeValid) {
        errorMessage = `File must be smaller than ${getNumberWithUnits(maxFileSize)}`;
      } else if (!file.isTypeValid) {
        errorMessage = `File must be one of the following types: ${okFileTypes.join(", ")}`;
      } else if (file.error) {
        errorMessage = file.error.message;
      }

      return <File error={errorMessage} name={file.filename} progress={file.progress} size={file.filesize} />;
    });
  }

  return (
    <React.Fragment>
      {renderFileInput()}
      {renderFiles()}
    </React.Fragment>
  );
});

Uploader.defaultProps = defaultProps;
Uploader.propTypes = propTypes;
Uploader.displayName = "Uploader";
Uploader.types = types;

// utility tool to help creating a maximum desirable size for files
Uploader.convertUnitsToMebibytes = (MiB = 1) => oneMebibyte * MiB;

export default Uploader;
