import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import styled, { css } from "styled-components";

export const DropZone = styled.div`
  ${stylers.fontSize()};
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

  span[data-pka-anchor='button'] {
    ${stylers.fontSize()};
    margin-top: -${tokens.spaceSm};
    min-height: auto;
    padding: 0;
  }
`;

export const Body = styled.div`
  display: inline;
  margin-left: ${tokens.space};
`;
