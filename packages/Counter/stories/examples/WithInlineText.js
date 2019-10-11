import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Counter from "../../src/Counter";

const WithInlineTextExample = () => (
  <Story>
    <p>
      Retro Distillery <Counter quantity={8} />
    </p>
    <p>
      Man Braid Selfies <Counter quantity={16} size="small" />
    </p>
    <p>
      <span style={{ fontSize: "14px" }}>Mumblecore Meggings</span> <Counter quantity={32} hasIndicator />
    </p>
    <p>
      <span style={{ fontSize: "14px" }}>Live-edge Hashtag</span> <Counter quantity={42} size="small" hasIndicator />
    </p>
    <p>
      <u>Poke Bowl Hexagon</u> <Counter quantity={12} hasIndicator />{" "}
    </p>
    <p>
      Ethical Slow-carb IPA <Counter type="red" quantity={54} />
    </p>
    <p>
      <span style={{ fontSize: "14px" }}>Authentic Fingerstache</span>{" "}
      <Counter type="blue" size="small" quantity={101} />
    </p>
  </Story>
);

export default WithInlineTextExample;
