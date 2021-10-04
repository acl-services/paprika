import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Pagination from "../../src/Pagination";

export default () => (
  <Story>
    <Pagination onChange={() => {}} totalPages={12} currentPage={2} />
  </Story>
);
