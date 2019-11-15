export default function fixtures(times = 0) {
  const data = [
    { country: "Austria", name: "Josef Bican ‡", goals: 805, status: "inactive" },
    { country: "Brazil", name: "Romário", goals: 772, status: "inactive" },
    { country: "Brazil", name: "Pelé", goals: 767, status: "inactive" },
    { country: "Hungary", name: "Ferenc Puskás ‡	", goals: 746, status: "inactive" },
    { country: "Germany", name: "Gerd Müller", goals: 735, status: "inactive" },
    { country: "Portugal", name: "Cristiano Ronaldo", goals: 720, status: "active" },
    { country: "Argentina", name: "Lionel Messi	", goals: 704, status: "active" },
    { country: "Hungary", name: "Ferenc Deák ‡", goals: 576, status: "inactive" },
    { country: "Germany", name: "Uwe Seeler", goals: 575, status: "inactive" },
    { country: "Brazil", name: "Túlio Maravilha	", goals: 575, status: "inactive" },
    { country: "Brazil", name: "Arthur Friedenreich", goals: 557, status: "inactive" },
    { country: "Poland", name: "Ernst Willimowski ‡", goals: 554, status: "inactive" },
    { country: "Portugal", name: "Eusébio", goals: 552, status: "inactive" },
    { country: "Scotland", name: "Jimmy McGrory", goals: 550, status: "inactive" },
    { country: "Austria", name: "Franz Binder ‡", goals: 546, status: "inactive" },
    { country: "Portugal", name: "Fernando Peyroteo", goals: 544, status: "inactive" },
    { country: "Sweden", name: "Zlatan Ibrahimović	", goals: 543, status: "active" },
    { country: "Mexico", name: "Hugo Sánchez	", goals: 541, status: "inactive" },
    { country: "Germany", name: "Fritz Walter ‡", goals: 539, status: "inactive" },
    { country: "Hungary", name: "József Takács ‡	", goals: 523, status: "inactive" },
    { country: "Hungary", name: "Gyula Zsengellér ‡	", goals: 522, status: "inactive" },
    { country: "Brazil", name: "Zico", goals: 522, status: "inactive" },
    { country: "Argentina", name: "Alfredo Di Stéfano ‡", goals: 514, status: "inactive" },
    { country: "Austria", name: "Hans Krankl", goals: 514, status: "inactive" },
    { country: "Sweden", name: "Gunnar Nordahl ‡", goals: 513, status: "inactive" },
    { country: "Brazil", name: "Roberto Dinamite", goals: 512, status: "inactive" },
    { country: "England", name: "Jimmy Greaves", goals: 511, status: "inactive" },
    { country: "Hungary", name: "Ferenc Bene ‡", goals: 508, status: "inactive" },
  ];

  let newData = [];
  let itemIndex = 0;
  for (let i = 0; i < times; i++) {
    // eslint-disable-next-line no-loop-func
    newData = newData.concat(data.map(item => ({ ...item, id: itemIndex++ })));
  }

  return times ? newData : data;
}
