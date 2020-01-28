import styled, { css } from "styled-components";
import PaprikaInput from "@paprika/input";
import PlaceholderIcon from "@paprika/icon/lib/Search";
import RawButton from "@paprika/raw-button";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import { Wrapper } from "../InlineSelect/InlineSelect.styles";

export const FiltersPanel = styled.div`
  width: 580px;

  &:focus {
    outline: none;
  }
`;

export const FilterItem = styled.li`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: ${tokens.spaceSm};

  ${Wrapper} {
    margin-right: ${tokens.spaceSm};
  }
`;

export const Input = styled(PaprikaInput)`
  width: 80px;
`;

const hasFilterAppliedStyles = css`
  background-color: ${stylers.alpha(tokens.color.chartColor05, 0.3)};
`;

const isOpenStyles = css`
  background-color: ${stylers.alpha(tokens.color.black, 0.1)};
`;

export const Trigger = styled(RawButton)`
  ${stylers.fontSize()}
  align-items: center;
  border-radius: ${tokens.button.borderRadius};
  color: ${tokens.textColor.default};
  display: flex;
  font-weight: bold;
  margin-right: ${tokens.spaceSm};
  padding: ${tokens.spaceSm};
  transition-duration: 0.2s;
  transition-property: "background-color";

  &:hover {
    ${isOpenStyles}
  }

  ${({ hasFilterApplied, isOpen }) => {
    if (hasFilterApplied) return hasFilterAppliedStyles;
    if (isOpen) return isOpenStyles;
  }}
`;

export const Icon = styled(PlaceholderIcon)`
  margin-right: ${tokens.spaceSm};
`;
