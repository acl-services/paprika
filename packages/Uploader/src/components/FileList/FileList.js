import React from "react";
import PropTypes from "prop-types";
// import { css } from "styled-components";
import { UploaderContext } from "../../Uploader";
import { getNumberWithUnits } from "../../helpers";
import File from "../File";

export default function FileList({ maxFileSize }) {
  const { files } = React.useContext(UploaderContext);

  // function handleRemove() {}

  // function handleCancel() {}

  function getFileErrorText(file) {
    if (!file.isSizeValid) {
      return `File must be smaller than ${getNumberWithUnits(maxFileSize)}`;
    }

    if (!file.isTypeValid) {
      // return `File must be one of the following types: ${okFileTypes.join(", ")}`;
      return `File must be one of the following types: ...`;
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

/*

          <tr key={file.key}>
            <td>{file.filename}</td>
            <td>{file.filesize}</td>
            <td>{file.filesizeHumanize}</td>
            <td>{file.extension}</td>
            <td></td>
            <td>{file.status}</td>
            <td>
              <Uploader.ProgressBar
                progress={file.progress}
                isCompleted={file.status === Uploader.types.SUCCESS}
                hasError={!file.isValid}
              />
            </td>
            <td>{file.error ? file.error.message : ""}</td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button type="button" onClick={handleRemove(file.key)}>
                remove
              </button>
            </td>
            <td>
              <button type="button" onClick={handleCancel(file.key)}>
                cancel
              </button>
            </td>
          </tr>

*/
