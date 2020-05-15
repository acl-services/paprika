import React from "react";
import PropTypes from "prop-types";
import CheckIcon from "wasabicons/lib/Check";
import TimesIcon from "wasabicons/lib/Times";
import RetryIcon from "wasabicons/lib/Refresh";
import Button from "@paprika/button";
import useI18n from "@paprika/l10n/lib/useI18n";
import Popover from "@paprika/popover";
import tokens from "@paprika/tokens";
import { UploaderContext } from "../../Uploader";
import { getNumberWithUnits } from "../../helpers";
import statuses from "../../statuses";
import * as div from "./File.styles";

const propTypes = {
  error: PropTypes.string,
  fileKey: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  progress: PropTypes.number,
  size: PropTypes.number.isRequired,
  status: PropTypes.oneOf(Object.keys(statuses).map(key => statuses[key])).isRequired,
};

const defaultProps = {
  error: "",
  progress: 0,
};

function File({ error, fileKey, name, progress, size, status }) {
  const uc = React.useContext(UploaderContext);
  const { cancelFile, restartFileUpload } = uc;
  const I18n = useI18n();

  function getUploadedAmount() {
    return (size * progress) / 100;
  }

  const sizeWithUnits = getNumberWithUnits(size);
  const progressWithUnits = getNumberWithUnits(getUploadedAmount());

  function renderIcon() {
    switch (status) {
      case statuses.ERROR:
      case statuses.CANCEL:
        return (
          <Button.Icon
            kind="minor"
            onClick={() => {
              restartFileUpload(fileKey);
            }}
            size="small"
          >
            <RetryIcon />
          </Button.Icon>
        );
      case statuses.SUCCESS:
        return <CheckIcon color={tokens.color.green} />;
      default:
        return (
          <Popover isDark isEager>
            <Popover.Trigger>
              <Button.Icon
                kind="minor"
                onClick={() => {
                  cancelFile(fileKey);
                }}
                size="small"
              >
                <TimesIcon />
              </Button.Icon>
            </Popover.Trigger>
            <Popover.Content>
              <Popover.Card>{I18n.t("uploader.cancel_upload")}</Popover.Card>
            </Popover.Content>
          </Popover>
        );
    }
  }

  function getProgressText() {
    switch (status) {
      case statuses.ERROR:
        return error;
      case statuses.SUCCESS:
        return I18n.t("uploader.progress.complete");
      case statuses.CANCEL:
        return I18n.t("uploader.progress.cancelled");
      case statuses.IDLE:
        return I18n.t("uploader.progress.idle");
      default:
        return I18n.t("uploader.progress.uploading", { progressWithUnits, sizeWithUnits });
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
