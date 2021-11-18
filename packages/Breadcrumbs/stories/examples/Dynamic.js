import React from "react";
import { Gap } from "storybook/assets/styles/common.styles";
import Spinner from "@paprika/spinner";
import Breadcrumbs from "../../src";

const URL = "https://www.wegalvanize.com/";

const moreLinks = [
  <Breadcrumbs.Link href={URL}>CRUMB X</Breadcrumbs.Link>,
  <Breadcrumbs.Link href={URL}>CRUMB Y</Breadcrumbs.Link>,
  <Breadcrumbs.Link href={URL}>CRUMB Z</Breadcrumbs.Link>,
];

function fetchSomeLinks() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(moreLinks);
    }, 1500);
  });
}

export default function Example() {
  const [isLoading, setLoading] = React.useState(true);
  const [links, setLinks] = React.useState([<Breadcrumbs.Link href={URL}>Breadcrumb 1</Breadcrumbs.Link>]);
  const [links2, setLinks2] = React.useState([
    <Breadcrumbs.Link href={URL}>Breadcrumb 1</Breadcrumbs.Link>,
    <Breadcrumbs.Link href={URL}>Breadcrumb 2</Breadcrumbs.Link>,
    <Breadcrumbs.Link href={URL}>Breadcrumb 3</Breadcrumbs.Link>,
    <Breadcrumbs.Link href={URL}>Breadcrumb 4</Breadcrumbs.Link>,
  ]);

  React.useEffect(() => {
    fetchSomeLinks().then(data => {
      setLinks([...links, ...data]);
      setLinks2([...links2, ...data]);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Breadcrumbs>{links}</Breadcrumbs>
      <Gap />
      <Breadcrumbs>{links2}</Breadcrumbs>
      <Gap />
      {isLoading ? (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Spinner size={Spinner.types.size.SMALL} style={{ display: "inline-block", margin: "8px 8px 0 0" }} />
          Fetching...
        </div>
      ) : null}
    </>
  );
}
