import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import RawButton from "@paprika/raw-button";

const KnobSizeStyles = {
  small: `
    height: 12px;
    width: 12px;

    &::after {
      height: 13px;
    }
  `,
  medium: `
    height: 20px;
    width: 20px;

    &::after {
      height: 21px;
    }
  `,
  large: `
    height: 28px;
    width: 28px;

    &::after {
      height: 29px;
    }
  `,
};

const UnderlaySizeStyles = {
  small: `
    height: ${stylers.spacer(2)};
    width: 28px;
  `,
  medium: `
  height:  ${stylers.spacer(3)};
  width: 44px;
  `,
  large: `
  height:${stylers.spacer(4)};
  width: 60px;
  `,
};

const KnobPositionStyles = {
  small: `
  transform: translateX(12px);
  `,
  medium: `
    transform: translate(20px, 0);
  `,
  large: `
  transform: translate(28px);
  `,
};

const DisabledKnobStyles = `
  box-shadow: none;
  &::after {
    content: "";
    display: block;
    left: 50%;
    position: absolute;
    width: 2px;
    transform: rotate(45deg) translateX(-50%);
  }
`;

export const KnobStyled = styled.span`
  background-color: ${tokens.color.white};
  border-radius: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  display: inline-block;
  left: 2px;
  position: absolute;
  top: 2px;
  transition: transform 0.25s ease;

  ${({ size }) => KnobSizeStyles[size]}
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

  ${({ size }) => UnderlaySizeStyles[size]}
`;

const SwitchStyled = styled(RawButton)`
  position: relative;

  &,
  * {
    box-sizing: border-box;
  }

  ${({ size }) => UnderlaySizeStyles[size]}

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

  &[aria-checked="false"] {
  }

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      ${UnderlayStyled} {
        box-shadow: none;
      }

      &[aria-checked="true"] {
        ${UnderlayStyled} {
          background-color: ${tokens.color.greenLighten30};
        }

        ${KnobStyled} {
          ${DisabledKnobStyles}
          &::after {
            background-color: ${tokens.color.greenLighten30};
          }
        }
      }

      &[aria-checked="false"] {
        ${UnderlayStyled} {
          background-color: ${tokens.color.blackLighten60};
        }

        ${KnobStyled} {
          ${DisabledKnobStyles}
          &::after {
            background-color: ${tokens.color.blackLighten60};
          }
        }
      }
    `}
`;

export default SwitchStyled;
