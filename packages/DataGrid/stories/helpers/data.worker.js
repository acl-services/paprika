import faker from "faker";

const _faker = [
  "name:firstName",
  "name:lastName",
  "lorem:paragraph",
  "lorem:sentences",
  "name:jobTitle",
  "name:prefix",
  "name:suffix",
  "name:title",
  "name:jobDescriptor",
  "name:jobArea",
  "name:jobType",
  "address:zipCode",
  "address:city",
  "address:cityPrefix",
  "address:citySuffix",
  "address:streetName",
  "address:streetAddress",
  "address:streetSuffix",
  "address:streetPrefix",
  "address:secondaryAddress",
  "address:county",
  "address:country",
  "address:countryCode",
  "address:state",
  "address:stateAbbr",
  "address:latitude",
  "address:longitude",
  "commerce:color",
  "commerce:department",
  "commerce:productName",
  "commerce:price",
  "commerce:productAdjective",
  "commerce:productMaterial",
  "commerce:product",
  "company:suffixes",
  "company:companyName",
  "company:companySuffix",
  "company:catchPhrase",
  "company:bs",
  "company:catchPhraseAdjective",
  "company:catchPhraseDescriptor",
  "company:catchPhraseNoun",
  "company:bsAdjective",
  "company:bsBuzz",
  "company:bsNoun",
  "database:column",
  "database:type",
  "database:collation",
  "database:engine",
  "finance:account",
  "finance:accountName",
  "finance:mask",
  "finance:amount",
  "finance:transactionType",
  "finance:currencyCode",
  "finance:currencyName",
  "finance:currencySymbol",
  "finance:bitcoinAddress",
  "finance:iban",
  "finance:bic",
];

export function getDataFromWorker(rows = 400, columns = 10) {
  // block for half a second to demonstrate asynchronicity
  const data = Array(rows).fill(null);
  const l = _faker.length;

  return data.map((_, index) => {
    const f = faker;
    const columnsObj = {};
    let i = 0;
    while (i < columns) {
      const index = i % l;
      const split = _faker[index].split(":");

      columnsObj[`${i}-${split[1]}`] = f[split[0]][split[1]]();
      i++;
    }

    return {
      key: index,
      ...columnsObj,
    };
  });
}
