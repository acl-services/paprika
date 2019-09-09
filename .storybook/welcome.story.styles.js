import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import backgroundImg from "./assets/images/paprika-background.jpg";

export const WelcomePage = styled.div`
  align-items: flex-end;
  background: url(${backgroundImg}) center no-repeat;
  background-size: cover;
  display: flex;
  height: 100%;
  text-align: center;
`;

export const WelcomeBody = styled.div`
  ${stylers.alignMiddle}
  flex-direction: column;
  height: 30%;
  padding: ${stylers.spacer(6)} ${stylers.spacer(3)};
  text-align: center;
  width: 100%;
`;

const headingShadow = Array(8)
  .fill("0 0 12px #f5f5f5")
  .join(",");

const headingStyles = `
  ${stylers.lineHeight(-2)};
  color: ${tokens.color.black};
  text-shadow: ${headingShadow}; 
`;

export const Heading1 = styled.h1`
  ${headingStyles};
  font-size: 12vh;
  font-weight: 300;
  letter-spacing: -0.04em;
  margin: 0 0 ${stylers.spacer(3)} 0;
`;

export const Heading2 = styled.h2`
  ${headingStyles};
  ${stylers.fontSize(1)};
  font-weight: 400;
  margin: 0;
  opacity: 0.8;
`;

export const Bar = styled.span`
  margin: 0 ${tokens.spaceLg};
  opacity: 0.3;
  font-weight: 300;
`;
