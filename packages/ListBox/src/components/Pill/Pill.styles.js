import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import RawButton from "@paprika/raw-button";

export const Pills = styled.ul(() => {
  return css`
    display: flex;
    flex-wrap: wrap;
    line-height: 1;
    margin: 0;
    padding: 0;
  `;
});

export const Pill = styled.li(({ size }) => {
  const padding = {
    medium: "2px",
    large: "4px",
  };

  return css`
    align-items: center;
    background: ${tokens.color.blackLighten70};
    border-radius: ${tokens.space[0] * 2}px;
    display: flex;
    line-height: 1;
    margin-bottom: ${tokens.spaceSm};
    margin-right: ${tokens.spaceSm};
    max-width: 100%;
    padding: ${padding[size]};

    [data-pka-anchor="avatar"] {
      margin-right: ${tokens.space};
    }
  `;
});

export const Ellipsis = styled.div(({ size }) => {
  const fontSize = {
    medium: "14px",
    large: "16px",
  };

  return css`
    display: inline-block;
    font-size: ${fontSize[size]};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: calc(99%);
  `;
});

export const Delete = styled(RawButton)(({ size }) => {
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
    height: ${width[size]};
    justify-content: center;
    margin-left: ${tokens.space};
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
