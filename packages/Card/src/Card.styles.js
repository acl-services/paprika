import styled from "styled-components";
import tokens from "@paprika/tokens";
// import stylers from "@paprika/stylers";
// import { ShirtSizes } from "@paprika/helpers/lib/customPropTypes";

export const cardStyles = styled.div`
  background: ${tokens.color.white};
  border: 1px solid #f0f0f0;
  border-radius: ${tokens.card.borderRadius};
  box-shadow: ${tokens.shadow};
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

// const sizeStyles = {
//   [ShirtSizes.SMALL]: `
//     ${stylers.fontSize(-2)};
//     min-height: ${stylers.spacer(3)};
//     padding: 3px ${tokens.space};
//   `,
//   [ShirtSizes.MEDIUM]: `
//     ${stylers.fontSize(-1)};
//     min-height: ${stylers.spacer(4)};
//     padding: 6.5px ${tokens.spaceLg};
//   `,
//   [ShirtSizes.LARGE]: `
//     ${stylers.fontSize()};
//     min-height: ${stylers.spacer(5)};
//     padding: 9px ${stylers.spacer(2)};
//   `,
// };

// export const cardStyles = props => `
//   ${commonStyles}
// `;
