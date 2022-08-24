import React from "react";
import ListBoxBrowser from "../../src";

const defaultData = [
  {
    label: "Root",
    options: [
      {
        label: "Marvel Universe",
        key: "0",
        options: [],
      },
      {
        label: "DC Universe",
        key: "1",
        options: [],
      },
    ],
  },
];

const fakeDB = {
  "0": [{ label: "Deadpool" }, { label: "Wolverine" }, { label: "The Hulk" }],
  "1": [{ label: "Batman" }, { label: "Wonderwoman" }, { label: "Superman" }],
};

function fakeFetch({ ms = 1000, key }) {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve(fakeDB[key]);
    }, ms)
  );
}

export default function Lazy() {
  const [isBrowserLoading, setIsBrowserLoading] = React.useState(false);
  const [data, setData] = React.useState(defaultData);

  async function handleFetch(option) {
    setIsBrowserLoading(() => true);
    const key = option.key;
    const response = await fakeFetch({ key });

    setData(data => {
      const cloneData = data.splice(0);
      const o = ListBoxBrowser.findOption(cloneData, option => option.key === key);
      o.options = response;

      return cloneData;
    });
    setIsBrowserLoading(() => false);
  }

  return (
    <ListBoxBrowser
      data={data}
      browserTitle="Heroes"
      defaultSelectedView={() => false}
      defaultSelectedOptions={() => false}
      hasLeftColumn={false}
      onChange={selectedOptions => {
        console.log("selected options:", selectedOptions);
      }}
      onFetch={handleFetch}
    >
      <ListBoxBrowser.Browser isLoading={isBrowserLoading} />
      <ListBoxBrowser.OptionsSelected />
    </ListBoxBrowser>
  );
}
