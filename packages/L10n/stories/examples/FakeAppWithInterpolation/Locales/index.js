const locales = {};

["en", "fr"].forEach(lng => {
  Object.assign(locales, require(`./${lng}.js`).default);
});

export default locales;
