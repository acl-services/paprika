import React from "react";
import Heading from "@paprika/heading";
import Spinner from "@paprika/spinner";
import Filters, { useFilters } from "../../src";
import * as api from "./api";
import CustomSingleSelectFilter from "./CustomSingleSelectFilter";

const columnsSettings = [
  {
    id: "goals",
    type: Filters.types.columnTypes.NUMBER,
    label: "Goals",
  },
  {
    id: "name",
    type: Filters.types.columnTypes.TEXT,
    label: "Name",
  },
  {
    id: "status",
    type: Filters.types.columnTypes.TEXT,
    label: "Status",
  },
  { id: "country", label: "Country", type: "TEXT" },
  {
    id: "joined",
    type: Filters.types.columnTypes.DATE,
    label: "Joined by",
    momentParsingFormat: "MM/DD/YYYY",
  },
  {
    id: "shareable",
    type: Filters.types.columnTypes.BOOLEAN,
    label: "Shareable",
  },
  {
    id: "level",
    type: "CUSTOM_SELECT",
    label: "Level",
  },
];

const orderedColumnIds = columnsSettings.map(column => column.id);

const customRulesByType = {
  ...Filters.defaultRulesByType,
  CUSTOM_SELECT: [Filters.rules.IS, Filters.rules.IS_NOT, Filters.rules.IS_EMPTY, Filters.rules.IS_NOT_EMPTY],
};

export default function FiltersWithServer() {
  const [serverSideData, setServerSideData] = React.useState(null);
  const [isPending, setIsPending] = React.useState(true);
  const { filters, getFiltersProps, getFilterItemProps } = useFilters({
    columns: columnsSettings,
    rulesByType: customRulesByType,
    initialState: {
      isResultControlled: true,
    },
  });
  const filtersProps = getFiltersProps();

  React.useEffect(() => {
    (async function anyNameFunction() {
      const data = await api.fetchAll();
      setServerSideData(data);
      setIsPending(false);
    })();
  }, []);

  const renderLevelFilter = () => <CustomSingleSelectFilter />;

  async function handleApply() {
    filtersProps.onApply();
    setIsPending(true);
    const mockFilterResult = await api.filterBy();
    setServerSideData(mockFilterResult);
    setIsPending(false);
  }

  return (
    <React.Fragment>
      <Heading level={2}>Filters use api</Heading>

      <Filters {...filtersProps} columns={columnsSettings} rulesByType={customRulesByType} onApply={handleApply}>
        {filters.map((filter, index) => (
          <Filters.Item
            {...getFilterItemProps()}
            columnId={filter.columnId}
            id={filter.id}
            index={index}
            key={filter.id}
            renderValueField={filter.columnId === "level" ? renderLevelFilter : null}
            rule={filter.rule}
            type={filter.type}
            value={filter.value}
          />
        ))}
      </Filters>

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
