import styled, { css } from "styled-components";
import PaprikaInput from "@paprika/input";
import PlaceholderIcon from "@paprika/icon/lib/Search";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import { Wrapper } from "../InlineSelect/InlineSelect.styles";
import { getGenericTriggerIcon, GenericTrigger } from "../../Navigation.styles";

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

export const Trigger = styled(GenericTrigger)`
  ${({ hasFilterApplied }) => (hasFilterApplied ? hasFilterAppliedStyles : "")}
`;

export const Icon = getGenericTriggerIcon(PlaceholderIcon);
