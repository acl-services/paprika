import React from "react";
import { render } from "@testing-library/react";
import ExternalLink from "../src";

const mockUrl = "http://wegalvanize.com";

describe("ExternalLink", () => {
  it("should render default link word of view", () => {
    const { getByText } = render(<ExternalLink href={mockUrl} />);
    expect(getByText(/view/i)).toBeVisible();
  });

  it("should render children if provided", () => {
    const { getByText } = render(<ExternalLink href={mockUrl}>example text</ExternalLink>);
    expect(getByText(/example text/i)).toBeVisible();
  });

  it("should render href on a tag", () => {
    render(<ExternalLink href={mockUrl}>example text</ExternalLink>);
    expect(document.querySelector("a").getAttribute("href")).toBe(mockUrl);
  });
});
