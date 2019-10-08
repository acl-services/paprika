import { css } from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";

const PillColorStyles = {
  "#d7d7d7": css`
    color: ${tokens.color.black};

    svg {
      fill: ${tokens.color.black};
    }
  `,

  noRisk: css`
    background: ${tokens.color.blackLighten60};
    color: ${tokens.color.black};
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

const PillSizeStyles = {
  small: css`
    border-radius: 8px / 50%;
    font-weight: bold;
    line-height: ${stylers.spacer(2)};
    padding: 0 ${tokens.space};
    ${stylers.fontSize(-3)};

    .aclui-icon::before {
      ${stylers.fontSize(-3)};
    }
  `,
  medium: css`
    border-radius: 12px / 50%;
    line-height: ${stylers.spacer(3)};
    padding: 0 ${stylers.spacer(4)};
    ${stylers.fontSize(-1)};
  `,
};

const pillStyles = css`
  align-items: center;
  background: ${props => props.pillColor};
  color: ${props => props.textColor};
  display: inline-flex;
  white-space: nowrap;

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

  ${({ size }) => PillSizeStyles[size]}
  ${({ pillColor }) => PillColorStyles[pillColor]}
`;

export default pillStyles;
