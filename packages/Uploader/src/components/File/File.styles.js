import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import styled, { css, keyframes } from "styled-components";
import types from "../../types";

export const FileWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${tokens.color.blackLighten40};
  padding: ${stylers.spacer(2)};
`;

export const Left = styled.div`
  flex: 1;
`;

export const Right = styled.div`
  flex: 0 0 ${stylers.spacer(4)};
  padding: ${tokens.spaceSm} 0 ${tokens.spaceSm} ${tokens.spaceSm};

  /* for its content */
  display: flex;
  justify-content: center;

  ${props => {
    if (props.status === types.SUCCESS) {
      return css`
        padding-bottom: ${tokens.space};
        padding-top: ${tokens.space};
      `;
    }
  }}
`;

export const Info = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: ${tokens.spaceSm};
`;

export const Name = styled.div`
  flex: 1 1 auto;
  ${stylers.fontSize(-1)}
  font-weight: bold;
`;

export const ProgressText = styled.div`
  color: ${tokens.color.blackLighten20};
  flex: 0 1 40%;
  ${stylers.fontSize(-3)}
  text-align: right;

  ${props => {
    if (props.status === types.SUCCESS) {
      return css`
        color: ${tokens.color.green};
      `;
    } else if (props.status === types.ERROR) {
      return css`
        color: ${tokens.color.orange};
      `;
    }
  }}
`;

export const ProgressBarWrapper = styled.div`
  background: ${tokens.color.blackLighten40};
  border-radius: ${tokens.border.radius};
  height: 4px;
  overflow: hidden;
`;

export const ProgressBar = styled.div`
  background: ${tokens.color.purple};
  height: 100%;
  width: ${props => `${props.progress}%`};

  ${props => {
    if (props.status === types.SUCCESS) {
      return css`
        background: ${tokens.color.green};
      `;
    } else if (props.status === types.ERROR) {
      return css`
        background: ${tokens.color.orange};
      `;
    }
  }};
`;
