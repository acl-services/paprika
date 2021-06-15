import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import styled, { css } from "styled-components";
import * as types from "../../types";

export const File = styled.div`
  display: flex;
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 1;
`;

export const FileListItem = styled.li`
  align-items: center;
  border-bottom: 1px solid ${tokens.border.color};
  display: flex;
  padding: ${stylers.spacer(2)};

  &:last-of-type {
    border-bottom: 0;
  }
`;

export const Left = styled.div`
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 1;
`;

export const Right = styled.div(
  ({ status }) => css`
    display: flex;
    flex-basis: ${stylers.spacer(4)};
    justify-content: center;
    padding: ${tokens.spaceSm} 0 ${tokens.spaceSm} ${tokens.spaceSm};

    ${status === types.status.SUCCESS ? `padding-bottom: ${tokens.space}; padding-top: ${tokens.space};` : ""};
  `
);

export const Info = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${tokens.spaceSm};
`;

export const Name = styled.div`
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 1;
  ${stylers.fontSize(-1)}
  font-weight: bold;
`;

export const ProgressText = styled.div(
  ({ status }) => css`
    color: ${tokens.color.blackLighten20};
    flex-basis: 40%;
    flex-shrink: 1;

    ${stylers.fontSize(-3)}
    text-align: right;

    ${status === types.status.SUCCESS ? `color: ${tokens.color.green};` : ""};

    ${status === types.status.ERROR ? `color: ${tokens.color.orange};` : ""};
  `
);

export const ProgressBarWrapper = styled.div`
  background: ${tokens.color.blackLighten40};
  border-radius: ${tokens.border.radius};
  height: ${tokens.spaceSm};
  overflow: hidden;
`;

export const ProgressBar = styled.div(
  ({ status, progress }) => css`
    background: ${tokens.color.purple};
    height: 100%;

    ${status === types.status.SUCCESS ? `background: ${tokens.color.green};` : ""};
    ${status === types.status.ERROR ? `background: ${tokens.color.orange};` : ""};

    width: ${status === types.status.CANCEL ? `0%;` : `${progress}%;`};
  `
);
