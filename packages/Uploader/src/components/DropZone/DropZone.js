import React from "react";
import tokens from "@paprika/tokens";
import useI18n from "@paprika/l10n/lib/useI18n";
import UploadIcon from "wasabicons/lib/Upload";
import { UploaderContext } from "../../Uploader";
import * as div from "./DropZone.styles";

export default function DropZone() {
  const I18n = useI18n();
  const uc = React.useContext(UploaderContext);
  const isDraggingOver = uc.isDraggingOver;
  const uploadIconColor = isDraggingOver ? tokens.color.purpleDarken10 : tokens.color.blackLighten50;

  /* eslint-disable jsx-a11y/anchor-is-valid */
  const body = isDraggingOver ? (
    I18n.t("uploader.drop_files")
  ) : (
    <React.Fragment>
      {I18n.t("uploader.drop_files_here_or")}&nbsp;
      <a
        href="#"
        onClick={() => {
          uc.refInput.current.click();
          return false;
        }}
      >
        {I18n.t("uploader.choose_from_computer")}
      </a>
    </React.Fragment>
  );
  /* eslint-enable jsx-a11y/anchor-is-valid */

  return (
    <uc.FileInput>
      <div.DropZone isDraggingOver={isDraggingOver}>
        <UploadIcon size="32px" color={uploadIconColor} />
        <div.Body>{body}</div.Body>
      </div.DropZone>
    </uc.FileInput>
  );
}
