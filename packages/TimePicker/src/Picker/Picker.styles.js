import styled from "styled-components";
import tokens from "@paprika/tokens";

export const CSSHolder = styled.div`
  .timeinput-picker {
    background-color: ${tokens.color.white};
    border: 1px solid ${tokens.border.color};
    border-radius: ${tokens.border.radius};
    display: inline-flex;
    min-width: 364px;
    z-index: z(1);

    .timeinput-picker__option {
      flex-basis: 112px;
      &.timeinput-picker__hours {
        flex-basis: 140px;
      }

      &:last-child {
        .timeinput-picker__columns {
          border-right: 0;
        }
      }
    }

    .timeinput-picker__title {
      background: ${tokens.color.blackLighten70};
      border-bottom: 1px solid ${tokens.border.color};
      font-size: 16px;
      font-weight: bold;
      padding: ${tokens.spaceSm};
      text-align: center;
    }

    .timeinput-picker__columns {
      align-items: flex-start;
      border-right: 1px solid ${tokens.border.color};
      display: flex;
      height: calc(100% - 30px); /* 40px is the header height */
      width: 100%;

      .timeinput-picker__column {
        align-items: center;
        display: flex;
        flex-basis: 100%;
        flex-flow: column;
        flex-wrap: wrap;
        justify-content: center;
        padding: ${tokens.spaceSm};

        .timeinput-picker__column-item {
          border-radius: ${tokens.border.radius};
          display: inline-block;
          margin-bottom: 0;
          max-width: 40px;
          padding: ${tokens.spaceSm};
          text-align: center;
          width: 100%;
        }

        .timeinput-picker__column-item--is-picked {
          background-color: ${tokens.color.blueLighten40};
          font-weight: bold;
        }

        .timeinput-picker__column-item__custom {
          max-width: 64px;
        }
      }
    }
  }
`;
