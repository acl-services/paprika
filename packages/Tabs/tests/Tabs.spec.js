import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Tabs from "../src";

function renderTabsComponent(props = {}) {
  return render(
    <Tabs {...props}>
      <Tabs.List>
        <Tabs.Tab>Hello</Tabs.Tab>
        <Tabs.Tab>World</Tabs.Tab>
        <Tabs.Tab isDisabled>Disabled Tab</Tabs.Tab>
        <Tabs.Tab href="https://wegalvanize.com/">Linked Tab</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panels>
        <Tabs.Panel>Content for first tab</Tabs.Panel>
        <Tabs.Panel>Content for second tab</Tabs.Panel>
        <Tabs.Panel>Disabled tab panel</Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  );
}

describe("Tabs", () => {
  it("should render tabs", () => {
    const { getByText } = renderTabsComponent();

    expect(getByText(/Hello/i)).toBeInTheDocument();
    expect(getByText(/World/i)).toBeInTheDocument();
  });

  it("should show correct tab when clicked", () => {
    const { getByText } = renderTabsComponent();

    fireEvent.click(getByText(/World/i));
    expect(getByText(/Content for second tab/i)).toBeInTheDocument();

    fireEvent.click(getByText(/Hello/i));
    expect(getByText(/Content for first tab/i)).toBeInTheDocument();
  });

  it("should render a link tab when href is passed as prop", () => {
    const { getByText } = renderTabsComponent();

    expect(getByText(/Linked Tab/i).getAttribute("href")).toBe("https://wegalvanize.com/");
  });

  it("should display correct tab when defaultIndex is passed as prop", () => {
    const { getByText } = renderTabsComponent({ defaultIndex: 1 });

    expect(getByText(/Content for second tab/i)).toBeInTheDocument();
  });

  describe("disabled", () => {
    it("should not display tab panel when clicking on disabled tab", () => {
      const { getByText, queryByText } = renderTabsComponent();

      fireEvent.click(getByText(/Disabled Tab/i));
      expect(queryByText(/Disabled tab panel/i)).not.toBeInTheDocument();
    });

    it("tabs are all disabled when isDisabled prop is passed to parent Tab", () => {
      const { getByText, queryByText } = renderTabsComponent({ isDisabled: true });

      fireEvent.click(getByText(/World/i));
      expect(queryByText(/Content for second tab/i)).not.toBeInTheDocument();

      fireEvent.click(getByText(/Disabled Tab/i));
      expect(queryByText(/Disabled tab panel/i)).not.toBeInTheDocument();
    });
  });

  describe("performance", () => {
    it("should only render the selected panel", () => {
      const { queryByText } = renderTabsComponent();

      expect(queryByText(/Content for first tab/i)).toBeInTheDocument();
      expect(queryByText(/Content for second tab/i)).not.toBeInTheDocument();
      expect(queryByText(/Disabled tab panel/i)).not.toBeInTheDocument();
    });
  });
});
