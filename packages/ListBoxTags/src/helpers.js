export const filter = (search, data) => {
  const regex = new RegExp(`${search}`, "gi");
  const results = [];
  for (let i = 0, len = data.length; i < len; i++) {
    if (data[i].label.match(regex) !== null) {
      results.push(data[i]);
    }
  }

  return results;
};
