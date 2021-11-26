import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import TimesCircleIcon from "@paprika/icon/lib/TimesCircle";
import { fontSize, spacer } from "@paprika/stylers/lib/helpers";
import { truncateText } from "@paprika/stylers/lib/includes";
import * as types from "./types";

export const Tags = styled.ul(
  () => css`
    display: flex;
    flex-wrap: wrap;
    line-height: 1;
    list-style-type: none;
    margin: 0;
    padding: 0;
  `
);

const widthAndHeight = {
  medium: "24px",
  large: "28px",
};

const avatarWidthAndHeight = {
  medium: "20px",
  large: "24px",
};

const tagStyles = ({ theme, size }) => css`
  align-items: center;
  background: ${tokens.color.blackLighten70};
  border-radius: ${spacer(2)};
  box-sizing: border-box;
  color: ${tokens.color.white};
  display: flex;
  height: ${widthAndHeight[size]};
  line-height: 1;
  margin-bottom: 2px;
  margin-right: ${tokens.spaceSm};
  max-width: 100%;
  padding: 2px;
  ${themeStyles[theme]}

  [data-pka-anchor="avatar"] {
    height: ${avatarWidthAndHeight[size]};
    min-width: ${avatarWidthAndHeight[size]};
  }
`;

export const Tag = styled.div(tagStyles);

export const Ellipsis = styled.div(({ size }) => {
  const getFontSize = {
    medium: fontSize(-1),
    large: fontSize(0),
  };

  return css`
    align-items: center;
    display: block;
    ${getFontSize[size]};
    padding: 0 ${tokens.space} 1px ${tokens.space};
    ${truncateText};
  `;
});

export const Delete = styled(TimesCircleIcon)(({ size }) => {
  const fontSize = {
    medium: "20px",
    large: "24px",
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
    flex-shrink: 0;
    font-size: ${fontSize[size]};
    height: ${width[size]};
    justify-content: center;
    min-height: auto;
    width: ${width[size]};

    &:focus {
      background: ${tokens.color.blackLighten60};
    }
  `;
});

const themeStyles = {
  [types.themes.BLACK]: css`
    background: ${tokens.color.black};

    ${Delete} {
      color: ${tokens.color.blackLighten70};
      &:hover {
        color: ${tokens.color.blackLighten60};
      }
    }
  `,

  [types.themes.BLUE]: css`
    background: ${tokens.color.blue};

    ${Delete} {
      color: ${tokens.color.blackLighten70};
      &:hover {
        color: ${tokens.color.blackLighten60};
      }
    }
  `,

  [types.themes.GREY]: css`
    background: ${tokens.color.blackLighten70};
    color: ${tokens.color.black};

    ${Delete} {
      color: ${tokens.color.blackLighten30};
      &:hover {
        color: ${tokens.color.blackLighten20};
      }
    }
  `,

  [types.themes.GREEN]: css`
    background: ${tokens.color.greenDarken10};

    ${Delete} {
      color: ${tokens.color.blackLighten70};
      &:hover {
        color: ${tokens.color.blackLighten60};
      }
    }
  `,

  [types.themes.ORANGE]: css`
    background: ${tokens.color.orangeDarken10};

    ${Delete} {
      color: ${tokens.color.blackLighten70};
      &:hover {
        color: ${tokens.color.blackLighten60};
      }
    }
  `,

  [types.themes.LIGHT_BLUE]: css`
    background: ${tokens.color.blueLighten50};
    color: ${tokens.color.blueDarken20};

    ${Delete} {
      color: ${tokens.color.blackLighten30};
      &:hover {
        color: ${tokens.color.blackLighten20};
      }
    }
  `,

  [types.themes.LIGHT_ORANGE]: css`
    background: ${tokens.color.orangeLighten40};
    color: ${tokens.color.orangeDarken20};

    ${Delete} {
      color: ${tokens.color.blackLighten30};
      &:hover {
        color: ${tokens.color.blackLighten20};
      }
    }
  `,

  [types.severityThemes.NO_RISK]: css`
    background: ${tokens.color.blackLighten70};
    color: ${tokens.color.black};

    ${Delete} {
      color: ${tokens.color.blackLighten30};
      &:hover {
        color: ${tokens.color.blackLighten20};
      }
    }
  `,

  [types.severityThemes.LOW_RISK]: css`
    background: #299a7a;

    ${Delete} {
      color: ${tokens.color.blackLighten70};
      &:hover {
        color: ${tokens.color.blackLighten60};
      }
    }
  `,

  [types.severityThemes.MEDIUM_RISK]: css`
    background: #c9af28;

    ${Delete} {
      color: ${tokens.color.blackLighten70};
      &:hover {
        color: ${tokens.color.blackLighten60};
      }
    }
  `,

  [types.severityThemes.HIGH_RISK]: css`
    background: #cd3c44;

    ${Delete} {
      color: ${tokens.color.blackLighten70};
      &:hover {
        color: ${tokens.color.blackLighten60};
      }
    }
  `,

  [types.severityThemes.ALERT]: css`
    background: none;
    border: 1px solid ${tokens.color.orangeDarken10};
    color: ${tokens.color.orangeDarken10};

    ${Delete} {
      color: ${tokens.color.blackLighten30};
      &:hover {
        color: ${tokens.color.blackLighten20};
      }
    }
  `,
};
