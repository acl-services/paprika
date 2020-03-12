import React from "react";

const types = {
  ATT_TYPE_ID: "NUMBER",
  ATTTYPE_NAME_ADMIN: "TEXT",
  ATTTYPE_NAME: "TEXT",
  SELECTTYPE_DESC: "TEXT",
  ATTTYPE_DESC: "TEXT",
  ATTTYPE_ORDER: "NUMBER",
  ATTTYPE_RSAM_ID: "TEXT",
  ATTTYPE_SP_MULTI_SELECT: "NUMBER",
  COUNT_OF_RELATED_ASSET_TYPES: "NUMBER",
  COUNT_OF_RELATED_RECORD_TYPES: "NUMBER",
  COUNT_OF_ROLES_ASSIGNED_THROUGH_THIS_ATTRIBUTE: "NUMBER",
};

const labels = {
  ATT_TYPE_ID: "Id",
  ATTTYPE_NAME_ADMIN: "Admin",
  ATTTYPE_NAME: "Name",
  SELECTTYPE_DESC: "Type",
  ATTTYPE_DESC: "Description",
  ATTTYPE_ORDER: "Order",
  ATTTYPE_RSAM_ID: "RSAM Id",
  ATTTYPE_SP_MULTI_SELECT: "Multi select",
  COUNT_OF_RELATED_ASSET_TYPES: "Asset type",
  COUNT_OF_RELATED_RECORD_TYPES: "Record type",
  COUNT_OF_ROLES_ASSIGNED_THROUGH_THIS_ATTRIBUTE: "Roles count",
};

export default function useData() {
  const [data, setData] = React.useState(null);
  const [columns, setColumns] = React.useState(null);

  React.useEffect(() => {
    async function loadData() {
      const response = await fetch("http://ux.bucket.zsilva.s3-website-us-west-2.amazonaws.com/aanda.json");
      const data = await response.json();
      // assuming we always get data back, in this demo is always true, unless we are offline
      setColumns(() => {
        return Object.keys(data[0]).map(k => ({
          id: k,
          key: k,
          label: labels[k],
          name: k,
          type: types[k],
        }));
      });
      setData(data);
    }

    if (data === null) {
      loadData();
    }
  }, [data, setData]);

  return { data, columns };
}
