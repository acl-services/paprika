import React from "react";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import useI18n from "@paprika/l10n/lib/useI18n";
import Button from "@paprika/button/lib/Button";
import UploadIcon from "@paprika/icon/lib/Upload";
import { UploaderContext } from "../../Uploader";
import * as sc from "./DropZone.styles";

export default function DropZone() {
  const I18n = useI18n();
  const { refInput, FileInput, isDraggingOver } = React.useContext(UploaderContext);
  const uploadIconColor = isDraggingOver ? tokens.color.purpleDarken10 : tokens.color.blackLighten50;

  const body = isDraggingOver ? (
    I18n.t("uploader.drop_files")
  ) : (
    <React.Fragment>
      {I18n.t("uploader.drop_files_here_or")}&nbsp;
      <Button
        kind={Button.Kinds.LINK}
        onClick={() => {
          refInput.current.click();
        }}
        isSemantic={false}
        tabIndex={-1}
        aria-hidden
      >
        {I18n.t("uploader.choose_from_computer")}
      </Button>
    </React.Fragment>
  );

  return (
    <FileInput>
      <sc.DropZone isDraggingOver={isDraggingOver}>
        <UploadIcon size={stylers.spacer(4)} color={uploadIconColor} />
        <sc.Body>{body}</sc.Body>
      </sc.DropZone>
    </FileInput>
  );
}
