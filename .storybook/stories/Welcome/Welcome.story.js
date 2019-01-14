import React from "react";
import { storiesOf } from "@storybook/react";
import "./welcome.scss";

// Cover Story
// Photo source: https://flic.kr/p/oeLXXg

storiesOf("01 | Welcome", module).add("Welcome to Tahini", () => (
  <div className="welcome-page">
    <div className="welcome-body">
      <h1>ACL UI Storybook</h1>
      <h2>Props to Components</h2>
    </div>
    <div className="welcome-credit">
      Photo by Jules Clancy //{" "}
      <a href="https://creativecommons.org/licenses/by/2.0/" target="_blank" rel="noopener noreferrer">
        CC BY
      </a>
    </div>
  </div>
));
