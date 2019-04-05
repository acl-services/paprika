import RawButtonStyled from "@paprika/raw-button/RawButton.styles";

const triggerStyles = `
  ${RawButtonStyled}

  border: 1px solid #d7d7d7;
  border-radius: 3px;

  && {
    box-sizing: border-box;
    display: flex;
    flex-flow: wrap;
    padding: 4px;
  }
`;

export default triggerStyles;
