import React from "react";
import { Gap } from "storybook/assets/styles/common.styles";
import tokens from "@paprika/tokens";
import Link from "../../src";

export default function variations(): JSX.Element {
  const url = "http://www.wegalvanize.com";
  return (
    <>
      <Link href={url}>Default Link</Link>
      <Link href={url} hasNoUnderline>
        Link without underline
      </Link>
      <Gap.Small />
      <Link href={url} isExternalLink>
        External Link
      </Link>
      <Gap.Small />
      <Link href={url} isSubtle>
        Subtle Link
      </Link>
      <Link href={url} isSubtle hasNoUnderline>
        Subtle Link without underline
      </Link>
      <Gap.Small />
      <Link href={url} maxWidth="200px">
        Link with a fixed 200px max-width
      </Link>
      <Link href={url} maxWidth="200px" hasTruncation>
        Truncated Link with a fixed 200px max-width
      </Link>
      <Gap.Small />
      <Link href={url} maxWidth="200px" isExternalLink>
        ExternalLink with a fixed 200px max-width
      </Link>
      <Link href={url} maxWidth="200px" isExternalLink hasTruncation>
        Truncated ExternalLink with a fixed 200px max-width
      </Link>
      <Gap.Small />
      <div style={{ maxWidth: "500px" }}>
        <Link href={url}>
          Example of super long link without max-width that will extends to its containers wdith Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </Link>
        <Gap.Small />
        <Link href={url} isExternalLink>
          Example of super long external link without max-width that will extends to its containers wdith Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </Link>
      </div>
      <Gap.Small />
      <div style={{ maxWidth: "500px", background: `${tokens.color.black}` }}>
        <Gap.Small />
        <Link href={url} isDark>
          Link in dark background
        </Link>
        <Link href={url} isDark hasNoUnderline>
          Without underline
        </Link>
        <Gap.Small />
        <Link href={url} isDark isSubtle>
          Subtle Link in dark background
        </Link>
        <Gap.Small />
      </div>
    </>
  );
}
