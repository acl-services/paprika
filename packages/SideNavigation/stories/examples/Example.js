import React from "react";
import SideNavigation from "../../src";

const mockURL = "https://www.wegalvanize.com/";

export default function Example() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div
        style={{
          backgroundColor: "#f0f0f0",
          fontSize: "24px",
          height: "40px",
          paddingLeft: "8px",
        }}
      >
        Top navigation
      </div>
      <div style={{ display: "flex", flexDirection: "row", flexGrow: 1 }}>
        <SideNavigation header="Assets" offsetY={40}>
          <SideNavigation.Item href={mockURL}>First item (0)</SideNavigation.Item>
          <SideNavigation.Item isCurrent href={mockURL}>
            Second item (1000)
          </SideNavigation.Item>
          <SideNavigation.Item href={mockURL}>Long text item with (100000000) items inside</SideNavigation.Item>
        </SideNavigation>
        <div>Page content</div>
      </div>
    </div>
  );
}
