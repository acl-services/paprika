import styled, { css } from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import CaretDownIcon from "@paprika/icon/lib/CaretDown";
import CaretUpIcon from "@paprika/icon/lib/CaretUp";
import RawButton from "@paprika/raw-button";
import ListBox from "@paprika/list-box";

const fontSize = {
  [ListBox.types.size.MEDIUM]: css`
    ${stylers.fontSize(-1)}
  `,
  [ListBox.types.size.LARGE]: css`
    ${stylers.fontSize()}
  `,
};

const readOnlyTagStyles = css`
  background-color: ${tokens.color.blackLighten60};

  *::selection {
    background: ${tokens.color.blueLighten30};
    color: ${tokens.color.black};
  }
`;

export const Trigger = styled(RawButton)(
  ({ allOptionsAreSelected, hasError, isDisabled, isReadOnly, size }) => css`
    align-items: center;
    background-color: ${tokens.color.white};
    border: 1px solid ${tokens.border.color};
    border-radius: ${tokens.border.radius};
    box-sizing: border-box;
    color: ${tokens.color.black};
    display: block;
    padding: 3px 50px 1px ${tokens.spaceSm};
    position: relative;
    text-align: left;
    transition: border-color 0.2s;
    width: 100%;
    ${fontSize[size]}
    ${allOptionsAreSelected ? `padding-left: 0;` : ""}
    ${isReadOnly ? stylers.readOnlyFormStyles : ""}
    ${hasError ? stylers.errorFormStyles : ""}

    [data-pka-anchor="tag"], 
    [data-pka-anchor="tag.remove"] {
      ${isDisabled && !isReadOnly ? "opacity: 0.4;" : ""}
    }

    [data-pka-anchor="tag"] {
      ${isReadOnly ? readOnlyTagStyles : ""}
    }

    [data-pka-anchor="tag.remove"] {
      ${isDisabled ? "pointer-events: none;" : ""}
      ${isReadOnly ? "display: none;" : ""}
    }
  `
);

const placeholderHeight = {
  [ListBox.types.size.MEDIUM]: "26px",
  [ListBox.types.size.LARGE]: "30px",
};

export const PlaceHolder = styled.div(
  ({ isDisabled, size }) => css`
    height: ${placeholderHeight[size]};
    line-height: ${placeholderHeight[size]};
    margin-left: ${tokens.spaceSm};
    ${stylers.placeholder};
    ${isDisabled && `color: ${tokens.color.blackLighten60}`}
  `
);

export const AllOptionsAreSelected = styled.div(({ size }) => {
  return css`
    border: 1px solid ${tokens.border.color};
    border-top: 0;
    box-sizing: border-box;
    color: ${tokens.placeholder.color};
    font-style: ${tokens.placeholder.fontStyle};
    padding: ${tokens.spaceSm};
    position: relative;
    ${fontSize[size]};
  `;
});

export const TriggerLabel = styled.div`
  ${stylers.visuallyHidden}
`;

const iconStyles = ({ isDisabled }) => css`
  color: ${tokens.color.black};
  height: 100%;
  pointer-events: none;
  position: absolute;
  right: ${tokens.space};
  top: 0;
  ${stylers.fontSize(-1)}
  ${isDisabled ? `color: ${tokens.color.blackLighten60};` : ""}
`;

export const UpIcon = styled(CaretUpIcon)`
  ${iconStyles}
`;

export const DownIcon = styled(CaretDownIcon)`
  ${iconStyles}
`;
