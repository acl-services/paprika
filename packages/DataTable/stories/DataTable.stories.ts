import { getStoryName } from "storybook/storyTree";
import DataTable from "../src/DataTable";
import Showcase from "./examples/Showcase";
import Performance from "./examples/Performance";
import CustomizedRowHeightCalculation from "./examples/CustomizedRowHeightCalculation";
import Kitchensink from "./examples/Kitchensink";
import MultilevelHeader from "./examples/MultilevelHeader";
import RealWorld from "./examples/RealWorld";

export default {
  title: getStoryName("DataTable"),
  component: DataTable,
};

export const showcase = Showcase;

export const performance = Performance;

export const customizedRowHeightCalculation = CustomizedRowHeightCalculation;

export const kitchensink = Kitchensink;

export const multilevelHeader = MultilevelHeader;

export const realWorld = RealWorld;
