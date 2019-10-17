import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import ListBoxBrowser from "../../src";

const propTypes = {};
const defaultProps = {};

const fakeDB = {
  "0": [{ label: "0_1" }, { label: "0_2" }, { label: "0_3" }],
  "1": [{ label: "1_1" }, { label: "1_2" }, { label: "2_3" }],
  "2": [{ label: "2_1" }, { label: "2_2" }, { label: "2_3" }],
  "3": [{ label: "3_1" }, { label: "3_2" }, { label: "3_3" }],
  "4": [{ label: "4_1" }, { label: "4_2" }, { label: "4_3" }],
  "5": [{ key: "5_1", label: "5_1", options: [] }, { key: "5_2", label: "5_2", options: [] }, { label: "5_3" }],
  "5_1": [{ label: "5_1_1" }, { label: "5_1_2" }, { label: "5_1_3" }],
  "5_2": [{ label: "5_2_1" }, { label: "5_2_2" }, { key: "5_2_3", label: "5_2_3", options: [] }],
  "5_2_3": [
    { label: "5_2_3_1" },
    { label: "5_2_3_2" },
    { label: "5_2_3_3" },
    { label: "5_2_3_4" },
    { label: "5_2_3_5" },
  ],
};

function fakeFetch({ ms = 1000, key }) {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve(fakeDB[key]);
    }, ms)
  );
}

export default function Lazy(props) {
  const [isBrowserLoading, setIsBrowserLoading] = React.useState(false);
  const [data, setData] = React.useState(props.defaultData);

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
    <Story>
      <ListBoxBrowser onFetch={handleFetch} data={data} rootTitle="Universes" browserTitle="Heroes">
        <ListBoxBrowser.Browser isLoading={isBrowserLoading} />
        <ListBoxBrowser.OptionsSelected />
      </ListBoxBrowser>
    </Story>
  );
}

Lazy.propTypes = propTypes;
Lazy.defaultProps = defaultProps;
