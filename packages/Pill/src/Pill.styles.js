import styled from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import RawButton from "@paprika/raw-button";

const commonPillStyles = styled.div`
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
`;

const pillColorStyles = {
  black: `
    background: ${tokens.color.black};
  `,

  blue: `
    background: ${tokens.color.blue};
  `,

  grey: `
    background: ${tokens.color.blackLighten60};
    color: ${tokens.color.black};
  `,

  green: `
    background: ${tokens.color.greenDarken10};
  `,

  orange: `
    background: ${tokens.color.orangeDarken10};
  `,

  noRisk: `
    background: ${tokens.color.blackLighten60};
    color: ${tokens.color.black};
  `,

  lightBlue: `
    background: ${tokens.color.blueLighten50};
    color: ${tokens.color.blueDarken20};
  `,

  lightOrange: `
    background: ${tokens.color.orangeLighten40};
    color: ${tokens.color.orangeDarken20};
  `,

  lowRisk: `
    background: #299a7a;
  `,

  mediumRisk: `
    background: #c9af28;
  `,

  highRisk: `
    background: #cd3c44;
  `,
};

const pillSizeStyles = {
  small: `
    border-radius: ${tokens.pill.smallRadius};
    font-weight: bold;
    height: ${stylers.spacer(2)};
    padding: 0 ${tokens.space};
    ${stylers.fontSize(-3)};
  `,

  medium: `
    border-radius: ${tokens.pill.mediumRadius};
    height: ${stylers.spacer(3)};
    padding: 0 ${stylers.spacer(4)};
    ${stylers.fontSize(-1)};
  `,
};

export const pillStyles = styled(commonPillStyles)`
  ${props => {
    const size = pillSizeStyles[props.size];
    const pillColor = pillColorStyles[props.pillColor];

    return `
    ${size};
    ${pillColor};`;
  }}
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
