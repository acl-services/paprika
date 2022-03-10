import React from "react";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import useI18n from "@paprika/l10n/lib/useI18n";
import Button from "@paprika/button/lib/Button";
import UploadIcon from "@paprika/icon/lib/Upload";
import { UploaderContext } from "../../Uploader";
import * as sc from "./DropZone.styles";

const DropZone = React.memo(() => {
  const I18n = useI18n();
  const {
    canChooseMultiple,
    extendedInputProps,
    handleChange,
    isDraggingOver,
    label,
    morePropsOnUploaderWrapper,
    refContainer,
    refInput,
    supportedMimeTypes,
    isBusy,
    isDisabled,
  } = React.useContext(UploaderContext);
  const uploadIconColor = isDraggingOver ? tokens.color.purpleDarken10 : tokens.color.blackLighten50;

  const body = isDraggingOver ? (
    I18n.t("uploader.drop_files")
  ) : (
    <>
      {I18n.t("uploader.drop_files_here_or")}&nbsp;
      <sc.DropZoneButton
        data-pka-anchor="uploader-dropZone-link"
        kind={Button.types.kind.LINK}
        onClick={() => {
          refInput.current.click();
        }}
        isSemantic={false}
        tabIndex={-1}
        isDisabled={isDisabled || isBusy}
      >
        {I18n.t("uploader.choose_from_computer")}
      </sc.DropZoneButton>
    </>
  );

  return (
    <div ref={refContainer} data-pka-anchor="uploader" {...morePropsOnUploaderWrapper}>
      <sc.Input
        data-pka-anchor="uploader.input"
        multiple={canChooseMultiple}
        onChange={handleChange}
        ref={refInput}
        type="file"
        accept={supportedMimeTypes.join(",")}
        aria-label={label}
        {...extendedInputProps}
      />
      <sc.DropZone aria-hidden isDraggingOver={isDraggingOver}>
        <sc.DropZoneIcon>
          <UploadIcon data-pka-anchor="uploader-dropZone-uploadIcon" size={stylers.spacer(4)} color={uploadIconColor} />
        </sc.DropZoneIcon>
        <sc.Body>{body}</sc.Body>
      </sc.DropZone>
    </div>
  );
});

export default DropZone;
