function getRandomInt(...args) {
  const min = Math.ceil(args[0]);
  const max = Math.floor(args[1]);
  return Math.floor(Math.random() * (max - min) + min);
}

const names = [
  "F. Scott Fitzgerald",
  "Marcel Proust",
  "James Joyce",
  "James Joyce",
  "Gabriel Garcia Marquez",
  "William Faulkner",
  "Virginia Woolf",
  "Vladimir Nabokov",
  "Leo Tolstoy",
  "Gustave Flaubert",
  "Leo Tolstoy",
  "Mark Twain",
  "George Eliot",
  "Herman Melville",
  "Charles Dickens",
  "Fyodor Dostoevsky",
  "Jane Austen",
];

export const subscriptionTypes = ["Professional", "Oversight", "Contributor", "Results Lite Contributor", "None"];

export default function users(num = 10) {
  return Array(num)
    .fill({
      name: "",
      status: "Active",
      role: "User",
      subscription: "",
      reportsRole: "Report Admin",
      an: false,
      activations: 0,
      signed: "Tue, July 21, 2020, 3:49:08 PM Pacific Daylight Time",
    })
    .map(item => ({
        ...item,
        name: names[getRandomInt(0, names.length - 1)],
        subscription: subscriptionTypes[getRandomInt(0, subscriptionTypes.length - 1)],
        an: Boolean(getRandomInt(0, 2)),
      }));
}
