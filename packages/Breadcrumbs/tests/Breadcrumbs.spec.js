import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { axe } from "jest-axe";
import L10n from "@paprika/l10n";
import Breadcrumbs from "../src";

describe("Breadcrumbs", () => {
  it("Renders basic Breadcrumbs", () => {
    render(
      <L10n>
        <Breadcrumbs>
          <Breadcrumbs.Link href="mock_url">Home page</Breadcrumbs.Link>
          <Breadcrumbs.Link href="mock_url">Parent page</Breadcrumbs.Link>
        </Breadcrumbs>
      </L10n>
    );

    expect(screen.getByText(/home page/i)).toBeVisible();
    expect(screen.getByText(/parent page/i)).toBeVisible();
    expect(screen.queryByTestId("breadcrumbs.expand-button")).not.toBeInTheDocument();
  });

  it("Collapses if there are more than 3 breadcrumb items", () => {
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

    expect(screen.queryByText(/parent page/i)).not.toBeVisible();
    expect(screen.getByTestId("breadcrumbs.expand-button"));

    fireEvent.click(screen.getByTestId("breadcrumbs.expand-button"));

    expect(screen.queryByText(/parent page/i)).toBeVisible();
    expect(screen.queryByTestId("breadcrumbs.expand-button")).not.toBeVisible();
  });

  it("should not fail any accessibility tests", async () => {
    const { container } = render(
      <L10n>
        <Breadcrumbs>
          <Breadcrumbs.Link href="mock_url">Home page</Breadcrumbs.Link>
          <Breadcrumbs.Link href="mock_url">Parent page</Breadcrumbs.Link>
        </Breadcrumbs>
      </L10n>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
