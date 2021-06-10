import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import ExternalLink from "../src";

const mockUrl = "http://wegalvanize.com";

describe("ExternalLink", () => {
  it("should render with text passed as children", () => {
    const { getByText } = render(<ExternalLink href={mockUrl}>ExternalLink text</ExternalLink>);
    expect(getByText(/ExternalLink text/i)).toBeVisible();
  });

  it("should render href on a tag", () => {
    render(<ExternalLink href={mockUrl}>example text</ExternalLink>);
    expect(document.querySelector("a").getAttribute("href")).toBe(mockUrl);
  });

  it("should not fail any accessibility tests", async () => {
    const { container } = render(<ExternalLink href={mockUrl}>ExternalLink text</ExternalLink>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
