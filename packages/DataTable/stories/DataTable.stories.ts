import { getStoryName } from "storybook/storyTree";
import DataTable, { DataTableProps } from "../src/DataTable";
import CustomizedRowHeightCalculation from "./examples/CustomizedRowHeightCalculation";
import Kitchensink from "./examples/Kitchensink";
import MultilevelHeader from "./examples/MultilevelHeader";
import Performance from "./examples/Performance";
import RealWorld from "./examples/RealWorld";
import RenderRow from "./examples/RenderRow";
import Showcase from "./examples/Showcase";

export default {
  title: getStoryName("DataTable"),
  component: DataTable as React.FC<DataTableProps>,
};

export const showcase = Showcase;

export const customizedRowHeightCalculation = CustomizedRowHeightCalculation;

export const kitchensink = Kitchensink;

export const multilevelHeader = MultilevelHeader;

export const renderRow = RenderRow;

export const realWorld = RealWorld;

export const performance = Performance;
