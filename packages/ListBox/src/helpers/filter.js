// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

export const filter = (search, data, id = "label") => {
  const regex = new RegExp(escapeRegExp(`${search}`), "gi");
  const results = [];
  for (let i = 0, len = data.length; i < len; i++) {
    if (data[i][id].match(regex) !== null) {
      results.push(data[i]);
    }
  }

  return results;
};
