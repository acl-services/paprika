import stylers from "@paprika/stylers";

// Common

const commonStyles = `
  ${stylers.alignMiddle}
  ${stylers.lineHeight(-1)}
`;

// Modifiers
const activeStyles = `
  background-color: #CCE5FD;
`;

//
// Composition
//
const buttonGroupStyles = props => `
  ${commonStyles}
  ${props.isActive ? activeStyles : ""}
`;

export default buttonGroupStyles;
