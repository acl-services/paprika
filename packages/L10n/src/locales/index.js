const locales = {};

["en", "de", "fr", "es", "pt", "pl", "ja", "zh"].forEach(lng => {
  // eslint-disable-next-line
  Object.assign(locales, require(`../locales-js/${lng}.js`).default);
});

export default locales;
