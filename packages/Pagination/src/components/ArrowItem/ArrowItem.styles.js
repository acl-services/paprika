import styled from "styled-components";
import RawButton from "@paprika/raw-button";
// import Icon from "../../../../Icon";
import tokens from "@paprika/tokens";

// export const ArrowItemIcon = styled(Icon)`
//   line-height: ${tokens.space * 3};
// `;

export const ArrowItem = styled(RawButton)`
  border-radius: ${tokens.borderRadius};
  box-sizing: border-box;
  display: inline-block;
  height: ${tokens.space * 3};
  margin: 0;
  position: relative;
`;

/* ${tokens.space - sm + 1}  0 ${tokens.space - sm} */
