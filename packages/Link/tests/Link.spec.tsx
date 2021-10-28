import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import Link from "../src";

const mockUrl = "http://wegalvanize.com";

describe("Link", () => {
  it("should render with text passed as children", () => {
    const { getByText } = render(<Link href={mockUrl}>Link text</Link>);
    expect(getByText(/Link text/i)).toBeVisible();
  });

  it("should render href on a tag", () => {
    render(<Link href={mockUrl}>example text</Link>);
    expect(document.querySelector("a")!.getAttribute("href")).toBe(mockUrl);
  });

  it("should not fail any accessibility tests", async () => {
    const { container } = render(<Link href={mockUrl}>Link text</Link>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("expects to open in a new tab for external links", async () => {
    render(
      <Link href={mockUrl} isExternalLink>
        External Link
      </Link>
    );
    expect(document.querySelector("a")!.getAttribute("target")).toBe("_blank");
  });
});
