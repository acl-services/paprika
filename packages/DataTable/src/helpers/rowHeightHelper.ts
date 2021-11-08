import { TableDataItemType, TableColumnsWidth } from "../types";

const DEFAULT_HEIGHT = 40;
// TODO: match desgin
const DEFAULT_STYLES = "padding: 5px;border-right:1px solid;border-bottom:1px solid;";

const containerId = `paprika-data-table__test-area--${Date.now()}`;

interface ConstructorOptions {
  defaultHeight?: number;
  styles?: string;
}

export default class RowHeightHelper {
  defaultHeight: number;

  styles: string;

  constructor(options?: ConstructorOptions) {
    const { defaultHeight = DEFAULT_HEIGHT, styles = DEFAULT_STYLES } = options || {};

    this.defaultHeight = defaultHeight;
    this.styles = styles;

    this.calculate = this.calculate.bind(this);
  }

  private getRowsContainer(): HTMLElement {
    let container = document.querySelector(`#${containerId}`) as HTMLElement;

    if (!container) {
      container = document.createElement("div");
      container.id = containerId;
      container.style.width = "fit-content";
      container.style.visibility = "hidden";
      container.style.boxSizing = "border-box";
      document.body.appendChild(container);
    }

    return container;
  }

  private getRowContainer(): HTMLElement {
    const rowContainer = document.createElement("div");
    rowContainer.style.width = "auto";
    rowContainer.style.display = "flex";
    rowContainer.style.flexWrap = "nowrap";
    rowContainer.style.boxSizing = "border-box";

    return rowContainer;
  }

  calculate({ rowData, columnsWidth }: { rowData: TableDataItemType; columnsWidth: TableColumnsWidth }): number {
    if (!rowData) return this.defaultHeight;

    const rowsContainer = this.getRowsContainer();
    const row = this.getRowContainer();
    const innerElementsForTheRow = [];

    // TODO: how can we make sure their column id match the key in data object
    for (let [key, value] of Object.entries(rowData)) {
      if (columnsWidth[key]) {
        innerElementsForTheRow.push(
          `<div style="box-sizing:border-box;width:${columnsWidth[key]}px;${this.styles}">${value}</div>`
        );
      }
    }

    row.innerHTML = innerElementsForTheRow.join("");
    rowsContainer.appendChild(row);

    const result = row.getBoundingClientRect().height;

    rowsContainer.removeChild(row);

    return result;
  }
}
