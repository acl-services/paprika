import React from "react";
import { storiesOf } from "@storybook/react";
import Tag from "../src";

storiesOf("Tag / Examples", module).add("With all options", () => (
  <div className="story-body">
    <small>
      <code>size</code> <code>isReadOnly</code> <code>isDisabled</code>
    </small>
    <br />
    <Tag label="Retro" size="small" isReadOnly /> <Tag label="Craft" size="small" />{" "}
    <Tag label="Succulent" size="small" isDisabled />
    <br />
    <Tag label="Live-edge" isReadOnly /> <Tag label="Master Cleanse" /> <Tag label="Longboard" isDisabled />
    <br />
    <Tag label="Slow-carb" size="large" isReadOnly /> <Tag label="Flexitarian" size="large" />{" "}
    <Tag label="Hashtag" size="large" isDisabled />
    <br />
    <small>
      <code>isDark</code>
    </small>
    <br />
    <Tag label="Ethical" size="small" isDark isReadOnly /> <Tag label="Mumblecore" size="small" isDark />{" "}
    <Tag label="Lomo" size="small" isDark isDisabled />
    <br />
    <Tag label="Normcore" isDark isReadOnly /> <Tag label="Farm-to-table" isDark />{" "}
    <Tag label="Distillery" isDark isDisabled />
    <br />
    <Tag label="Asymmetrical" size="large" isDark isReadOnly /> <Tag label="8-bit" size="large" isDark />{" "}
    <Tag label="Selfies" size="large" isDark isDisabled />
    <br />
    <small>
      <code>width</code>
    </small>
    <br />
    <Tag label="Post-ironic narwhal vegan photo booth retro" />
    <br />
    <Tag label="Post-ironic narwhal vegan photo booth retro" width="5" />
    <br />
    <Tag label="Post-ironic narwhal vegan photo booth retro" width="120" />
    <br />
    <Tag label="Post-ironic narwhal vegan photo booth retro" width="500" />
  </div>
));
