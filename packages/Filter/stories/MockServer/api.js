import data from "../Showcase/data";

export const fetchAll = () => new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 800);
  });

export const filterBy = () => new Promise(resolve => {
    setTimeout(() => {
      resolve([data[1]]);
    }, 800);
  });
