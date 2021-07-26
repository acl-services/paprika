const locales = {};

["en", "fr"].forEach(lng => {
  // eslint-disable-next-line
  Object.assign(locales, require(`./${lng}.js`).default);
});

export default locales;
