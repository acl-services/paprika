import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

export const TagStyled = styled.span`
  background-color: ${tokens.color.blackLighten70};
  border-radius: ${tokens.border.radius};
  color: ${tokens.color.black};
  display: inline-block;
  line-height: 1;
  padding: 3px;
  position: relative;

  &:focus {
    outline: none;
  }

  [role="button"] {
    height: auto;
    line-height: 1;
    min-height: 0;
    width: auto;
    margin-top: -2px;
  }

  // Sizes

  &.paprika-tag--small {
    font-size: 12px; // doesn't exist in stylers.fontSize
  }

  &.paprika-tag--medium {
    ${stylers.fontSize(-1)};
  }

  &.paprika-tag--large {
    ${stylers.fontSize()};
    padding: ${tokens.spaceSm};
  }

  // Read Only

  &.paprika-tag--is-read-only {
  }

  // Disabled

  &.is-disabled {
    color: ${tokens.color.blackLighten40};
  }

  // Dark Style

  &.paprika-tag--is-dark {
    background-color: ${tokens.color.blackLighten10};
    color: white;

    .paprika-tag__remove {
      color: ${tokens.colorBlackLighten60};
    }
    .paprika-tag__remove:hover {
      color: white;
    }

    &.is-disabled {
      color: ${tokens.color.blackLighten40};
    }
  }
`;

export const TagBodyStyled = styled.span`
  display: flex;
  width: 100%;
  align-items: center;
  line-height: 1;
`;

export const TagBodyTextStyled = styled.span`
  display: block;
  width: 100%;
  align-items: flex-end;
  padding-right: 8px;
  ${stylers.truncateText};
`;
