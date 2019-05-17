import React from "react";
import { storiesOf } from "@storybook/react";
import SidePanel from "./src";

storiesOf("SidePanel", module).add("Basic", () => <SidePanel isOpen>🌈</SidePanel>);
