import React from "react";
import { render } from "@testing-library/react";
import ExternalLink from "../src";

describe("ExternalLink", () => {
  it("should render default link word of view", () => {
    const { getByText } = render(<ExternalLink href="http://wegalvanize.com" />);
    expect(getByText(/view/i)).toBeVisible();
  });

  it("should render children if provided", () => {
    const { getByText } = render(<ExternalLink href="http://wegalvanize.com">example text</ExternalLink>);
    expect(getByText(/example text/i)).toBeVisible();
  });

  it("should render href on a tag", () => {
    render(<ExternalLink href="http://wegalvanize.com">example text</ExternalLink>);
    expect(document.querySelector("a").getAttribute("href")).toBe("http://wegalvanize.com");
  });
});
