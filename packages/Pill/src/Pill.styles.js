import styled, { css } from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import RawButton from "@paprika/raw-button";

const pillColorStyles = {
  black: css`
    background: ${tokens.color.black};
  `,

  blue: css`
    background: ${tokens.color.blue};
  `,

  grey: css`
    background: ${tokens.color.blackLighten60};
    color: ${tokens.color.black};
  `,

  green: css`
    background: ${tokens.color.greenDarken10};
  `,

  orange: css`
    background: ${tokens.color.orangeDarken10};
  `,

  noRisk: css`
    background: ${tokens.color.blackLighten60};
    color: ${tokens.color.black};
  `,

  lightBlue: css`
    background: ${tokens.color.blueLighten50};
    color: ${tokens.color.blueDarken20};
  `,

  lightOrange: css`
    background: ${tokens.color.orangeLighten40};
    color: ${tokens.color.orangeDarken20};
  `,

  lowRisk: css`
    background: #299a7a;
  `,

  mediumRisk: css`
    background: #c9af28;
  `,

  highRisk: css`
    background: #cd3c44;
  `,
};

const pillSizeStyles = {
  small: css`
    border-radius: ${tokens.pill.smallRadius};
    font-weight: bold;
    height: ${stylers.spacer(2)};
    padding: 0 ${tokens.space};
    ${stylers.fontSize(-3)};
  `,

  medium: css`
    border-radius: ${tokens.pill.mediumRadius};
    height: ${stylers.spacer(3)};
    padding: 0 ${stylers.spacer(4)};
    ${stylers.fontSize(-1)};
  `,
};

export const pillStyles = styled.div`
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

export const rawPillStyle = styled(RawButton)`
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

export const pillTextStyles = styled.span`
  ${stylers.truncateText};
  align-items: center;
  display: inline-flex;
`;
