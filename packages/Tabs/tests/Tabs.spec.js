import React from "react";
import { render } from "react-testing-library";
import Tabs from "../src";

function renderTabsComponent(props = {}) {
  return render(
    <Tabs {...props}>
      <Tabs.List>
        <Tabs.Tab label="Hello" />
        <Tabs.Tab label="World" />
      </Tabs.List>
      <Tabs.Panels>
        <Tabs.Panel>Content for hello</Tabs.Panel>
        <Tabs.Panel>Content for world</Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  );
}

describe("Tabs", () => {
  it("should render tabs", () => {
    const { getByText } = renderTabsComponent();

    expect(getByText(/Hello/i)).toBeVisible();
    expect(getByText(/World/i)).toBeVisible();
  });
});
