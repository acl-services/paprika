import React from "react";
import styled from "styled-components";
import Tag from "../src";

export default {
  title: "Tag",
  component: Tag,
};

const Story = styled.div`
  padding-bottom: 200vh;
`;

export function BasicExample() {
  return (
    <Story>
      <Tag locale="en">some content</Tag>
    </Story>
  );
}
