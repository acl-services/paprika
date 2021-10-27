function camelCase(str) {
  if (/\s/.test(str)) {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => (index === 0 ? word.toLowerCase() : word.toUpperCase()))
      .replace(/\s+/g, "")
      .replace(/[a-z&]/, (letter) => (letter.toUpperCase()));
  }
  return str.replace(/[a-z&]/, (letter) => (letter.toUpperCase()));
}

module.exports = {
  camelCase,
};
