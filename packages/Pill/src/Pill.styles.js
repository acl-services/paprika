import { css } from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

const pillColorStyles = {
  BLACK: css`
    background: ${tokens.color.black};
  `,

  BLUE: css`
    background: ${tokens.color.blue};
  `,

  GREY: css`
    background: ${tokens.color.blackLighten60};
    color: ${tokens.color.black};
  `,

  GREEN: css`
    background: ${tokens.color.greenDarken10};
  `,

  ORANGE: css`
    background: ${tokens.color.orangeDarken10};
  `,

  NO_RISK: css`
    background: ${tokens.color.blackLighten60};
    color: ${tokens.color.black};
  `,

  LIGHT_BLUE: css`
    background: ${tokens.color.blueLighten50};
    color: ${tokens.color.blueDarken20};
  `,

  LIGHT_ORANGE: css`
    background: ${tokens.color.orangeLighten40};
    color: ${tokens.color.orangeDarken20};
  `,

  LOW_RISK: css`
    background: #299a7a;
  `,

  MEDIUM_RISK: css`
    background: #c9af28;
  `,

  HIGH_RISK: css`
    background: #cd3c44;
  `,
};

const pillSizeStyles = {
  SMALL: css`
    border-radius: ${tokens.pill.smallRadius};
    font-weight: bold;
    height: ${stylers.spacer(2)};
    padding: 0 ${tokens.space};
    ${stylers.fontSize(-3)};
  `,

  MEDIUM: css`
    border-radius: ${tokens.pill.mediumRadius};
    height: ${stylers.spacer(3)};
    padding: 0 ${stylers.spacer(4)};
    ${stylers.fontSize(-1)};
  `,
};

const pillStyles = css`
  align-items: center;
  color: ${tokens.color.white};
  display: inline-flex;
  max-width: 100%;

  &,
  * {
    box-sizing: border-box;
  }

  &:focus {
    outline: 0;
  }

  svg {
    margin-right: ${tokens.spaceSm};
  }

  ${({ size }) => pillSizeStyles[size]}
  ${({ pillColor }) => pillColorStyles[pillColor]}
`;

export const pillTextStyles = css`
  ${stylers.truncateText};
  align-items: center;
  display: inline-flex;
`;

export default pillStyles;
