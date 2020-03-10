import nanoid from "nanoid";
import isEqual from "lodash";
import rawData from "./data.integration";
import filterTesters from "../IntegrationApp/helpers/filterTesters";
import sort from "../IntegrationApp/helpers/sort";

function setDataIds() {
  const newData = rawData.map(item => {
    return {
      key: nanoid(),
      ...item,
    };
  });

  return newData;
}

function getPaginatedSubset({ data, page }) {
  return data.slice(page * 200, page * 200 + 200);
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

export function getSubsetFromWorker({ sortedFields = [], filters = [], columns, operator, page }) {
  let sortedData = [];
  let filteredData = [];

  const data = setDataIds();

  if (filters.length === 0 && sortedFields.length === 0) return getPaginatedSubset({ data, page });

  if (sortedFields.length > 0) {
    sortedFields.forEach(field => {
      sortedData = sort({
        data,
        columnId: field.columnId,
        direction: field.direction,
        columnType: columns.find(column => field.columnId === column.id).type,
        momentParsingFormat: columns.find(column => field.columnId === column.id).momentParsingFormat,
      });
    });
  }
  if (filters.length > 0) {
    filteredData = data.filter(row => {
      // checking if filter.rule exist, will removed after having all the rules

      const tester = filter => {
        return filter.rule
          ? filterTesters[filter.rule](
              row[filter.columnId],
              filter.value,
              columns.find(column => filter.columnId === column.id)
            )
          : true;
      };
      return operator === "AND" ? filters.every(tester) : filters.some(tester);
    });
  }
  if (sortedData.length > 0 && filteredData.length > 0) {
    return sortedData.filter(item => filteredData.find(filteredItem => isEqual(filteredItem, item)));
  }
  return filters.length > 0
    ? getPaginatedSubset({ data: filteredData, page })
    : getPaginatedSubset({ data: sortedData, page });
}
