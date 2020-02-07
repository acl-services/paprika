import styled, { css } from "styled-components";
import stylers from "@paprika/stylers";
import tokens from "@paprika/tokens";
import Sort from "@paprika/icon/lib/Sort";
import { Wrapper } from "../InlineSelect/InlineSelect.styles";
import { getGenericTriggerIcon, GenericTrigger } from "../../Navigation.styles";

export const FieldsPanel = styled.div`
  width: 420px;

  &:focus {
    outline: none;
  }
`;

export const SortItem = styled.li`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: ${tokens.spaceSm};

  ${Wrapper} {
    margin-right: ${tokens.spaceSm};
  }
`;

const hasFieldStyles = css`
  background-color: ${stylers.alpha(tokens.color.chartColor07, 0.3)};
`;

export const Trigger = styled(GenericTrigger)`
  ${({ hasField }) => (hasField ? hasFieldStyles : "")}
`;

export const Icon = getGenericTriggerIcon(Sort);
