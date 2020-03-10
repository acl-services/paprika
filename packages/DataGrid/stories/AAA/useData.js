import React from "react";

export default function useData() {
  const [data, setData] = React.useState(null);
  const [columns, setColumns] = React.useState(null);

  React.useEffect(() => {
    async function loadData() {
      const response = await fetch("http://ux.bucket.zsilva.s3-website-us-west-2.amazonaws.com/aanda.json");
      const data = await response.json();
      // assuming we always get data back, in this demo is always true, unless we are offline
      setColumns(() => {
        return Object.keys(data[0]).map(k => k);
      });
      setData(data);
    }

    if (data === null) {
      loadData();
    }
  }, [data, setData]);

  return { data, columns };
}
