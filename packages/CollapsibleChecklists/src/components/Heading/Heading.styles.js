import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const headingStyles = () => `
  background-color: ${tokens.table.header.backgroundColor};
  border-bottom: 2px solid ${tokens.color.blackLighten60};
  font-weight: bold;
  padding: ${tokens.space} ${tokens.space} ${tokens.space} ${stylers.spacer(2)};
`;

export default headingStyles;
