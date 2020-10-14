import React from "react";
import L10n from "@paprika/l10n";
import Breadcrumbs from "../../src";

const URL = "https://www.wegalvanize.com/";

export default function Example() {
  return (
    <L10n locale="en">
      <Breadcrumbs>
        <Breadcrumbs.Link href={URL}>Breadcrumb 1</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 2</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 3</Breadcrumbs.Link>
        <Breadcrumbs.Link href={URL}>Breadcrumb 4</Breadcrumbs.Link>
      </Breadcrumbs>
    </L10n>
  );
}
