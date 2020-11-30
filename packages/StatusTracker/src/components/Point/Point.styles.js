import styled, { css } from "styled-components";
import Button from "@paprika/button";
import PaprikaPopover from "@paprika/popover";
import tokens from "@paprika/tokens";
import { fontSize, spacer } from "@paprika/stylers/lib/helpers";
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

export const Point = styled.div`
  ${({ kind }) => {
    switch (kind) {
      case types.kinds.PAST:
        return css`
          ${basicPoint}
          ${pastPoint}
        `;
      case types.kinds.CURRENT:
        return css`
          > [data-pka-anchor="popover"] > [data-pka-anchor="button"] {
            margin-top: -${tokens.spaceSm};
          }
        `;
      case types.kinds.FUTURE:
        return css`
          ${basicPoint}
          ${futurePoint}
        `;
      default:
        return null;
    }
  }}
`;

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
  min-height: ${({ hasBoth }) => (hasBoth ? "auto" : spacer(3))};
  min-width: ${({ hasBoth }) => (hasBoth ? spacer(22) : spacer(8))};
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
