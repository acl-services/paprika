import { getStoryName } from "storybook/storyTree";
import DataTable from "../src/DataTable";
import Showcase from "./examples/Showcase";

export default {
  title: getStoryName("DataTable"),
  component: DataTable,
};

export const showcase = Showcase;
