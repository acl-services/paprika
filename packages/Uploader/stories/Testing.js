import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  hasError: PropTypes.bool,
  files: PropTypes.arrayOf(PropTypes.object),
};

const defaultProps = {
  hasError: false,
  files: [],
};

export default function Testing(props) {
  if (props.files.length) {
    return (
      <table>
        <tbody>
          <tr>
            <td>filename</td>
            <td>size</td>
            <td>humanize</td>
            <td>extension</td>
            <td>isValid</td>
            <td>status</td>
            <td>progress</td>
          </tr>
          {props.files.map(file => (
            <tr>
              <td>{file.filename}</td>
              <td>{file.filesize}</td>
              <td>{file.filesizeHumanize}</td>
              <td>{file.extension}</td>
              <td>{file.isValid ? "is valid" : "no valid"}</td>
              <td>{file.status}</td>
              <td>{file.progress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return null;
}

Testing.propTypes = propTypes;
Testing.defaultProps = defaultProps;
