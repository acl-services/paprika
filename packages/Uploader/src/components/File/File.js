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

File.defaultProps = defaultProps; // eslint-disable-line no-use-before-define
File.propTypes = propTypes; // eslint-disable-line no-use-before-define
// eslint-disable-next-line no-use-before-define
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
  status: PropTypes.oneOf(Object.keys(File.types.status).map(key => File.types.status[key])).isRequired, // eslint-disable-line no-use-before-define
};

const defaultProps = {
  error: "",
  onError: null,
  onCancel: null,
  progress: 0,
};

function File(props) {
  const { error, fileKey, name, progress, size, status, onError, onCancel } = props;

  const { cancelFile } = React.useContext(UploaderContext);
  const I18n = useI18n();
  const sizeWithUnits = getNumberWithUnits(I18n, size);
  const progressWithUnits = getNumberWithUnits(I18n, (size * progress) / 100);
  const a11yProgress = 25 * Math.floor(Math.abs(progress / 25)); // announce in 25% increments for screen reader

  function renderIcon() {
    switch (status) {
      case types.status.ERROR:
        return (
          <Popover isDark isEager>
            <Popover.Tip />
            <Popover.Trigger aria-label={`${name} ${I18n.t("uploader.restart_upload")}`}>
              <Caution color={tokens.color.orange} />
            </Popover.Trigger>
            <Popover.Content>
              <Popover.Card>{I18n.t("uploader.restart_upload")}</Popover.Card>
            </Popover.Content>
          </Popover>
        );
      case types.status.CANCEL:
        return null;
      case types.status.SUCCESS:
        return <CheckIcon color={tokens.color.green} />;
      default:
        return (
          <Popover isDark isEager>
            <Popover.Tip />
            <Popover.Trigger tabIndex={-1}>
              <Button.Icon
                aria-label={`${name} ${I18n.t("uploader.cancel_upload")}`}
                kind={Button.Icon.types.kind.MINOR}
                onClick={() => {
                  cancelFile(fileKey, onCancel);
                }}
                onKeyDown={event => (["Enter", " "].includes(event.key) ? cancelFile(fileKey, onCancel) : {})}
                size={Button.Icon.types.size.SMALL}
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

  function getProgressText(showA11yProgress) {
    switch (status) {
      case types.status.ERROR:
        return typeof onError === "function" ? onError(error) : error;
      case types.status.SUCCESS:
        return I18n.t("uploader.progress.complete");
      case types.status.CANCEL:
        return I18n.t("uploader.progress.cancelled");
      case types.status.IDLE:
        return I18n.t("uploader.progress.idle");
      default:
        if (!showA11yProgress) return I18n.t("uploader.progress.uploading", { progressWithUnits, sizeWithUnits });
        return `${I18n.t("uploader.progress.uploading") + a11yProgress}%`;
    }
  }

  return (
    <sc.File
      aria-label={`${name} ${getProgressText(true)}`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
      role="progressbar"
      tabIndex={0}
    >
      <sc.Left>
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
  );
}

export default File;
