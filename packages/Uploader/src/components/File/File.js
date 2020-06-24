import React from "react";
import PropTypes from "prop-types";
import CheckIcon from "@paprika/icon/lib/Check";
import TimesIcon from "@paprika/icon/lib/Times";
import RetryIcon from "@paprika/icon/lib/Refresh";
import Button from "@paprika/button";
import useI18n from "@paprika/l10n/lib/useI18n";
import Popover from "@paprika/popover";
import tokens from "@paprika/tokens";
import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";
import { UploaderContext } from "../../Uploader";
import { getNumberWithUnits } from "../../helpers";
import statuses from "../../statuses";
import * as sc from "./File.styles";

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
  const { cancelFile, restartFileUpload } = React.useContext(UploaderContext);
  const I18n = useI18n();
  const sizeWithUnits = getNumberWithUnits(I18n, size);
  const progressWithUnits = getNumberWithUnits(I18n, (size * progress) / 100);

  function renderIcon() {
    switch (status) {
      case statuses.ERROR:
      case statuses.CANCEL:
        return (
          <Popover isDark isEager>
            <Popover.Tip />
            <Popover.Trigger>
              <Button.Icon
                kind={Button.Kinds.MINOR}
                onClick={() => {
                  restartFileUpload(fileKey);
                }}
                size={ShirtSizes.SMALL}
              >
                <RetryIcon />
              </Button.Icon>
            </Popover.Trigger>
            <Popover.Content>
              <Popover.Card>{I18n.t("uploader.restart_upload")}</Popover.Card>
            </Popover.Content>
          </Popover>
        );
      case statuses.SUCCESS:
        return <CheckIcon color={tokens.color.green} />;
      default:
        return (
          <Popover isDark isEager>
            <Popover.Tip />
            <Popover.Trigger>
              <Button.Icon
                kind={Button.Kinds.MINOR}
                onClick={() => {
                  cancelFile(fileKey);
                }}
                size={ShirtSizes.SMALL}
                isSemantic={false}
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
    <sc.FileWrapper>
      <sc.Left>
        <sc.Info>
          <sc.Name>{name}</sc.Name>
          <sc.ProgressText status={status}>{getProgressText()}</sc.ProgressText>
        </sc.Info>
        <sc.ProgressBarWrapper>
          <sc.ProgressBar progress={progress} status={status} />
        </sc.ProgressBarWrapper>
      </sc.Left>
      <sc.Right status={status}>{renderIcon()}</sc.Right>
    </sc.FileWrapper>
  );
}

File.defaultProps = defaultProps;
File.propTypes = propTypes;

export default File;
