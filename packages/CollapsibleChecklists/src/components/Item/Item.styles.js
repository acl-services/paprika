import stylers from "@paprika/stylers";
import { disabledStyle } from "../helpers.styles";

const itemStyles = props => `
  padding: 2px 0 2px ${stylers.spacer(5)};
  ${props.isDisabled ? disabledStyle : ""};
`;

export default itemStyles;
