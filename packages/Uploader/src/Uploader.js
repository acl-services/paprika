import React from "react";
import PropTypes from "prop-types";
import uuidv4 from "uuid/v4";
import useI18n from "@paprika/l10n/lib/useI18n";
import useDragAndDropEvents from "./useDragAndDropEvents";
import { getFiles, upload } from "./helpers";

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
};

const defaultProps = {
  a11yText: null,
  acceptableFileTypes: ["*/*"],
  allowMultipleFile: true,
  hasAutoupload: true,
  maximumFileSize: oneMebibyte * 10, // 1048576bytes * 10 = 10,485,760 Mebibytes
  querySelectorForDropArea: undefined,
};

function UploaderComponent(props, ref) {
  const refInput = React.useRef();
  const [refId] = React.useState(uuidv4());
  const [files, setFiles] = React.useState([]);
  const i18n = useI18n();

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
    ...moreProps
  } = props;

  const label = a11yText || i18n.t("uploader.label");

  React.useImperativeHandle(ref, () => ({
    focus: () => {
      refInput.current.focus();
    },
    upload: () => {
      if (files.length) {
        // useUpload({ hasAutoupload, upload, onChange, files, url, refInput });
      }

      console.warn("there is not files attached, upload will not be call");
    },
  }));

  React.useEffect(() => {
    function onProgress({ file, percentage }) {
      console.log(file.key, percentage);
    }

    function uploadFiles() {
      if (hasAutoupload && files.length) {
        files.forEach(file => {
          upload({ file, url, refInput, onProgress });
        });
      }
    }

    onChange(files);
    uploadFiles();
  }, [files, hasAutoupload, onChange, url]);

  function handleChange(event) {
    const files = getFiles({ event, maximumFileSize, acceptableFileTypes });
    setFiles(() => {
      refInput.current.value = "";
      return files;
    });
  }

  function onDragEnter(event) {}

  function onDragOver(event) {
    // this prevent images from rendering on the browser
    event.preventDefault();
  }

  function onDragLeave(event) {}

  function onDrop(event) {
    // this prevent images from rendering on the browser
    event.preventDefault();
    handleChange(event);
  }

  useDragAndDropEvents({ dropArea: querySelectorForDropArea, onDragEnter, onDragOver, onDragLeave, onDrop });

  return (
    <label htmlFor={refId}>
      {label}
      <input
        multiple={allowMultipleFile}
        id={refId}
        onChange={handleChange}
        ref={refInput}
        css="opacity: 1;"
        type="file"
      />
      {children({ files, setFiles, props: { ...props } })}
    </label>
  );
}

const Uploader = React.forwardRef(UploaderComponent);

UploaderComponent.defaultProps = defaultProps;
UploaderComponent.propTypes = propTypes;

Uploader.defaultProps = defaultProps;
Uploader.propTypes = propTypes;
Uploader.displayName = "Uploader";

// utility tool to help creating a maximum desirable size for files
Uploader.convertUnitsToMebibytes = (MiB = 1) => oneMebibyte * MiB;

export default Uploader;
