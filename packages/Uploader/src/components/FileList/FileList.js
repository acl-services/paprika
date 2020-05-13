import React from "react";
import PropTypes from "prop-types";
// import { css } from "styled-components";
import { UploaderContext } from "../../Uploader";
import { getNumberWithUnits } from "../../helpers";
import File from "../File";

// TODO: L10n
// TODO: style?

export default function FileList({ okFileTypes, maxFileSize }) {
  const { files } = React.useContext(UploaderContext);

  // function handleRemove(fileKey) {}

  // function handleCancel(fileKey) {}

  function getFileErrorText(file) {
    if (!file.isSizeValid) {
      return `File must be smaller than ${getNumberWithUnits(maxFileSize)}`;
    }

    if (!file.isTypeValid) {
      return `File must be one of the following types: ${okFileTypes.join(", ")}`;
    }

    if (!file.isServerValid) {
      return file.error.message;
    }

    return null;
  }

  return files.length
    ? files.map(file => (
        <File
          key={file.key}
          name={file.filename}
          size={file.filesize}
          status={file.status}
          progress={file.progress}
          error={getFileErrorText(file)}
        />
      ))
    : null;
}

FileList.propTypes = {
  maxFileSize: PropTypes.number.isRequired,
};

FileList.defaultProps = {};
