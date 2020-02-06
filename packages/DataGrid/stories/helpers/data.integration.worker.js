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

export function getColumnsFromWorker() {
  return [
    { id: "Priority", label: "Priority", type: "TEXT" },
    { id: "Status", label: "Status", type: "TEXT" },
    { id: "Published", label: "Published", type: "TEXT" },
    { id: "Publisher Name", label: "Publisher Name", type: "TEXT" },
    { id: "Updated", label: "Updated", type: "TEXT" },
    { id: "BusinessUnit", label: "BusinessUnit", type: "TEXT" },
    { id: "CreateUser", label: "CreateUser", type: "TEXT" },
    { id: "Currency1", label: "Currency1", type: "TEXT" },
    { id: "DebitCreditIndicator", label: "DebitCreditIndicator", type: "TEXT" },
    { id: "EmployeeEmail", label: "EmployeeEmail", type: "TEXT" },
    { id: "GL_AccountDescription", label: "GL_AccountDescription", type: "TEXT" },
    { id: "GL_AccountNumber", label: "GL_AccountNumber", type: "NUMBER" },
    { id: "LineID", label: "LineID", type: "TEXT" },
    { id: "Organization", label: "Organization", type: "TEXT" },
    { id: "TransactionID", label: "TransactionID", type: "TEXT" },
    { id: "TransactionSource", label: "TransactionSource", type: "NUMBER" },
    { id: "Type", label: "Type", type: "TEXT" },
    { id: "c_IsBackdated", label: "c_IsBackdated", type: "TEXT" },
    { id: "CreateDate", label: "CreateDate", type: "DATE", momentParsingFormat: "YYYY-MM-DD" },
    { id: "EffectiveDate", label: "EffectiveDate", type: "DATE", momentParsingFormat: "YYYY-MM-DD" },
    { id: "TransactionAmount", label: "TransactionAmount", type: "NUMBER" },
    { id: "Has Comments", label: "Has Comments", type: "TEXT" },
  ];
}
