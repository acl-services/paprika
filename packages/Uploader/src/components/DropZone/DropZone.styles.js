import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import styled, { css } from "styled-components";

export const Container = styled.div`
  label {
    cursor: pointer;
    display: inline-block;
    height: 100%;
    position: absolute;
    width: 100%;
  }

  input[type="file"] {
    ${stylers.visuallyHidden};
    height: 100%;
    position: absolute;
    width: 100%;
    &:focus + label {
      box-shadow: ${tokens.highlight.active.withBorder.boxShadow};
    }

    &:focus + div span[data-pka-anchor="button"] {
      ${stylers.focusRing.bordered()};
    }
  }
`;

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

    ${isDraggingOver &&
      css`
        background-color: ${tokens.color.blackLighten80};
        border: 2px solid ${tokens.color.purpleDarken10};
        color: ${tokens.color.purpleDarken10};
      `}

    span[data-pka-anchor='button'] {
      ${stylers.fontSize()};
      margin-top: -${tokens.spaceSm};
      min-height: auto;
      padding: 0;
    }
    span[data-pka-anchor="uploader-dropZone-link"] {
      margin-bottom: 3px;
    }
  `,
  `text-align: center;
  `
);

export const Body = styled.div`
  display: inline;
  margin-left: ${tokens.space};
`;

export const DropZoneIcon = styled.span`
  flex-shrink: 0;
`;
