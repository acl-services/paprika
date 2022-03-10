import React from "react";
import PropTypes from "prop-types";
import CheckIcon from "@paprika/icon/lib/Check";
import TimesIcon from "@paprika/icon/lib/Times";
import Caution from "@paprika/icon/lib/Caution";

import Button from "@paprika/button";
import useI18n from "@paprika/l10n/lib/useI18n";
import Popover from "@paprika/popover";
import tokens from "@paprika/tokens";
import { UploaderContext } from "../../Uploader";
import { getNumberWithUnits } from "../../helpers";
import * as types from "../../types";
import * as sc from "./File.styles";

File.defaultProps = defaultProps;
File.propTypes = propTypes;

File.types = {
  status: types.status,
};

const propTypes = {
  error: PropTypes.string,
  fileKey: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onError: PropTypes.func,
  onCancel: PropTypes.func,
  progress: PropTypes.number,
  size: PropTypes.number.isRequired,
  status: PropTypes.oneOf(Object.keys(File.types.status).map(key => File.types.status[key])).isRequired,
};

const defaultProps = {
  error: "",
  onError: null,
  onCancel: null,
  progress: 0,
};

function File(props) {
  const { error, fileKey, name, progress, size, status, onError, onCancel } = props;

  const { cancelFile, zIndex } = React.useContext(UploaderContext);
  const I18n = useI18n();
  const sizeWithUnits = getNumberWithUnits(I18n, size);
  const progressWithUnits = getNumberWithUnits(I18n, (size * progress) / 100);
  const a11yProgress = 25 * Math.floor(Math.abs(progress / 25)); // announce in 25% increments for screen reader

  function renderIcon() {
    switch (status) {
      case types.status.ERROR:
        return (
          <Popover isDark isEager zIndex={zIndex}>
            <Popover.Tip />
            <Popover.Trigger aria-label={I18n.t("uploader.restart_upload", { name })}>
              <Caution color={tokens.color.orange} />
            </Popover.Trigger>
            <Popover.Content>
              <Popover.Card>{I18n.t("uploader.restart_upload", { name })}</Popover.Card>
            </Popover.Content>
          </Popover>
        );
      case types.status.CANCEL:
        return null;
      case types.status.SUCCESS:
        return <CheckIcon color={tokens.color.green} aria-hidden />;
      default:
        return (
          <Popover isDark isEager zIndex={zIndex}>
            <Popover.Tip />
            <Popover.Trigger>
              {(handler, a11yAttributes) => (
                <Button.Icon
                  onMouseOver={handler}
                  onMouseOut={handler}
                  onFocus={handler}
                  onBlur={handler}
                  aria-label={I18n.t("uploader.cancel_upload", { name })}
                  kind={Button.Icon.types.kind.MINOR}
                  onClick={() => {
                    cancelFile(fileKey, onCancel);
                  }}
                  size={Button.Icon.types.size.SMALL}
                  {...a11yAttributes}
                >
                  <TimesIcon color={tokens.textColor.icon} />
                </Button.Icon>
              )}
            </Popover.Trigger>
            <Popover.Content>
              <Popover.Card>{I18n.t("uploader.cancel_upload", { name })}</Popover.Card>
            </Popover.Content>
          </Popover>
        );
    }
  }

  function getProgressText(showA11yProgress) {
    const errorMessage = typeof onError === "function" ? onError(error) : error;
    switch (status) {
      case types.status.ERROR:
        return showA11yProgress ? I18n.t("uploader.progress.error", { name, error: errorMessage }) : errorMessage;
      case types.status.SUCCESS:
        return showA11yProgress
          ? I18n.t("uploader.progress.file_progress", { name, progress: I18n.t("uploader.progress.complete") })
          : I18n.t("uploader.progress.complete");
      case types.status.CANCEL:
        return showA11yProgress
          ? I18n.t("uploader.progress.file_progress", { name, progress: I18n.t("uploader.progress.cancelled") })
          : I18n.t("uploader.progress.cancelled");
      case types.status.IDLE:
        return showA11yProgress
          ? I18n.t("uploader.progress.file_progress", { name, progress: I18n.t("uploader.progress.idle") })
          : I18n.t("uploader.progress.idle");
      default:
        return showA11yProgress
          ? I18n.t("uploader.progress.file_progress", {
              name,
              progress: I18n.t("uploader.progress.uploading_percent", { a11yProgress }),
            })
          : I18n.t("uploader.progress.uploading", { progressWithUnits, sizeWithUnits });
    }
  }

  return (
    <sc.FileListItem>
      <div
        aria-label={getProgressText(true)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
        role="progressbar"
      />
      <sc.File>
        <sc.Left aria-hidden>
          <sc.Info>
            <sc.Name>{name}</sc.Name>
            <sc.ProgressText status={status}>{getProgressText(false)}</sc.ProgressText>
          </sc.Info>
          <sc.ProgressBarWrapper>
            <sc.ProgressBar data-pka-anchor="uploader-file-progressBar" progress={progress} status={status} />
          </sc.ProgressBarWrapper>
        </sc.Left>
        <sc.Right status={status}>{renderIcon()}</sc.Right>
      </sc.File>
    </sc.FileListItem>
  );
}

export default File;
