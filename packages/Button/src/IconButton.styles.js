import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";

const iconButtonSizes = {
  small: `
    ${stylers.fontSize(-3)};
    height: ${stylers.spacer(3)}; 
    line-height: ${stylers.spacer(3)};  
    padding: 0; 
    width: ${stylers.spacer(3)}; 
  }`,
  medium: `
    ${stylers.fontSize(1)};
    height: ${stylers.spacer(4)}; 
    line-height: ${stylers.spacer(4)};  
    padding: 0; 
    width: ${stylers.spacer(4)}; 
  }`,
  large: `
    ${stylers.fontSize(3)};
    height: ${stylers.spacer(5)}; 
    line-height: ${stylers.spacer(5)};  
    padding: 0; 
    width: ${stylers.spacer(5)}; 
  }`,
};

const minorStyles = `
  transition: background-color 0.2s ease-out;
  
  &:hover {
    background-color: ${stylers.alpha(tokens.color.black, 0.1)}; 
  }

  &:active {
    background-color: ${stylers.alpha(tokens.color.black, 0.2)};
  }
`;

const iconButtonStyles = props => `
  ${iconButtonSizes[props.size]}
  ${props.kind === "minor" ? minorStyles : ""}

  .button__icon {
    color: inherit;
    margin: 0;
  }
`;

export default iconButtonStyles;
