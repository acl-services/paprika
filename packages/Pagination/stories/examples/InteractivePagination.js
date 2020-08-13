import React from "react";
import { Story } from "storybook/assets/styles/common.styles";
import Tabs from "@paprika/tabs";
import Pagination from "../../src/Pagination";

export default () => {
  const [currentSelection, setCurrentSelection] = React.useState("Pepsi");

  const renderTabs = () => {
    const tabs = ["Pepsi", "Coke", "Diet Coke", "Canada Dry"];
    return tabs.map(tabLabel => (
      <Tabs.Tab isSelected={tabLabel === currentSelection} key={tabLabel}>
        {tabLabel}
      </Tabs.Tab>
    ));
  };
  const renderPanels = () => {
    const panels = [
      "Pepsi – Lomo street art austin bushwick semiotics 8-bit banh mi disrupt hexagon woke.",
      "Coke – Chicharrones vegan twee adaptogen, celiac aesthetic hoodie disrupt cold-pressed raclette helvetica hella distillery vaporware.",
      "Diet Coke – Viral brooklyn hoodie post-ironic cornhole hexagon.",
      "Canada Dry – Retro pour-over gentrify disrupt sartorial, kombucha flexitarian cornhole hoodie celiac man braid artisan",
    ];

    return panels.map(panelBody => <Tabs.Panel key={panelBody}>{panelBody}</Tabs.Panel>);
  };

  function ChangePage(page) {
    if (page === 1) {
      setCurrentSelection("Pepsi");
    } else if (page === 2) {
      setCurrentSelection("Coke");
    } else if (page === 3) {
      setCurrentSelection("Diet Coke");
    } else if (page === 4) {
      setCurrentSelection("Canada Dry");
    }
  }
  return (
    <Story>
      <div>
        <Tabs>
          <Tabs.List>{renderTabs(false)}</Tabs.List>
          <Tabs.Panels>{renderPanels(false)}</Tabs.Panels>
        </Tabs>
      </div>
      <Pagination onClickPage={ChangePage} style={{ marginTop: "100px" }} totalPages={4} currentPage={1} />
    </Story>
  );
};
