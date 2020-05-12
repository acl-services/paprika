import React from "react";
import { css } from "styled-components";
import Button from "@paprika/button";
import tokens from "@paprika/tokens";
import UploadIcon from "wasabicons/lib/Upload";
import { UploaderContext } from "../../Uploader";

// TODO: use tokens
// TODO: L10n

function DefaultFileInput() {
  const uc = React.useContext(UploaderContext);
  const isDraggingOver = uc.isDraggingOver;

  const draggingOverStyles = css`
    background-color: #f6f6fa;
    border: 2px solid #51509b;
    color: #51509b;
  `;

  const styles = css`
    align-items: center;
    background-color: #efefef;
    border: 2px dashed #9d9d9d;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    padding: ${tokens.space};

    ${isDraggingOver && draggingOverStyles}
    a {
      color: #0063c5;
    }
  `;

  const uploadIconColor = isDraggingOver ? "#51509b" : "#bdbdbd";
  const body = isDraggingOver ? (
    <React.Fragment>Drop files to upload</React.Fragment>
  ) : (
    <React.Fragment>
      Drop files to upload here or
      <Button
        kind="link"
        onClick={() => {
          uc.refInput.current.click();
        }}
      >
        choose from your computer
      </Button>
    </React.Fragment>
  );

  return (
    <uc.FileInput>
      <div css={styles}>
        <UploadIcon size="32px" color={uploadIconColor} />
        {body}
      </div>
    </uc.FileInput>
  );
}

export default DefaultFileInput;
