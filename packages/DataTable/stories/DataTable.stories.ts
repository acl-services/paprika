import { getStoryName } from "storybook/storyTree";
import DataTable from "../src/DataTable";
import Showcase from "./examples/Showcase";
import Performance from "./examples/Performance";
import CustomizedRowHeightCalculation from "./examples/CustomizedRowHeightCalculation";

export default {
  title: getStoryName("DataTable"),
  component: DataTable,
};

export const showcase = Showcase;

export const performance = Performance;

export const customizedRowHeightCalculation = CustomizedRowHeightCalculation;
