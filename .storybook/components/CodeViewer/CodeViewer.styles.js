import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import Button from "@paprika/button";

export const CodeBox = styled.div`
  position: relative;
  margin: ${stylers.spacer(7)} 0 ${tokens.space} 0;

  pre {
    ${stylers.fontSize(-1)}

    font-family: "Roboto Mono", monospaced;
    margin: 0 !important;
    max-height: 500px;

    code {
      &:first-child {
        opacity: 0.4;
      }
    }
  }
`;

export const Buttons = styled.div`
  position: absolute;
  right: 0;
  top: -${stylers.spacer(3)};

  button {
    border-radius: ${tokens.border.radius} 0 0 0;
    font-weight: normal;
    position: relative;

    &:hover,
    &:focus {
      z-index: 1;
    }

    & + button {
      border-radius: 0 ${tokens.border.radius} 0 0;
      margin-left: -1px;
    }
  }
`;

export const ShowButton = styled(Button)`
  margin: ${stylers.spacer(3)} 0 ${stylers.spacer(2)} -${tokens.space};
`;

export const CopyButton = styled(Button)`
  width: 50px;
`;
