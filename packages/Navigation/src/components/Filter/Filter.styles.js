import styled, { css } from "styled-components";
import FilterIcon from "@paprika/icon/lib/Filter";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import { Wrapper } from "../InlineSelect/InlineSelect.styles";
import { getGenericTriggerIcon, GenericTrigger } from "../../Navigation.styles";

export const FiltersPanel = styled.div`
  width: 420px;

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

const hasFilterAppliedStyles = css`
  background-color: ${stylers.alpha(tokens.color.chartColor05, 0.3)};
`;

export const Trigger = styled(GenericTrigger)`
  ${({ hasFilterApplied }) => (hasFilterApplied ? hasFilterAppliedStyles : "")}
`;

export const Icon = getGenericTriggerIcon(FilterIcon);

export const Footer = styled.div`
  display: flex;

  [data-pka-anchor="navigation.filter.addFilterButton"] {
    margin-right: auto;
  }
`;
