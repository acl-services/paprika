import React from "react";
import UploadIcon from "@paprika/icon/lib/Upload";
import { Gap } from "storybook/assets/styles/common.styles";
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
      <Link href={url} hasNoUnderline>
        <UploadIcon />
        link w/ icon and no underline
      </Link>
      <Link href={url} hasNoUnderline size="small">
        <UploadIcon />
        link w/ icon and no underline (small)
      </Link>
      <Gap.Small />
      <Link href={url} isBlack hasNoUnderline>
        Link (black with no underline)
      </Link>
      <Gap.Small />
      <Link href={url} isNavigation>
        <UploadIcon />
        Link is Navigation
      </Link>
      <Link href={url} isNavigation size="small">
        <UploadIcon />
        Link is Navigation (small)
      </Link>
    </>
  );
}
