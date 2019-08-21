import React from "react";
import { render, configure } from "@testing-library/react";
import L10n from "@paprika/l10n";
import Confirmation from "../src";

configure({ testIdAttribute: "data-qa-anchor" });

function renderComponent() {
  const renderedComponent = render(
    <L10n>
      <Confirmation defaultIsOpen confirmLabel="Confirm Delete" onConfirm={() => {}} heading="Delete Button?" />
    </L10n>
  );

  return {
    ...renderedComponent,
  };
}

// function renderComponentWithTrigger() {
//   const renderedComponent = render(
//     <L10n>
//       <Confirmation
//         confirmLabel="Confirm Delete"
//         onConfirm={() => {}}
//         heading="Delete Button?"
//         renderTrigger={({ isConfirmOpen, handleOpenConfirm }) => (
//           <Confirmation.Trigger isConfirmOpen={isConfirmOpen} onOpenConfirm={handleOpenConfirm}>
//             Trigger
//           </Confirmation.Trigger>
//         )}
//       />
//     </L10n>
//   );

//   return {
//     ...renderedComponent,
//   };
// }

describe("Confirmation", () => {
  let getByText;
  let confirmationComponent;
  // const onOpenManageTableSidePanel = jest.fn();

  beforeEach(() => {
    ({ getByText } = renderComponent());
    confirmationComponent = getByText(/confirm delete/i);
  });

  it("should show confirmation panel by default when mounted ", () => {
    expect(confirmationComponent).toBeVisible();
  });

  it("should trigger the confirm callback when confirm button is clicked", () => {
    // expect(confirmationComponent).toBeVisible();
  });

  it("should close the confirmation when clicking outside of the confirmation panel", () => {
    // expect(confirmationComponent).toBeVisible();
  });

  it("should trigger the onConfirm callback when clicking the confirm button", () => {
    // expect(confirmationComponent).toBeVisible();
  });
});
