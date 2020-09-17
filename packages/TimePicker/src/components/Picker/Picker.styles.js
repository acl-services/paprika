import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import RawButton from "@paprika/raw-button";

export const Picker = styled.div`
  background-color: ${tokens.color.white};
  border: 1px solid ${tokens.border.color};
  border-radius: ${tokens.border.radius};
  display: inline-flex;
  min-width: 364px;
  z-index: z(1);
`;
export const timeInputPickerOption = styled.div`
  flex-basis: 122px;
  &.timeinput-picker__hours {
    flex-basis: 140px;
  }

  &:last-child {
    .timeinput-picker__columns {
      border-right: 0;
    }
  }
`;
export const timeInputPickerTitle = styled.div`
  background: ${tokens.color.blackLighten70};
  border-bottom: 1px solid ${tokens.border.color};
  font-size: 16px;
  font-weight: bold;
  padding: ${tokens.spaceSm};
  text-align: center;
`;

export const timeInputPickerColumns = styled.div`
  align-items: flex-start;
  border-right: 1px solid ${tokens.border.color};
  display: flex;
  height: calc(100% - 30px);
  width: 100%;
`;

export const timeInputPickerColumn = styled.div`
  align-items: center;
  display: flex;
  flex-basis: 100%;
  flex-flow: column;
  flex-wrap: wrap;
  justify-content: center;
  padding: ${tokens.spaceSm};
`;

export const timeInputPickerColumnItemIsPicked = css`
  background-color: ${tokens.color.blueLighten40};
  font-weight: bold;
`;

export const timeInputPickerColumnItemCustom = css`
  max-width: 64px;
`;

export const timeInputPickerColumnItem = styled(RawButton)(
  ({ isActive, isCustom }) => css`
    border-radius: ${tokens.border.radius};
    box-shadow: none;
    display: inline-block;
    margin-bottom: 0;
    max-width: 40px;
    padding: ${tokens.spaceSm};
    text-align: center;
    width: 100%;
    ${isActive ? timeInputPickerColumnItemIsPicked : ""};
    ${isCustom ? timeInputPickerColumnItemCustom : ""};
  `
);
