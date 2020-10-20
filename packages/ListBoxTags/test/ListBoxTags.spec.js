import ListBoxTags from "../src";

describe("ListBoxTags", () => {
  it("should filter correctly the option", () => {
    const data = [
      { id: 1, label: "The Dog Jumps" },
      { id: 2, label: "The Fox Jumps" },
      { id: 3, label: "The Raccoon Jumps" },
    ];

    expect(ListBoxTags.filter("Dog", data)).toMatchSnapshot();
    expect(ListBoxTags.filter("Fox", data)).toMatchSnapshot();
    expect(ListBoxTags.filter("Jum", data)).toMatchSnapshot();
    expect(ListBoxTags.filter("abds", data)).toMatchSnapshot();
  });
});
