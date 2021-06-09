import React from "react";
import PropTypes from "prop-types";
import useI18n from "@paprika/l10n/lib/useI18n";
import { UploaderContext } from "../../Uploader";
import { getNumberWithUnits } from "../../helpers";
import File from "../File";
import * as sc from "./FileList.styles";

const propTypes = {
  maxFileSize: PropTypes.number.isRequired,
  supportedMimeTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const defaultProps = {};

export default function FileList({ supportedMimeTypes, maxFileSize }) {
  const { files, onError, onCancel } = React.useContext(UploaderContext);
  const I18n = useI18n();

  function getFileErrorText(file) {
    if (!file.isSizeValid) {
      return I18n.t("uploader.errors.size", { maxFileSize: getNumberWithUnits(I18n, maxFileSize) });
    }

    if (!file.isTypeValid) {
      return I18n.t("uploader.errors.type", { supportedTypes: supportedMimeTypes.join(", ") });
    }

    if (!file.isServerValid) {
      return file.error.message;
    }

    return null;
  }

  if (!files) {
    return null;
  }

  return (
    <sc.FileList aria-live="polite" aria-label={I18n.t("uploader.file_list")}>
      {files.map(file => (
        <File
          error={getFileErrorText(file)}
          fileKey={file.key}
          key={file.key}
          name={file.filename}
          onCancel={onCancel}
          onError={onError}
          progress={file.progress}
          size={file.filesize}
          status={file.status}
        />
      ))}
    </sc.FileList>
  );
}

FileList.propTypes = propTypes;
FileList.defaultProps = defaultProps;
