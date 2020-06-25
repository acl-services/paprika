import React from "react";
import worker from "workerize-loader!./helpers/data.worker"; // eslint-disable-line import/no-webpack-loader-syntax

export default function useData(numberOfRows, numberOfColumns) {
  const [data, setData] = React.useState([]);
  const [isIdle, setIsIdle] = React.useState(true);

  React.useEffect(() => {
    async function loadData() {
      const w = worker();
      const data = await w.getDataFromWorker(numberOfRows, numberOfColumns);
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
