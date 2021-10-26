import { css } from "styled-components";

const sizes = {
  small: "12px",
  medium: "14px",
  large: "18px",
};

export const Card = {
  Card: ({ size }) => css`
    background: #fff;
    border-left: 6px solid #5d7599;
    border-radius: 6px;
    box-shadow: 0px 1px 5px rgb(0 0 0 / 7%), 0px 7px 17px rgb(0 0 0 / 10%);
    font-size: ${sizes[size]};
    padding: 16px;
  `,
};
