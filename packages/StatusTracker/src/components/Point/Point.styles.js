import styled, { css } from "styled-components";
import Button from "@paprika/button";
import PaprikaPopover from "@paprika/popover";
import tokens from "@paprika/tokens";
import { fontSize, lineHeight, spacer } from "@paprika/stylers/lib/helpers";
import * as types from "../../types";

const passedPath = css`
  border-bottom: 2px solid ${tokens.color.greenLighten10};
`;

const futurePath = css`
  border-bottom: 2px dashed ${tokens.color.blackLighten20};
`;

export const PointWrapper = styled.li`
  align-items: center;
  display: inline-flex;
  flex-grow: 1;
  list-style: none;

  &::after {
    content: "";
    display: inline-block;
    flex-grow: 1;
    margin: 0;
    vertical-align: middle;

    ${({ kind }) => (kind === types.kinds.PAST ? passedPath : futurePath)}
  }

  &:last-child {
    flex-grow: 0;

    ::after {
      content: none;
    }
  }
`;

const basicPoint = css`
  border-radius: 50%;
  height: ${spacer(2)};
  width: ${spacer(2)};
`;

const pastPoint = css`
  background-color: ${tokens.color.greenLighten10};
`;

const futurePoint = css`
  background-color: ${tokens.color.blackLighten70};
  border: 2px solid ${tokens.color.blackLighten20};
`;

const currentPointWithoutActions = css`
  ${fontSize(-1)};
  ${lineHeight(1)};
  align-items: center;
  background-color: ${tokens.color.white};
  border: 1px solid ${tokens.border.color};
  border-radius: ${tokens.button.borderRadius};
  box-sizing: border-box;
  color: ${tokens.color.black};
  cursor: default;
  display: inline-flex;
  font-weight: bold;
  justify-content: center;
  min-height: ${spacer(4)};
  padding: ${tokens.spaceSm} ${tokens.spaceLg};
  text-align: center;
  transition-duration: 0.2s;
  transition-property: border;
  vertical-align: middle;

  &:focus {
    border-color: ${tokens.color.blue};
    box-shadow: 0 0 0 2px ${tokens.color.blueLighten30};
    outline: none;
  }

  &:hover {
    background: ${tokens.color.offWhite};
    border-color: ${tokens.color.blackLighten40};
  }
`;

export const Point = styled.div(({ kind, isDropdown }) => {
  switch (kind) {
    case types.kinds.PAST:
      return css`
        ${basicPoint}
        ${pastPoint}
      `;
    case types.kinds.CURRENT:
      return css`
        margin-top: -${tokens.spaceSm};
        ${isDropdown ? "" : currentPointWithoutActions}
      `;
    case types.kinds.FUTURE:
      return css`
        ${basicPoint}
        ${futurePoint}
      `;
    default:
      return null;
  }
});

export const Popover = styled(PaprikaPopover)`
  margin-top: ${tokens.spaceSm};
`;

export const CurrentButton = styled(Button)`
  display: block;
`;

export const PopoverCard = styled(Popover.Card)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: ${({ hasBoth }) => (hasBoth ? "auto" : spacer(2))};
  min-width: ${({ hasBoth }) => (hasBoth ? spacer(21) : spacer(8))};
  padding: ${tokens.space};
`;

export const NameInTooltip = styled.div`
  ${fontSize(-1)};
  color: ${tokens.color.white};
  font-weight: bold;
`;

export const Description = styled.div`
  ${fontSize(-1)};
  color: ${tokens.color.white};
  text-align: center;
`;
