import React from "react";
import styled from "styled-components";
import tokens from "@paprika/tokens";
import stylers from "@paprika/stylers";
import { useDimensions, useBreakpoints } from "../src";

export const ColourfulBox = styled.div`
  ${stylers.fontSize(3)};
  align-items: center;
  background-image: linear-gradient(to bottom, ${tokens.color.chartColor03}, ${tokens.color.chartColor07});
  color: ${tokens.color.white};
  display: flex;
  height: 100%;
  justify-content: center;
  text-align: center;
  text-shadow: 1px 1px 1px ${stylers.alpha(tokens.color.black, 0.5)};
  width: 100%;
`;

export function ResizeConsumer() {
  const { width, height } = useDimensions();
  const { size } = useBreakpoints();

  return (
    <ColourfulBox>
      {width} x {height}
      <br />[{size}]
    </ColourfulBox>
  );
}
