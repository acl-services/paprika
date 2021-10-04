import { v4 as uuidv4 } from "uuid";
import rawData from "./data.integration";

export function setDataIds() {
  const newData = rawData.map(item => ({
    key: uuidv4(),
    ...item,
  }));

  return newData;
}

let data = null;
export function getDataFromWorker({ page, pageSize = 200 }) {
  if (data === null) {
    data = setDataIds();
  }

  return data.slice(page * pageSize, page * pageSize + pageSize);
}
