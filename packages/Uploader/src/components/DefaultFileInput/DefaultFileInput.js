import React from "react";
import PropTypes from "prop-types";
import { css } from "styled-components";
import tokens from "@paprika/tokens";
import UploadIcon from "wasabicons/lib/Upload";

// TODO: use tokens
// TODO: L10n

const propTypes = {
  fileInputRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
  isDraggingOver: PropTypes.bool,
};

const defaultProps = {
  isDraggingOver: false,
};

function DefaultFileInput({ fileInputRef, isDraggingOver }) {
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

  return (
    <div css={styles}>
      <UploadIcon size="32px" color={uploadIconColor} />
      &nbsp;Drop files here to upload
      {!isDraggingOver && (
        <span>
          &nbsp;or&nbsp;
          <a
            href="javascript: return false;"
            onClick={() => {
              fileInputRef.current.click();
            }}
          >
            choose from your computer
          </a>
        </span>
      )}
    </div>
  );
}

DefaultFileInput.defaultProps = defaultProps;
DefaultFileInput.propTypes = propTypes;

export default DefaultFileInput;
