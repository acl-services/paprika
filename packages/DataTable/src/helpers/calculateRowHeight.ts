import { TableDataItemType } from "../types";

export default function calculateRowHeight(targetData: TableDataItemType): number {
  if (targetData === undefined) {
    return 20; // TODO: how to recalculate height for N+1 row?
  }

  const containerId = "test-area";
  let container = document.querySelector(`#${containerId}`) as HTMLElement;

  if (!container) {
    container = document.createElement("div");
    container.id = "test-area";
    container.style.width = "fit-content";
    container.style.visibility = "hidden";
    document.body.appendChild(container);
  }

  const example = document.createElement("div");
  example.style.width = "auto";
  example.style.display = "flex";
  example.style.flexWrap = "nowrap";
  example.innerHTML = `
  <div style="width:100px;padding:5px;">${targetData.firstName}</div>
  <div style="width:100px;padding:5px;">${targetData.lastName}</div>
  <div style="width:50px;padding:5px;">${targetData.age}</div>
  <div style="width:60px;padding:5px;">${targetData.visits}</div>
  <div style="width:150px;padding:5px;">${targetData.status}</div>
  <div style="width:150px;padding:5px;">${targetData.desc}</div>
  <div style="width:150px;padding:5px;">${targetData.desc_more}</div>
  <div style="width:300px;padding:5px;">${targetData.background}</div>
  <div style="width:150px;padding:5px;">${targetData.progress}</div>
  `;

  container.appendChild(example);

  const result = example.getBoundingClientRect().height;

  container.removeChild(example);

  return result;
}
