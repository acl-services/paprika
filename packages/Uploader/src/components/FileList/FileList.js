import React from "react";
// import PropTypes from "prop-types";
import { UploaderContext } from "../../Uploader";
import { getNumberWithUnits } from "../../helpers";
import File from "../File";

// TODO: L10n

function FileList({ maxFileSize, okFileTypes }) {
  const uc = React.useContext(UploaderContext);
  const { files } = uc;

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

    return (
      <File
        error={errorMessage}
        fileKey={file.key}
        name={file.filename}
        progress={file.progress}
        size={file.filesize}
        status={file.status}
      />
    );
  });
}

export default FileList;
