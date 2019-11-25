export default function fixtures(times = 0) {
  const data = [
    { country: "Austria", name: "Josef Bican ‡", goals: 805, status: "inactive", joined: "12/12/2019" },
    { country: "Brazil", name: "Romário", goals: 772, status: "inactive", joined: "08/11/2019" },
    { country: "Brazil", name: "Pelé", goals: 767, status: "inactive", joined: "04/01/2014" },
    { country: "Hungary", name: "Ferenc Puskás ‡	", goals: 746, status: "inactive", joined: "09/12/2014" },
    { country: "Germany", name: "Gerd Müller", goals: 735, status: "inactive", joined: "04/27/2014" },
    { country: "Portugal", name: "Cristiano Ronaldo", goals: 720, status: "active", joined: "04/23/2014" },
    { country: "Argentina", name: "Lionel Messi	", goals: 704, status: "active", joined: "04/25/2014" },
    { country: "Hungary", name: "Ferenc Deák ‡", goals: 576, status: "inactive", joined: "06/02/2014" },
    { country: "Germany", name: "Uwe Seeler", goals: 575, status: "inactive", joined: "02/14/2014" },
    { country: "Brazil", name: "Túlio Maravilha	", goals: 575, status: "inactive", joined: "09/28/2014" },
    { country: "Brazil", name: "Arthur Friedenreich", goals: 557, status: "inactive", joined: "12/01/2014" },
    { country: "Poland", name: "Ernst Willimowski ‡", goals: 554, status: "inactive", joined: "11/01/2014" },
    { country: "Portugal", name: "Eusébio", goals: 552, status: "inactive", joined: "01/12/2014" },
    { country: "Scotland", name: "Jimmy McGrory", goals: 550, status: "inactive", joined: "10/01/2014" },
    { country: "Austria", name: "Franz Binder ‡", goals: 546, status: "inactive", joined: "08/11/2014" },
    { country: "Portugal", name: "Fernando Peyroteo", goals: 544, status: "inactive", joined: "05/21/2014" },
    { country: "Sweden", name: "Zlatan Ibrahimović	", goals: 543, status: "active", joined: "07/11/2014" },
    { country: "Mexico", name: "Hugo Sánchez	", goals: 541, status: "inactive", joined: "05/01/2019" },
    { country: "Germany", name: "Fritz Walter ‡", goals: 539, status: "inactive", joined: "06/11/2019" },
    { country: "Hungary", name: "József Takács ‡	", goals: 523, status: "inactive", joined: "06/27/2019" },
    { country: "Hungary", name: "Gyula Zsengellér ‡	", goals: 522, status: "inactive", joined: "05/14/2019" },
    { country: "Brazil", name: "Zico", goals: 522, status: "inactive", joined: "04/30/2019" },
    { country: "Argentina", name: "Alfredo Di Stéfano ‡", goals: 514, status: "inactive", joined: "02/02/2013" },
    { country: "Austria", name: "Hans Krankl", goals: 514, status: "inactive", joined: "12/01/2014" },
    { country: "Sweden", name: "Gunnar Nordahl ‡", goals: 513, status: "inactive", joined: "10/01/2014" },
    { country: "Brazil", name: "Roberto Dinamite", goals: 512, status: "inactive", joined: "10/01/2019" },
    { country: "England", name: "Jimmy Greaves", goals: 511, status: "inactive", joined: "03/21/2012" },
    { country: "Hungary", name: "Ferenc Bene ‡", goals: 508, status: "inactive", joined: "12/18/2020", date: "" },
  ];

  let newData = [];
  let itemIndex = 0;
  for (let i = 0; i < times; i++) {
    // eslint-disable-next-line no-loop-func
    newData = newData.concat(data.map(item => ({ ...item, id: itemIndex++ })));
  }

  return times ? newData : data;
}
