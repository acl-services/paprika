import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import styled, { css } from "styled-components";
import Button from "@paprika/button/lib/Button";

export const DropZone = styled.div(
  ({ isDraggingOver }) => css`
    ${stylers.fontSize()};
    align-items: center;
    background-color: ${tokens.color.blackLighten80};
    border: 2px dashed ${tokens.color.blackLighten30};
    border-radius: ${tokens.border.radius};
    display: flex;
    justify-content: center;
    padding: ${tokens.space};
    text-align: center;
    ${isDraggingOver &&
      css`
        background-color: ${tokens.color.blackLighten80};
        border: 2px solid ${tokens.color.purpleDarken10};
        color: ${tokens.color.purpleDarken10};
      `}
  `
);

export const DropZoneButton = styled(Button)`
  ${stylers.fontSize()};
  margin-top: -${tokens.spaceSm};
  min-height: auto;
  padding: 0;
`;

export const Body = styled.div`
  display: inline;
  margin-left: ${tokens.space};
`;

export const DropZoneIcon = styled.span`
  flex-shrink: 0;
`;

export const Input = styled.input`
  ${stylers.visuallyHidden};
  &:focus + div span[role="button"] {
    ${stylers.focusRing.bordered()};
  }
`;
