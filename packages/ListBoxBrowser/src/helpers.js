const hasOptions = options => typeof options !== "undefined" && Array.isArray(options);

export function getData({ data, path = "" }) {
  return data.map(({ label = null, options, defaultIsSelected = false, ...moreAttributes }, index) => {
    if (!label) {
      throw new Error("A Label attribute is required for each option object, can't process data.");
    }
    const newPath = path === "" ? `${index}` : `${path}/${index}`;
    const _hasOptions = hasOptions(options);
    return {
      parent: path,
      hasOptions: _hasOptions,
      $$key: newPath,
      attributes: {
        defaultIsSelected,
        label,
        options: _hasOptions ? getData({ data: options, path: newPath }) : null,
        ...moreAttributes,
      },
    };
  });
}

export function getOptionByKey(data, path) {
  let node = null;
  function runner(data, path) {
    return data.map(option => {
      if (!option.$$key.includes("/") && (typeof data[path] !== "undefined" && option.$$key === path)) {
        node = option;
        throw new Error("option found");
      }

      if (option.$$key === path) {
        node = option;
        throw new Error("option found");
      }

      if (hasOptions(option.attributes.options)) {
        return runner(option.attributes.options, path);
      }

      return [];
    });
  }

  try {
    runner(data, path);
    return [];
  } catch (e) {
    return node;
  }
}
