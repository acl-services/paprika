import convertSizeStringToNumber from "../src/helpers/convertSizeStringToNumber";

describe("convertSizeStringToNumber", () => {
  beforeAll(() => {
    global.visualViewport = {
      width: 300,
      height: 200,
    };
  });

  it("should convert string to number for sizes", () => {
    expect(convertSizeStringToNumber("55px", "width")).toEqual(55);
    expect(convertSizeStringToNumber("55px", "height")).toEqual(55);

    expect(convertSizeStringToNumber("55vw", "width")).toEqual(165);
    expect(convertSizeStringToNumber("55vh", "height")).toEqual(110);

    expect(convertSizeStringToNumber("calc(55vw+5px)", "width")).toEqual(170);
    expect(convertSizeStringToNumber("calc(55vh+10px)", "height")).toEqual(120);
    expect(convertSizeStringToNumber("calc(55vw-5px)", "width")).toEqual(160);
    expect(convertSizeStringToNumber("calc(55vh-10px)", "height")).toEqual(100);
  });
});
