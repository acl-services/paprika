import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: red;
`;

export default function Content(props) {
  return <StyledFooter {...props} />;
}

Content.displayName = "Takeover.Footer";
