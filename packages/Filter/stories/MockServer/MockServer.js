import React from "react";
import Spinner from "@paprika/spinner";
import Filter, { useFilter } from "../../src";
import * as api from "./api";

const columnsSettings = [
  {
    id: "goals",
    type: Filter.types.columnTypes.NUMBER,
    label: "Goals",
  },
  {
    id: "name",
    type: Filter.types.columnTypes.TEXT,
    label: "Name",
  },
  {
    id: "status",
    type: Filter.types.columnTypes.TEXT,
    label: "Status",
  },
  { id: "country", label: "Country", type: "TEXT" },
  {
    id: "joined",
    type: Filter.types.columnTypes.DATE,
    label: "Joined by",
    momentParsingFormat: "MM/DD/YYYY",
  },
  {
    id: "shareable",
    type: Filter.types.columnTypes.BOOLEAN,
    label: "Shareable",
  },
];

const orderedColumnIds = columnsSettings.map(column => column.id);

const customRulesByType = {
  ...Filter.defaultRulesByType,
  CUSTOM_SELECT: [Filter.rules.IS, Filter.rules.IS_NOT, Filter.rules.IS_EMPTY, Filter.rules.IS_NOT_EMPTY],
};

export default function FilterWithServer() {
  const [serverSideData, setServerSideData] = React.useState(null);
  const [isPending, setIsPending] = React.useState(true);
  const { filters, getFilterProps, getFilterItemProps } = useFilter({
    columns: columnsSettings,
    rulesByType: customRulesByType,
    initialState: {
      isResultControlled: true,
    },
  });
  const filterProps = getFilterProps();

  React.useEffect(() => {
    (async function anyNameFunction() {
      const data = await api.fetchAll();
      setServerSideData(data);
      setIsPending(false);
    })();
  }, []);

  async function handleApply() {
    filterProps.onApply();
    setIsPending(true);
    const mockFilterResult = await api.filterBy();
    setServerSideData(mockFilterResult);
    setIsPending(false);
  }

  return (
    <React.Fragment>
      <Filter {...filterProps} columns={columnsSettings} rulesByType={customRulesByType} onApply={handleApply}>
        {filters.map((filter, index) => (
          <Filter.Item
            {...getFilterItemProps()}
            columnId={filter.columnId}
            id={filter.id}
            index={index}
            key={filter.id}
            rule={filter.rule}
            type={filter.type}
            value={filter.value}
          />
        ))}
      </Filter>

      {isPending ? (
        <Spinner />
      ) : (
        <table>
          <thead>
            <tr>
              <th>id</th>
              {orderedColumnIds.map(id => (
                <th key={id}>{id}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {serverSideData.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                {orderedColumnIds.map(id => (
                  <td key={id}>{`${item[id]}`}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </React.Fragment>
  );
}
