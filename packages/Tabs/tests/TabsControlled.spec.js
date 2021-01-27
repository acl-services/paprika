import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Tabs from "../src";

function ControlledTabs() {
  const [activeTabIndex, setActiveTabIndex] = React.useState(2);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setActiveTabIndex(1);
        }}
      >
        Go to middle tab
      </button>

      <Tabs
        onClickTab={clickedTabIndex => {
          setActiveTabIndex(clickedTabIndex);
        }}
        defaultIndex={activeTabIndex}
      >
        <Tabs.List>
          <Tabs.Tab>First tab</Tabs.Tab>
          <Tabs.Tab>Second tab</Tabs.Tab>
          <Tabs.Tab>Third tab</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panels>
          <Tabs.Panel>Content of tab 0. Try clicking on the tabs and the buttons!</Tabs.Panel>
          <Tabs.Panel>Content of tab 1. Try clicking on the tabs and the buttons!</Tabs.Panel>
          <Tabs.Panel>Content of tab 2. Try clicking on the tabs and the buttons!</Tabs.Panel>
        </Tabs.Panels>
      </Tabs>
    </>
  );
}

function renderTabsComponent() {
  return render(<ControlledTabs />);
}

describe("Tabs - Controlled", () => {
  it("should render the last tab by default", () => {
    const { getByText } = renderTabsComponent();
    expect(getByText(/Content of tab 2/i)).toBeInTheDocument();
  });

  it("should render the middle tab when click on that tab", () => {
    const { getByText } = renderTabsComponent();

    fireEvent.click(getByText(/Second tab/i));
    expect(getByText(/Content of tab 1/i)).toBeInTheDocument();
  });

  it("should render the middle tab when click on the external button", () => {
    const { getByText } = renderTabsComponent();

    fireEvent.click(getByText(/Go to middle tab/i));
    expect(getByText(/Content of tab 1/i)).toBeInTheDocument();
  });
});
