import { fontSize, spacer } from "@paprika/stylers/lib/helpers";
import tokens from "@paprika/tokens/lib/tokens";
import Button from "@paprika/button";

const kind = {
  [Button.Kinds.DEFAULT]: `background: ${tokens.color.white}; color: ${tokens.color.black};`,
  [Button.Kinds.PRIMARY]: `background: ${tokens.color.purple}; color: ${tokens.color.white};`,
};

const compactStyles = `
  height: ${spacer(7)};
  padding: 0 ${spacer(2)};
  
  [data-pka-anchor="heading"] {
    ${fontSize(1)};
    font-weight: 700;
    margin: 0;
  }
`;

export const headerCSS = props => `
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
    ${fontSize(3)};
    font-weight: 700;
    margin: 0;
  }

  ${props.isCompact ? compactStyles : ""}
  ${props => kind[props.kind]}
`;
