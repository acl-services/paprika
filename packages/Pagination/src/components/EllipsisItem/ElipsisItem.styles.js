import styled from "styled-components";
import tokens from "@paprika/tokens";

export const ElipsisItemElipse = styled.span`
  border-radius: ${tokens.borderRadius};
  box-sizing: border-box;
  color: ${tokens.color.blackLighten20};
  display: inline-block;
  font-weight: bold;
  height: ${tokens.space * 3};
  line-height: ${tokens.space * 3};
  min-width: ${tokens.space * 3};
  padding: 0;
  text-align: center;
  vertical-align: top;
`;

export const ElipsisItem = styled.span`
  border-radius: ${tokens.borderRadius};
  box-sizing: border-box;
  display: inline-block;
  height: ${tokens.space * 3};
  margin: 0;
  position: relative;
`;

// elipseitemelipse
/* ${tokens.space - sm} */
//   font-size: ${fontSizeValue(-1)};

// elipseitem
/* ${tokens.space - sm + 1} 0 ${space - sm} */
