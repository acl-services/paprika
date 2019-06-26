import styled, { css } from "styled-components";

import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const KnobPositionStyles = {
  small: css`
    transform: translateX(12px);
  `,
  medium: css`
    transform: translate(20px, 0);
  `,
  large: css`
    transform: translate(28px);
  `,
};

const KnobSizeStyles = {
  small: css`
    height: 12px;
    width: 12px;

    &::after {
      height: 13px;
    }
  `,
  medium: css`
    height: 20px;
    width: 20px;

    &::after {
      height: 21px;
    }
  `,
  large: css`
    height: 28px;
    width: 28px;

    &::after {
      height: 29px;
    }
  `,
};

const UnderlaySizeStyles = {
  small: css`
    height: ${stylers.spacer(2)};
    width: 28px;
  `,
  medium: css`
    height: ${stylers.spacer(3)};
    width: 44px;
  `,
  large: css`
    height: ${stylers.spacer(4)};
    width: 60px;
  `,
};

export const KnobStyled = styled.span`
  background-color: ${tokens.color.white};
  border-radius: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  display: inline-block;
  left: 2px;
  position: absolute;
  top: 2px;
  transition: transform 0.25s ease;
`;

export const UnderlayStyled = styled.span`
  background-color: ${tokens.color.blackLighten50};
  border-radius: 50px;
  display: inline-block;
  position: absolute;
  transition: 0.25s ease-in-out;
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  vertical-align: middle;
`;

const disabledStyles = css`
  ${UnderlayStyled} {
    box-shadow: none;
  }

  ${KnobStyled} {
    box-shadow: none;

    &::after {
      content: "";
      display: block;
      left: 50%;
      position: absolute;
      width: 2px;
      transform: rotate(45deg) translateX(-50%);
    }
  }

  &[aria-checked="true"] {
    ${UnderlayStyled},
    ${KnobStyled}::after {
      background-color: ${tokens.color.greenLighten30};
    }
  }

  &[aria-checked="false"] {
    ${UnderlayStyled},
    ${KnobStyled}::after {
      background-color: ${tokens.color.blackLighten60};
    }
  }
`;
const switchStyles = css`
  position: relative;

  &,
  * {
    box-sizing: border-box;
  }

  ${({ size }) => UnderlaySizeStyles[size]}

  ${UnderlayStyled} {
    ${({ size }) => UnderlaySizeStyles[size]}
  }

  ${KnobStyled} {
    ${({ size }) => KnobSizeStyles[size]}
  }

  &:focus {
    box-shadow: none;

    ${UnderlayStyled} {
      box-shadow: ${tokens.highlight.active.withBorder.boxShadow};
    }
  }

  &[aria-checked="true"] {
    ${UnderlayStyled} {
      background-color: ${tokens.color.green};
    }

    ${KnobStyled} {
      ${({ size }) => KnobPositionStyles[size]}
    }
  }

  ${({ isDisabled }) => (isDisabled ? disabledStyles : null)}
`;

export default switchStyles;
