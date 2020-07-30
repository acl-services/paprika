import styled from "styled-components";
import tokens from "@paprika/tokens";
// import helpers from "@paprika/helpers";

export const CurrentPageItemContent = styled.span`
  background: ${tokens.color.greenDarken10};
  color: ${tokens.color.white};
  cursor: default;
  font-weight: bold;
  line-height: ${tokens.space * 3};
  min-width: ${tokens.space * 3};
  padding: 0;
  text-align: center;
  vertical-align: top;
`;

export const CurrentPageItem = styled.span`
  background: ${tokens.color.greenDarken10};
  border-radius: ${tokens.borderRadius};
  box-sizing: border-box;
  color: ${tokens.color.white};
  cursor: default;
  display: inline-block;
  font-weight: bold;
  height: ${tokens.space * 3};
  line-height: ${tokens.space * 3};
  margin: 0;
  min-width: ${tokens.space * 3};
  padding: 0;
  position: relative;
  text-align: center;
  vertical-align: top;
`;

// currentpageitem
// ${tokens.space - sm + 1} 0 ${space - sm}
/* ${tokens.space - sm} */
//   font-size: ${fontSizeValue(-1)};

// content
/* ${tokens.space - sm} */
// font-size: ${fontSizeValue(-1)};
