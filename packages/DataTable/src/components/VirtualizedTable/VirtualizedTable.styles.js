/* This will likely change color and tokens, I will wait until the UI mockup exists */
import styled from "styled-components";

export const Row = styled.div.attrs(({ $height, isHeaderRow = false }) => {
  const style = {};

  if ($height) {
    style.height = isHeaderRow ? "32px" : `${$height}px`;
  }

  return {
    style,
  };
})`
  width: 100%;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #dde1e3;
  display: flex;
`;
