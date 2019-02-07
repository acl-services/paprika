import React from "react";
import { storiesOf } from "@storybook/react";
import "./welcome.scss";

storiesOf("Welcome", module).add("Paprika Showcase", () => (
  <div className="welcome-page">
    <div className="welcome-body">
      <h1>Paprika Showcase</h1>
      <h2>
        robust <span>|</span> accessible <span>|</span> clear <span>|</span> delightful
      </h2>
    </div>
  </div>
));
