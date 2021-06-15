import React from "react";
import useI18n from "@paprika/l10n/lib/useI18n";
import { UploaderContext } from "../../Uploader";
import { getNumberWithUnits } from "../../helpers";
import File from "../File";
import * as sc from "./FileList.styles";

export default function FileList() {
  const { files, maxFileSize, onCancel, onError, supportedMimeTypes } = React.useContext(UploaderContext);
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
    <sc.FileList aria-live="polite">
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
