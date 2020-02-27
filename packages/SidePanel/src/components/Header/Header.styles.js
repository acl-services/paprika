import styled, { css } from "styled-components";
import { spacer } from "@paprika/stylers/lib/helpers";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens/lib/tokens";
import Button from "@paprika/button";

const kind = {
  [Button.Kinds.DEFAULT]: `background: ${tokens.color.white}; color: ${tokens.color.black};`,
  [Button.Kinds.PRIMARY]: `background: ${tokens.color.purple}; color: ${tokens.color.white};`,
};

const compactStyles = `
  height: ${spacer(6)};
  padding: ${tokens.spaceLg} ${spacer(2)};
  
  [data-pka-anchor="heading"] {
    margin: 0;
  }
`;

export const Header = styled.div`
  align-items: center;
  border-bottom: 1px solid ${tokens.border.color};
  box-sizing: border-box;
  display: flex;
  height: ${spacer(8)};
  justify-content: space-between;
  min-height: ${spacer(6)};
  padding: ${spacer(2)} ${spacer(3)};
  width: 100%;
  &:focus {
    outline: 0;
  }

  [data-pka-anchor="heading"] {
    ${stylers.truncateText}
    display: block;
    margin: 0;
  }

  ${props => {
    const borderColor = `1px solid ${tokens.border.color}`;

    let borderLeft = "";
    let borderRight = "";

    if (!props.hasShadow && !(props.kind === "primary")) {
      if (props.isSlideFromLeft) {
        borderRight = borderColor;
      } else {
        borderLeft = borderColor;
      }
    }
    return css`
      border-left: ${borderLeft};
      border-right: ${borderRight};
      [data-pka-anchor="button.icon"] {
        ${props.kind === [Button.Kinds.PRIMARY] ? `color: ${tokens.color.white}` : "color: inherit"}
      }

      ${props.isCompact ? compactStyles : ""}
      ${props.kind ? kind[props.kind] : ""}
    `;
  }}
`;
