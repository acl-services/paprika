import React from "react";
import PropTypes from "prop-types";
import { css } from "styled-components";
import Uploader, { UploaderContext } from "../../Uploader";
import File from "../File";

export default function FileList() {
  const { files } = React.useContext(UploaderContext);

  function handleRemove() {}

  function handleCancel() {}

  return files.length
    ? files.map(file => (
        <File
          key={file.key}
          name={file.filename}
          size={file.filesize}
          status={file.status}
          progress={file.progress}
          error={null}
        />
      ))
    : null;
}

FileList.propTypes = {};
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
