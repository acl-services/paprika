import styled, { css } from "styled-components";
import RawButton from "@paprika/raw-button";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const KnobPositionStyles = {
  small: css`
    transform: translateX(12px);
  `,
  medium: css`
    transform: translate(16px, 0);
  `,
  large: css`
    transform: translate(20px);
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
    height: 16px;
    width: 16px;

    &::after {
      height: 17px;
    }
  `,
  large: css`
    height: 20px;
    width: 20px;

    &::after {
      height: 21px;
    }
  `,
};

const UnderlaySizeStyles = {
  small: css`
    height: ${stylers.spacer(2)};
    width: 28px;
  `,
  medium: css`
    height: ${stylers.spacer(2.5)};
    width: 36px;
  `,
  large: css`
    height: ${stylers.spacer(3)};
    width: 44px;
  `,
};

export const Knob = styled.span`
  background-color: ${tokens.color.white};
  border-radius: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  display: inline-block;
  left: 2px;
  position: absolute;
  top: 2px;
  transition: transform 0.25s ease;
`;

export const Underlay = styled.span`
  background-color: ${tokens.color.blackLighten50};
  border-radius: 50px;
  display: inline-block;
  position: absolute;
  transition: 0.25s ease-in-out;
  user-select: none;
  vertical-align: middle;
`;

const disabledStyles = css`
  ${Underlay} {
    box-shadow: none;
  }

  ${Knob} {
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
    ${Underlay},
    ${Knob}::after {
      background-color: ${tokens.color.greenLighten30};
    }
  }

  &[aria-checked="false"] {
    ${Underlay},
    ${Knob}::after {
      background-color: ${tokens.color.blackLighten60};
    }
  }
`;
export const Switch = styled(RawButton)(
  ({ size, isDisabled }) => css`
    position: relative;

    &,
    * {
      box-sizing: border-box;
    }

    ${UnderlaySizeStyles[size]}

    ${Underlay} {
      ${UnderlaySizeStyles[size]}
    }

    ${Knob} {
      ${KnobSizeStyles[size]}
    }

    &:focus {
      box-shadow: none;

      ${Underlay} {
        box-shadow: ${tokens.highlight.active.withBorder.boxShadow};
      }
    }

    &[aria-checked="true"] {
      ${Underlay} {
        background-color: ${tokens.color.green};
      }

      ${Knob} {
        ${KnobPositionStyles[size]}
      }
    }

    ${isDisabled ? disabledStyles : null}
  `
);
