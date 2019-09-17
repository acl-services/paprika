import React from "react";
import PropTypes from "prop-types";
import styles from "./ProgressBar.styles";

const propTypes = {
  hasError: PropTypes.bool.isRequired,
  hasSucceeded: PropTypes.bool.isRequired,
  progress: PropTypes.number.isRequired,
};

export default function ProgressBar(props) {
  const { progress, hasSucceeded, hasError } = props;

  return (
    <div css={styles.container} data-type="uploader-progress-bar">
      <div css={styles.progress} progress={progress} hasSucceeded={hasSucceeded} hasError={hasError} />
    </div>
  );
}

ProgressBar.displayName = "ProgressBar";
ProgressBar.propTypes = propTypes;
