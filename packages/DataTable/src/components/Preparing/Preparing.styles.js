import styled, { keyframes } from "styled-components";

const loading = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0.4;
  }
`;

export const Container = styled.div`
  animation: ${loading} 2s ease infinite;
  animation-direction: alternate;
`;
