import React from "react";
import PropTypes from "prop-types";
import styles from "./ProgressBar.styles";

const propTypes = {
  hasError: PropTypes.bool.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  progress: PropTypes.number.isRequired,
};

export default function ProgressBar(props) {
  const { progress, isCompleted, hasError } = props;

  return (
    <div css={styles.container} data-pka-anchor="uploader.progress-bar">
      <div css={styles.progress} progress={progress} isCompleted={isCompleted} hasError={hasError} />
    </div>
  );
}

ProgressBar.displayName = "ProgressBar";
ProgressBar.propTypes = propTypes;
