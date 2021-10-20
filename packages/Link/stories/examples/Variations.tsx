import React from "react";
import { Gap } from "storybook/assets/styles/common.styles";
import tokens from "@paprika/tokens";
import Link from "../../src";

export default function variations() {
  const url = "http://www.wegalvanize.com";
  return (
    <>
      <Link href={url}>Link with underline</Link>
      <Link href={url} hasNoUnderline>
        Link without underline
      </Link>
      <Gap.Small />
      <Link href={url} isExternalLink>
        External Link
      </Link>
      <Gap.Small />
      <Link href={url} isSubtle hasNoUnderline>
        Subtle Link (black with no underline)
      </Link>
      <Gap.Small />
      <Link href={url} maxWidth="200px">
        Truncated link with a fixed width
      </Link>
      <Gap.Small />
      <div style={{ maxWidth: "500px" }}>
        <Link href={url}>
          Example of super long link which will stay within a line Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Etiam vestibulum ipsum non justo faucibus maximus.
        </Link>
        <Gap.Small />
        <Link href={url} isExternalLink>
          Example of super long external link Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum
          ipsum non justo faucibus maximus.
        </Link>
      </div>
      <Gap.Small />
      <div style={{ maxWidth: "500px", background: `${tokens.color.black}` }}>
        <Gap.Small />
        <Link href={url} isDark>
          Example of link in dark background
        </Link>
        <Gap.Small />
      </div>
    </>
  );
}
