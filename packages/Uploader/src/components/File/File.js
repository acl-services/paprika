import React from "react";
import PropTypes from "prop-types";
import CheckIcon from "wasabicons/lib/Check";
import TimesIcon from "wasabicons/lib/Times";
import RetryIcon from "wasabicons/lib/Refresh";
import Button from "@paprika/button";
import tokens from "@paprika/tokens";
import { UploaderContext } from "../../Uploader";
import { getNumberWithUnits } from "../../helpers";
import types from "../../types";
import * as div from "./File.styles";

// TODO: get 'cancel' working
// TODO: get 'restart' working? (optional, this is where things start to break... make sure multi file upload continues to work)
// TODO: L10n
// TODO: a11y
// TODO: tests...

const propTypes = {
  error: PropTypes.string,
  fileKey: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  progress: PropTypes.number,
  size: PropTypes.number.isRequired,
  status: PropTypes.oneOf(Object.keys(types).map(key => types[key])).isRequired,
};

const defaultProps = {
  error: "",
  progress: 0,
};

function File({ error, name, progress, size, status }) {
  // const uc = React.useContext(UploaderContext);
  // const { cancelFile, restartFileUpload } = uc;

  function getUploadedAmount() {
    return (size * progress) / 100;
  }

  const sizeWithUnits = getNumberWithUnits(size);
  const progressWithUnits = getNumberWithUnits(getUploadedAmount());

  function renderIcon() {
    switch (status) {
      case types.ERROR:
      case types.CANCEL:
        return (
          <Button.Icon
            kind="minor"
            onClick={() => {
              // console.log("clicked restart", fileKey);
              // restartFileUpload(fileKey);
            }}
            size="small"
          >
            <RetryIcon />
          </Button.Icon>
        );
      case types.SUCCESS:
        return <CheckIcon color={tokens.color.green} />;
      default:
        // in progress
        return (
          <Button.Icon
            kind="minor"
            onClick={() => {
              // console.log("clicked cancel");
              // cancelFile(fileKey);
            }}
            size="small"
          >
            <TimesIcon />
          </Button.Icon>
        );
    }
  }

  function getProgressText() {
    switch (status) {
      case types.ERROR:
        return error;
      case types.SUCCESS:
        return "Complete";
      case types.CANCEL:
        return "Cancelled";
      case types.IDLE:
        return "Idle";
      default:
        return `Uploading ${progressWithUnits} of ${sizeWithUnits}`;
    }
  }

  return (
    <div.FileWrapper>
      <div.Left>
        <div.Info>
          <div.Name>{name}</div.Name>
          <div.ProgressText status={status}>{getProgressText()}</div.ProgressText>
        </div.Info>
        <div.ProgressBarWrapper>
          <div.ProgressBar progress={progress} status={status} />
        </div.ProgressBarWrapper>
      </div.Left>
      <div.Right status={status}>{renderIcon()}</div.Right>
    </div.FileWrapper>
  );
}

File.defaultProps = defaultProps;
File.propTypes = propTypes;

export default File;
