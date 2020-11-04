import ListBoxTags from "../src";

describe("ListBoxTags", () => {
  it("should filter correctly the option", () => {
    const data = [
      { id: 1, label: "The Dog" },
      { id: 2, label: "The Fox" },
      { id: 3, label: "The Raccoon" },
      { id: 4, label: "Dinosaur" },
    ];

    expect(ListBoxTags.filter("dog", data)).toMatchSnapshot();
    expect(ListBoxTags.filter("fox", data)).toMatchSnapshot();
    expect(ListBoxTags.filter("Raccoon", data)).toMatchSnapshot();
    expect(ListBoxTags.filter("the", data)).toMatchSnapshot();
    expect(ListBoxTags.filter("saur", data)).toMatchSnapshot();
  });
});
