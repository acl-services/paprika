import React from "react";
import PropTypes from "prop-types";
import { css } from "styled-components";
import tokens from "@paprika/tokens";
import Uploader, { UploaderContext } from "../src/Uploader";

const styles = {
  table: css`
    td {
      max-width: 210px;
      overflow: hidden;
      padding: 8px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `,
  fileInput: css`
    align-items: center;
    border: 1px dashed blue;
    border-radius: 6px;
    box-shadow: ${tokens.popover.shadow};
    display: flex;
    height: 200px;
    justify-content: center;
    width: 300px;
  `,
};
const propTypes = {
  hasUploadButton: PropTypes.bool,
};

const defaultProps = {
  hasUploadButton: false,
};

function hasError(isValid) {
  return isValid ? "👍" : "🚨";
}

export default function Testing(props) {
  const {
    /* custom prop from storybook just fo this example */
    hasUploadButton,
  } = props;

  const {
    files,
    isDraggingOver,
    isDisabled,
    isCompleted,
    upload,
    removeFile,
    cancelFile,
    FileInput,
  } = React.useContext(UploaderContext);

  const handleUpload = () => {
    upload();
  };

  const handleRemove = key => () => {
    removeFile(key);
  };

  const handleCancel = key => () => {
    cancelFile(key);
  };

  return (
    <>
      <FileInput>
        <div css={styles.fileInput}>FILE INPUT AREA (children)</div>
      </FileInput>
      {hasUploadButton ? (
        <p>
          After selecting your images, click the button to upload it.
          <button type="button" onClick={handleUpload}>
            upload images
          </button>
        </p>
      ) : null}
      <p>{isDisabled ? "isDisabled is true" : "isDisabled is false"}</p>
      <p>{isDraggingOver ? "isDraggingOver 🤚" : ""}</p>
      <p>{isCompleted ? "success ✅" : null}</p>
      <hr />
      {files.length ? (
        <table css={styles.table}>
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
                <td>{hasError(file.isValid)}</td>
                <td>{file.status}</td>
                <td>
                  <Uploader.ProgressBar
                    progress={file.progress}
                    isCompleted={file.status === Uploader.types.SUCCESS}
                    hasError={!file.isValid}
                  />
                </td>
                <td>{file.error ? file.error.message : ""}</td>
                <td>{hasError(file.isSizeValid)}</td>
                <td>{hasError(file.isTypeValid)}</td>
                <td>{hasError(file.isServerValid)}</td>
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
      ) : null}
    </>
  );
}

Testing.propTypes = propTypes;
Testing.defaultProps = defaultProps;
