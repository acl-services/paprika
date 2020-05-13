import React from "react";
import { css } from "styled-components";
import Button from "@paprika/button";
import tokens from "@paprika/tokens";
import UploadIcon from "wasabicons/lib/Upload";
import { UploaderContext } from "../../Uploader";

// TODO: L10n

function DefaultFileInput() {
  const uc = React.useContext(UploaderContext);
  const isDraggingOver = uc.isDraggingOver;

  const draggingOverStyles = css`
    background-color: ${tokens.color.blackLighten80};
    border: 2px solid ${tokens.color.purpleDarken10};
    color: ${tokens.color.purpleDarken10};
  `;

  const styles = css`
    align-items: center;
    background-color: ${tokens.color.blackLighten80};
    border: 2px dashed ${tokens.color.blackLighten30};
    border-radius: ${tokens.border.radius};
    display: flex;
    justify-content: center;
    padding: ${tokens.space};

    ${isDraggingOver && draggingOverStyles}
    a {
      color: ${tokens.color.blueDarken10};
    }
  `;

  const uploadIconColor = isDraggingOver ? tokens.color.purpleDarken10 : tokens.color.blackLighten50;
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
