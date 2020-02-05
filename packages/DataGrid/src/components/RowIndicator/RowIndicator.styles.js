import styled from "styled-components";
import tokens from "@paprika/tokens";

export const RowContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: flex-start;
  padding: 0;
  width: 100%;
`;

export const RowIndexText = styled.div.attrs(({ hasFourDigitsOrMore }) => {
  const style = hasFourDigitsOrMore
    ? {
        fontSize: "11px",
        padding: "4px",
      }
    : {
        fontSize: "13px",
        padding: "6px",
      };

  return {
    style,
  };
})`
  color: ${tokens.color.blackLighten40};
  display: inline-block;
`;

export const Checkbox = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 0;
  width: 100%;
`;
