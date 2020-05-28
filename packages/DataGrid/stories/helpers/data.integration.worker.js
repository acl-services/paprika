import nanoid from "nanoid";
import rawData from "./data.integration";

export function setDataIds() {
  const newData = rawData.map(item => {
    return {
      key: nanoid(),
      ...item,
    };
  });

  return newData;
}

let data = null;
export function getDataFromWorker({ page, pageSize = 200 }) {
  if (data === null) {
    data = setDataIds();
  }

  return data.slice(page * pageSize, page * pageSize + pageSize);
}
