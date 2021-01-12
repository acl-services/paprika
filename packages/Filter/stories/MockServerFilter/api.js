import data from "../ShowcaseApp/data";

export const fetchAll = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 800);
  });
};

export const filterBy = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([data[1]]);
    }, 800);
  });
};
