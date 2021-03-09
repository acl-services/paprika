let alphaSortCompareFunction;

// eslint-disable-next-line no-nested-ternary
const compareFunctionFallback = (a, b) => (a < b ? -1 : a > b ? 1 : 0);

function getCompareFunc(locale) {
  if (!Intl || !Intl.Collator) {
    return compareFunctionFallback;
  }

  return new Intl.Collator(locale, {
    sensitivity: "base",
  }).compare;
}

function alphaSortAsc(a, b) {
  return alphaSortCompareFunction(a, b);
}

export default function getAlphaSortFunction(locale) {
  if (!alphaSortCompareFunction) {
    alphaSortCompareFunction = getCompareFunc(locale);
  }

  return alphaSortAsc;
}
