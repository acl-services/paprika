import { TableDataItemType, TableColumnsWidth } from "../types";

const DEFAULT_HEIGHT = 40;
// TODO: match desgin
const DEFAULT_STYLES = "padding: 5px;border-right:1px solid;border-bottom:1px solid;";

const containerId = `paprika-data-table__test-area--${Date.now()}`;

interface ConstructorOptions {
  defaultHeight?: number;
  styles?: string;
}

function createRowsContainer(): HTMLElement {
  const container = document.createElement("div");
  container.id = containerId;
  container.style.width = "fit-content";
  container.style.visibility = "hidden";
  container.style.boxSizing = "border-box";

  document.body.appendChild(container);

  return container;
}

function createRowContainer(): HTMLElement {
  const parentContainer = (document.querySelector(`#${containerId}`) as HTMLElement) || createRowsContainer();

  const rowContainer = document.createElement("div");
  rowContainer.style.width = "auto";
  rowContainer.style.display = "flex";
  rowContainer.style.flexWrap = "nowrap";
  rowContainer.style.boxSizing = "border-box";

  parentContainer.appendChild(rowContainer);

  return rowContainer;
}

export default class RowHeightHelper {
  defaultHeight: number;

  styles: string;

  rowContainer: HTMLElement;

  constructor(options?: ConstructorOptions) {
    const { defaultHeight = DEFAULT_HEIGHT, styles = DEFAULT_STYLES } = options || {};

    this.defaultHeight = defaultHeight;
    this.styles = styles;
    this.rowContainer = createRowContainer();
  }

  calculate({ rowData, columnsWidth }: { rowData: TableDataItemType; columnsWidth: TableColumnsWidth }): number {
    if (!rowData) {
      return this.defaultHeight;
    }

    const innerElementsForTheRow = [];

    // TODO: how can we make sure their column id match the key in data object
    for (let [key, value] of Object.entries(rowData)) {
      if (Object.prototype.hasOwnProperty.call(columnsWidth, key)) {
        innerElementsForTheRow.push(
          `<div style="box-sizing:border-box;width:${columnsWidth[key]}px;${this.styles}">${value}</div>`
        );
      }
    }

    this.rowContainer.innerHTML = innerElementsForTheRow.join("");

    return this.rowContainer.getBoundingClientRect().height;
  }
}
