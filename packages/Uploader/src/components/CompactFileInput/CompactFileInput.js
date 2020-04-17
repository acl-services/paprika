import React from "react";
import PropTypes from "prop-types";
import { css } from "styled-components";
import Button from "@paprika/button";
import tokens from "@paprika/tokens";

// TODO: this is very similar to the "DefaultFileInput". See if can merge them.

const propTypes = {
  fileInputRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
  isDraggingOver: PropTypes.bool,
};

const defaultProps = {
  isDraggingOver: false,
};

function CompactFileInput({ fileInputRef, isDraggingOver }) {
  const draggingOverStyles = css`
    background-color: #ddd;
    border: 2px solid purple;
  `;

  const styles = css`
    align-items: center;
    background-color: #efefef;
    border: 2px dashed purple;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    padding: ${tokens.space};

    ${isDraggingOver && draggingOverStyles}
  `;

  return (
    <div css={styles}>
      <Button
        kind="link"
        onClick={() => {
          fileInputRef.current.click();
        }}
      >
        Browse
      </Button>
      &nbsp;or drop your file here
    </div>
  );
}

CompactFileInput.defaultProps = defaultProps;
CompactFileInput.propTypes = propTypes;

export default CompactFileInput;
