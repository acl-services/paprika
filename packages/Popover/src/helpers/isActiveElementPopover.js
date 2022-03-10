import { getActiveElement } from "@paprika/helpers";

export const isActiveElementPopover = () => getActiveElement().dataset.componentName === "PopoverContent";
