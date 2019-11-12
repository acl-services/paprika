export default function fixtures(times = 0) {
  const data = [
    ["Austria", "Josef Bican ‡", 805, "inactive"],
    ["Brazil", "Romário", 772, "inactive"],
    ["Brazil", "Pelé", 767, "inactive"],
    ["Hungary", "Ferenc Puskás ‡	", 746, "inactive"],
    ["Germany", "Gerd Müller", 735, "inactive"],
    ["Portugal ", "Cristiano Ronaldo", 720, "active"],
    ["Argentina", "Lionel Messi	", 704, "active"],
    ["Hungary", "Ferenc Deák ‡", 576, "inactive"],
    ["Germany", "Uwe Seeler", 575, "inactive"],
    ["Brazil", "Túlio Maravilha	", 575, "inactive"],
    ["Brazil", "Arthur Friedenreich", 557, "inactive"],
    ["Poland", "Ernst Willimowski ‡", 554, "inactive"],
    ["Portugal", "Eusébio", 552, "inactive"],
    ["Scotland", "Jimmy McGrory", 550, "inactive"],
    ["Austria", "Franz Binder ‡", 546, "inactive"],
    ["Portugal ", "Fernando Peyroteo", 544, "inactive"],
    ["Sweden", "Zlatan Ibrahimović	", 543, "active"],
    ["Mexico", "Hugo Sánchez	", 541, "inactive"],
    ["Germany", "Fritz Walter ‡", 539, "inactive"],
    ["Hungary", "József Takács ‡	", 523, "inactive"],
    ["Hungary", "Gyula Zsengellér ‡	", 522, "inactive"],
    ["Brazil", "Zico", 522, "inactive"],
    ["Argentina", "Alfredo Di Stéfano ‡", 514, "inactive"],
    ["Austria", "Hans Krankl", 514, "inactive"],
    ["Sweden", "Gunnar Nordahl ‡", 513, "inactive"],
    ["Brazil", "Roberto Dinamite", 512, "inactive"],
    ["England", "Jimmy Greaves", 511, "inactive"],
    ["Hungary", "Ferenc Bene ‡", 508, "inactive"],
  ];

  let newData = [];
  for (let i = 0; i < times; i++) {
    newData = newData.concat(data);
  }

  return times ? newData : data;
}
