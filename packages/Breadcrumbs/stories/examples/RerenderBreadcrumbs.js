import React from "react";
import Button from "@paprika/button";
import L10n from "@paprika/l10n";
import Breadcrumbs from "../../src";

const URL = "https://www.wegalvanize.com/";

export default function RerenderBreadcrumbs() {
  const [clicked, setClicked] = React.useState(false);
  const children = [2, 3, 4].map(num => (
    <Breadcrumbs.Link key={num} href={URL}>{`Breadcrumb ${num}`}</Breadcrumbs.Link>
  ));

  return (
    <L10n locale="en">
      <Button onClick={() => setClicked(true)}>Click me</Button>
      <Breadcrumbs>
        <Breadcrumbs.Link href={URL}>Breadcrumb 1</Breadcrumbs.Link>

        {clicked ? children : null}
      </Breadcrumbs>
    </L10n>
  );
}
