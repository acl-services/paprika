import React from "react";
import { storiesOf } from "@storybook/react";

import DropdownMenuExample from "./examples/DropdownMenuExample";

storiesOf("dropdownmenu / cypress", module).add("dropdownmenu test", () => <DropdownMenuExample />);
