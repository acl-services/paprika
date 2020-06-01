import tokens from "@paprika/tokens";
import styled, { css } from "styled-components";

export const DropZone = styled.div`
  align-items: center;
  background-color: ${tokens.color.blackLighten80};
  border: 2px dashed ${tokens.color.blackLighten30};
  border-radius: ${tokens.border.radius};
  display: flex;
  justify-content: center;
  padding: ${tokens.space};

  ${({ isDraggingOver }) => {
    return (
      isDraggingOver &&
      css`
        background-color: ${tokens.color.blackLighten80};
        border: 2px solid ${tokens.color.purpleDarken10};
        color: ${tokens.color.purpleDarken10};
      `
    );
  }}

  a {
    color: ${tokens.color.blueDarken10};
  }
`;

export const Body = styled.div`
  display: inline;
  margin-left: ${tokens.space};
`;
