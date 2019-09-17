import React from "react";
import PropTypes from "prop-types";
import { css } from "styled-components";
import Uploader from "../src/Uploader";

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
};
const propTypes = {
  isDisabled: PropTypes.bool,
  files: PropTypes.arrayOf(PropTypes.object),
};

const defaultProps = {
  isDisabled: false,
  files: [],
};

function hasError(isValid) {
  return isValid ? "👍" : "🚨";
}

export default function Testing(props) {
  const { files, isDragOver, isDragLeave, isDisabled, hasSucceeded } = props;

  return (
    <>
      <p>{isDisabled ? "isDisabled is true" : "isDisabled is false"}</p>
      <p>{isDragOver ? "isDragOver 🤚" : ""}</p>
      <p>{isDragLeave ? "isDragLeave 👋" : ""}</p>
      <p>{hasSucceeded ? "success ✅" : null}</p>
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
                  {
                    <Uploader.ProgressBar
                      progress={file.progress}
                      hasSucceeded={file.status === Uploader.types.SUCCESS}
                      hasError={!file.isValid}
                    />
                  }
                </td>
                <td>{file.error ? file.error.message : ""}</td>
                <td>{hasError(file.isSizeValid)}</td>
                <td>{hasError(file.isTypeValid)}</td>
                <td>{hasError(file.isServerValid)}</td>
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
