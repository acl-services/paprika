import React from "react";
import { storiesOf } from "@storybook/react";

import DropdownMenuExample from "./examples/DropdownMenuExample";

storiesOf("DropdownMenu / cypress", module).add("dropdownmenu test", () => <DropdownMenuExample />);
