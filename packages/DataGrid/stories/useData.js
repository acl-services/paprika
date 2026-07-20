import React from "react";
import { getDataFromWorker } from './helpers/data.worker';

export default function useData(numberOfRows, numberOfColumns) {
  const [data, setData] = React.useState([]);
  const [isIdle, setIsIdle] = React.useState(true);

  React.useEffect(() => {
    async function loadData() {
      const data = getDataFromWorker(numberOfRows, numberOfColumns);
      setData(() => data);
      setIsIdle(() => false);
    }

    setIsIdle(() => true);
    loadData();
  }, [numberOfColumns, numberOfRows]);

  React.useEffect(() => {
    if (data.length > 0) {
      setIsIdle(() => false);
    }
  }, [data.length]);

  return { isIdle, data };
}
