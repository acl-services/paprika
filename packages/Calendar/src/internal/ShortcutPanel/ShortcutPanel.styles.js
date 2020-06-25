import { css } from "styled-components";

import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

import { hoveredItemStyles, selectedItemStyles, visuallyHiddenStyles } from "../shared.styles";

export const actionBarStyles = css`
  align-items: center;
  background: ${tokens.color.blackLighten80};
  border-top: 1px solid ${tokens.border.color};
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  height: ${stylers.spacer(5)};
  padding-left: ${tokens.spaceLg};
  position: absolute;
  width: 100%;

  > [type="button"] {
    flex-shrink: 0;

    &:last-child {
      margin-left: ${tokens.spaceSm};
    }
  }
`;

const yearColumnHeaderStyles = css`
  border-left: 1px solid ${tokens.border.color};
  justify-content: space-between;
`;

export const columnHeaderStyles = css`
  align-items: center;
  background: ${tokens.color.blackLighten80};
  border-bottom: 1px solid ${tokens.border.color};
  display: flex;
  flex-shrink: 0;
  font-weight: bold;
  height: ${stylers.spacer(5)};
  justify-content: center;
  padding: ${tokens.space};

  ${({ isYear }) => (isYear ? yearColumnHeaderStyles : null)}
`;

export const containerStyles = css`
  ${stylers.fontSize(-1)};
  background-color: ${tokens.color.white};
  border: 1px solid ${tokens.border.color};
  border-radius: ${tokens.border.radius};
  box-sizing: border-box;
  color: ${tokens.color.black};
  height: 245px;
  overflow: hidden;
  position: relative;
  width: 257px;

  &:focus {
    outline: none;
  }

  ${props => !props.isVisible && visuallyHiddenStyles}

  * {
    box-sizing: border-box;
  }

  div[role="group"] {
    border: 0;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0;
    overflow: hidden;
    padding: 5px ${tokens.spaceLg} ${tokens.spaceSm} ${tokens.spaceLg};

    /* prevent acl-ui3 label style overrides */
    input[type="radio"] + label {
      display: flex;
      margin: auto;
    }
  }
`;

export const labelStyles = css`
  align-items: center;
  border-radius: ${tokens.border.radius};
  cursor: pointer;
  display: flex;
  height: 22px;
  justify-content: center;
  width: 46px;

  &:hover {
    ${hoveredItemStyles}
  }

  ${({ isSelected }) => (isSelected ? selectedItemStyles : null)}
`;

export const listStyles = css`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const optionWrapperStyles = css`
  margin-bottom: 1px;
  margin-right: ${tokens.spaceLg};

  input[type="radio"] {
    display: block;
    height: 0;
    margin: 0;
    visibility: hidden;
    width: 0;
  }
`;

export const panelContentStyles = css`
  display: flex;
  height: calc(100% - ${stylers.spacer(5)});
`;

export const yearListStyles = css`
  ${listStyles}

  > div[role="group"] {
    border-left: 1px solid ${tokens.border.color};
  }
`;
