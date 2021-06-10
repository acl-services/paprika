import React from "react";
import { render, screen } from "@testing-library/react";
import NotificationCard from "../src";

describe("NotificationCard", () => {
  it("Renders image, header, body and footer content", () => {
    render(
      <NotificationCard>
        <NotificationCard.Image>Mock image</NotificationCard.Image>
        <NotificationCard.Header level={1}>Header content</NotificationCard.Header>
        <NotificationCard.Body>Body content</NotificationCard.Body>
        <NotificationCard.Footer>Footer content</NotificationCard.Footer>
      </NotificationCard>
    );

    expect(screen.queryByText(/Mock image/i)).toBeInTheDocument();
    expect(screen.queryByText(/Header content/i)).toBeInTheDocument();
    expect(screen.queryByRole("heading").tagName).toEqual("H1");
    expect(screen.queryByText(/Body content/i)).toBeInTheDocument();
    expect(screen.queryByText(/Footer content/i)).toBeInTheDocument();
  });

  it("Renders component without some sub-components", () => {
    render(
      <NotificationCard>
        <NotificationCard.Header level={2}>Header content</NotificationCard.Header>
        <NotificationCard.Body>Body content</NotificationCard.Body>
      </NotificationCard>
    );

    expect(screen.queryByText(/Header content/i)).toBeInTheDocument();
    expect(screen.queryByRole("heading").tagName).toEqual("H2");
    expect(screen.queryByText(/Body content/i)).toBeInTheDocument();
  });
});
