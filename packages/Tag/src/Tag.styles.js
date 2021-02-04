import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import RawButton from "@paprika/raw-button";
import { fontSize } from "@paprika/stylers/lib/helpers";
import { truncateText } from "@paprika/stylers/lib/includes";

export const Tags = styled.ul(() => {
  return css`
    display: flex;
    flex-wrap: wrap;
    line-height: 1;
    margin: 0;
    padding: 0;
  `;
});

export const Tag = styled.li(() => {
  return css`
    align-items: center;
    background: ${tokens.color.blackLighten70};
    border-radius: ${tokens.space[0] * 2}px;
    display: flex;
    line-height: 1;
    margin-bottom: 2px;
    margin-right: ${tokens.spaceSm};
    max-width: 100%;
    padding: 2px;

    [data-pka-anchor="avatar"] {
      margin-right: ${tokens.space};
    }
  `;
});

export const Ellipsis = styled.div(({ isChildString, size }) => {
  const getFontSize = {
    medium: fontSize(-1),
    large: fontSize(0),
  };

  const paddingGap = {
    medium: `${tokens.space[0] / 2}px`,
    large: tokens.space,
  };

  const padding = isChildString
    ? `padding: 0 ${paddingGap[size]} 1px ${paddingGap[size]};`
    : `padding-right: ${paddingGap[size]}`;

  return css`
    align-items: center;
    display: block;
    ${getFontSize[size]};
    ${padding};
    ${truncateText};
  `;
});

export const Delete = styled(RawButton)(({ size }) => {
  const fontSize = {
    medium: "10px",
    large: "12px",
  };

  const padding = {
    medium: "4px",
    large: "5px",
  };

  const width = {
    medium: "20px",
    large: "24px",
  };

  return css`
    align-items: center;
    border-radius: 50%;
    box-sizing: border-box;
    display: flex;
    flex: 0 0 auto;
    font-size: ${fontSize[size]};
    height: ${width[size]};
    justify-content: center;
    padding: ${padding[size]};
    width: ${width[size]};

    &:hover {
      background: ${tokens.color.blackLighten60};
    }

    &:focus {
      background: ${tokens.color.blackLighten60};
    }

    & svg {
      color: ${tokens.color.blackLighten20};
      pointer-events: none;
    }
  `;
});
