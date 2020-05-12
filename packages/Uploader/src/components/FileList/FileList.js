import React from "react";
import PropTypes from "prop-types";
import { css } from "styled-components";
import Uploader, { UploaderContext } from "../../Uploader";

export default function FileList({ x, y, z }) {
  const { files } = React.useContext(UploaderContext);
  const styles = css`
    td {
      max-width: 210px;
      overflow: hidden;
      padding: 8px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `;

  function handleRemove() {}

  function handleCancel() {}

  return files.length ? (
    <table css={styles}>
      <tbody>
        <tr>
          <td>filename</td>
          <td>size</td>
          <td>humanize</td>
          <td>extension</td>
          <td>isValid</td>
          <td>status</td>
          <td>progress</td>
          <td>errorMessage</td>
          <td>isSizeValid</td>
          <td>isTypeValid</td>
          <td>isServerValid</td>
          <td>remove</td>
        </tr>
        {files.map(file => (
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
        ))}
      </tbody>
    </table>
  ) : (
    <div>Files are listed here...</div>
  );
}

FileList.propTypes = {};
FileList.defaultProps = {};
