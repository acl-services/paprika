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

    expect(screen.findByText(/Mock image/i));
    expect(screen.findByText(/Header content/i));
    expect(screen.queryByRole("heading").tagName).toEqual("H1");
    expect(screen.findByText(/Body content/i));
    expect(screen.findByText(/Footer content/i));
  });

  it("Renders component without some sub-components", () => {
    render(
      <NotificationCard>
        <NotificationCard.Header level={2}>Header content</NotificationCard.Header>
        <NotificationCard.Body>Body content</NotificationCard.Body>
      </NotificationCard>
    );

    expect(screen.findByText(/Header content/i));
    expect(screen.queryByRole("heading").tagName).toEqual("H2");
    expect(screen.findByText(/Body content/i));
  });
});
