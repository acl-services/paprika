import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import Showcase from "./examples/Showcase";
import Basic from "./examples/Basic";
import NewRef from "./examples/NewRef";
import OldRef from "./examples/OldRef";
import CloseButtonRef from "./examples/CloseButtonRef";

export default { title: "Button", decorators: [withKnobs] };

export const showcase = () => <Showcase />;
export const basic = () => <Basic />;
export const ref = () => <NewRef />;
export const oldRef = () => <OldRef />;
export const closeRef = () => <CloseButtonRef />;
