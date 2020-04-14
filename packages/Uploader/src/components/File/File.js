import React from "react";
import PropTypes from "prop-types";
import CheckIcon from "wasabicons/lib/Check";
import TimesIcon from "wasabicons/lib/Times";
import RetryIcon from "wasabicons/lib/Refresh";
import Button from "@paprika/button";
import tokens from "@paprika/tokens";
import { getNumberWithUnits } from "../../helpers";
import "./File.scss";
// import { css } from "styled-components";

// TODO: handle cancel button (while uploading)
// TODO: handle retry button (on server error)
// TODO: tooltip on cancel
// TODO: tooltip on retry
// TODO: is there some state that is a file that was uploaded in the past? (the one with the trashcan)
// TODO: dont use classnames, use styled-components. and use stylers.fontSize
// TODO: L10n
// TODO: tests...

const propTypes = {
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  progress: PropTypes.number,
  size: PropTypes.number.isRequired,
};

const defaultProps = {
  error: "",
  progress: 0,
};

function File({ error, name, progress, size }) {
  const isComplete = progress >= 100;
  const hasError = error.length > 0;

  function getUploadedAmount() {
    return (size * progress) / 100;
  }

  const sizeWithUnits = getNumberWithUnits(size);
  const progressWithUnits = getNumberWithUnits(getUploadedAmount());

  function renderIcon() {
    if (isComplete) {
      return <CheckIcon color={tokens.color.green} />;
    }

    if (hasError) {
      return (
        <Button.Icon
          kind="minor"
          onClick={() => {
            alert("retry...");
          }}
          size="small"
        >
          <RetryIcon />
        </Button.Icon>
      );
    }

    // in progress
    return (
      <Button.Icon kind="minor" onClick={() => {}} size="small">
        <TimesIcon />
      </Button.Icon>
    );
  }

  function getProgressText() {
    if (isComplete) {
      return "Complete";
    }

    if (hasError) {
      return error;
    }

    return `Uploading ${progressWithUnits} of ${sizeWithUnits}`;
  }

  const fileClass = `uploader-file ${isComplete ? "uploader-file--complete" : ""} ${
    hasError ? "uploader-file--error" : ""
  }`;

  return (
    <div className={fileClass}>
      <div className="uploader-file__left">
        <div className="uploader-file__info">
          <div className="uploader-file__name">{name}</div>
          <div className="uploader-file__progress-text">{getProgressText()}</div>
        </div>
        <div className="uploader-file__progress-bar">
          <div
            className="uploader-file__progress-bar uploader-file__progress-bar--inner"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <div className="uploader-file__right">{renderIcon()}</div>
    </div>
  );
}

File.defaultProps = defaultProps;
File.propTypes = propTypes;

export default File;
