import React from "react";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import useI18n from "@paprika/l10n/lib/useI18n";
import UploadIcon from "@paprika/icon/lib/Upload";
import { UploaderContext } from "../../Uploader";
import * as sc from "./DropZone.styles";

export default function DropZone() {
  const I18n = useI18n();
  const { refInput, FileInput, isDraggingOver } = React.useContext(UploaderContext);
  const uploadIconColor = isDraggingOver ? tokens.color.purpleDarken10 : tokens.color.blackLighten50;

  /* eslint-disable jsx-a11y/anchor-is-valid */
  const body = isDraggingOver ? (
    I18n.t("uploader.drop_files")
  ) : (
    <React.Fragment>
      {I18n.t("uploader.drop_files_here_or")}&nbsp;
      <a
        data-pka-anchor="uploader-dropZone-link"
        href="#"
        onClick={e => {
          e.preventDefault();
          refInput.current.click();
        }}
      >
        {I18n.t("uploader.choose_from_computer")}
      </a>
    </React.Fragment>
  );
  /* eslint-enable jsx-a11y/anchor-is-valid */

  return (
    <FileInput>
      <sc.DropZone isDraggingOver={isDraggingOver}>
        <UploadIcon data-pka-anchor="uploader-dropZone-uploadIcon" size={stylers.spacer(4)} color={uploadIconColor} />
        <sc.Body>{body}</sc.Body>
      </sc.DropZone>
    </FileInput>
  );
}
