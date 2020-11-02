import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import L10n from "@paprika/l10n";
import Breadcrumbs from "../src";

describe("Breadcrumbs", () => {
  it("Renders basic Breadcrumbs", async () => {
    render(
      <L10n>
        <Breadcrumbs>
          <Breadcrumbs.Link href="mock_url">Home page</Breadcrumbs.Link>
          <Breadcrumbs.Link href="mock_url">Parent page</Breadcrumbs.Link>
        </Breadcrumbs>
      </L10n>
    );

    expect(await screen.findByText(/home page/i)).toBeVisible();
    expect(await screen.findByText(/parent page/i)).toBeVisible();
    expect(screen.queryByTestId("breadcrumbs.expand-button")).not.toBeInTheDocument();
  });

  it("Collapses if there are more than 3 breadcrumb items", async () => {
    render(
      <L10n>
        <Breadcrumbs>
          <Breadcrumbs.Link href="mock_url">Home page</Breadcrumbs.Link>
          <Breadcrumbs.Link href="mock_url">Parent page</Breadcrumbs.Link>
          <Breadcrumbs.Link href="mock_url">Child page</Breadcrumbs.Link>
          <Breadcrumbs.Link href="mock_url">Another child page</Breadcrumbs.Link>
        </Breadcrumbs>
      </L10n>
    );

    expect(await screen.queryByText(/parent page/i)).not.toBeVisible();
    expect(screen.findByTestId("breadcrumbs.expand-button"));

    fireEvent.click(await screen.findByTestId("breadcrumbs.expand-button"));

    expect(await screen.queryByText(/parent page/i)).toBeVisible();
    expect(screen.queryByTestId("breadcrumbs.expand-button")).not.toBeVisible();
  });
});
