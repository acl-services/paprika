import TimeInterpreter from "../../src/TimeInterpreter";

describe("Time Input", () => {
  describe("when setting the time", () => {
    it("should be able to interpret 1am, 1pm, 2am etc.", () => {
      const res2Pm = TimeInterpreter.parse("2pm");
      const res1Am = TimeInterpreter.parse("1am");

      expect(res2Pm.hh).toEqual(2);
      expect(res2Pm.mm).toEqual(0);
      expect(res2Pm.period).toEqual("pm");
      expect(res2Pm.timeStr).toEqual("02:00pm");
      expect(res2Pm.timeStrWithSpace).toEqual("02:00 pm");
      expect(res2Pm.error).toEqual("");

      expect(res1Am.hh).toEqual(1);
      expect(res1Am.mm).toEqual(0);
      expect(res1Am.period).toEqual("am");
      expect(res1Am.timeStr).toEqual("01:00am");
      expect(res1Am.timeStrWithSpace).toEqual("01:00 am");
      expect(res1Am.error).toEqual("");
    });

    it("should be able to interpret 0000 to 0059 midnight values", () => {
      const res0000 = TimeInterpreter.parse("0000");
      const res0059 = TimeInterpreter.parse("0059");

      expect(res0000.hh).toEqual(12);
      expect(res0000.mm).toEqual(0);
      expect(res0000.period).toEqual("am");
      expect(res0000.timeStr).toEqual("12:00am");
      expect(res0000.timeStrWithSpace).toEqual("12:00 am");
      expect(res0000.error).toEqual("");

      expect(res0059.hh).toEqual(12);
      expect(res0059.mm).toEqual(59);
      expect(res0059.period).toEqual("am");
      expect(res0059.timeStr).toEqual("12:59am");
      expect(res0059.timeStrWithSpace).toEqual("12:59 am");
      expect(res0059.error).toEqual("");
    });

    it("should be able to interpret 923pm, 535am, 331am etc.", () => {
      const res923Pm = TimeInterpreter.parse("923pm");
      const res331Am = TimeInterpreter.parse("331am");

      expect(res923Pm.hh).toEqual(9);
      expect(res923Pm.mm).toEqual(23);
      expect(res923Pm.period).toEqual("pm");
      expect(res923Pm.timeStr).toEqual("09:23pm");
      expect(res923Pm.timeStrWithSpace).toEqual("09:23 pm");
      expect(res923Pm.error).toEqual("");

      expect(res331Am.hh).toEqual(3);
      expect(res331Am.mm).toEqual(31);
      expect(res331Am.period).toEqual("am");
      expect(res331Am.timeStr).toEqual("03:31am");
      expect(res331Am.timeStrWithSpace).toEqual("03:31 am");
      expect(res331Am.error).toEqual("");
    });

    it("should be able to interpret 1300 to 2359 midnight values", () => {
      const res1300 = TimeInterpreter.parse("1300");
      const res2359 = TimeInterpreter.parse("2359");

      expect(res1300.hh).toEqual(1);
      expect(res1300.mm).toEqual(0);
      expect(res1300.period).toEqual("pm");
      expect(res1300.timeStr).toEqual("01:00pm");
      expect(res1300.timeStrWithSpace).toEqual("01:00 pm");
      expect(res1300.error).toEqual("");

      expect(res2359.hh).toEqual(11);
      expect(res2359.mm).toEqual(59);
      expect(res2359.period).toEqual("pm");
      expect(res2359.timeStr).toEqual("11:59pm");
      expect(res2359.timeStrWithSpace).toEqual("11:59 pm");
      expect(res2359.error).toEqual("");
    });

    it("should be able to interpret 11:34pm, 10:10am etc.", () => {
      const res1134Pm = TimeInterpreter.parse("11:34pm");
      const res1010Am = TimeInterpreter.parse("10:10am");

      expect(res1134Pm.hh).toEqual(11);
      expect(res1134Pm.mm).toEqual(34);
      expect(res1134Pm.period).toEqual("pm");
      expect(res1134Pm.timeStr).toEqual("11:34pm");
      expect(res1134Pm.timeStrWithSpace).toEqual("11:34 pm");
      expect(res1134Pm.error).toEqual("");

      expect(res1010Am.hh).toEqual(10);
      expect(res1010Am.mm).toEqual(10);
      expect(res1010Am.period).toEqual("am");
      expect(res1010Am.timeStr).toEqual("10:10am");
      expect(res1010Am.timeStrWithSpace).toEqual("10:10 am");
      expect(res1010Am.error).toEqual("");
    });

    it("should be able to interpret much of other values", () => {
      expect(TimeInterpreter.parse("10:10 am").timeStr).toEqual("10:10am");
      expect(TimeInterpreter.parse("10:10 pm").timeStr).toEqual("10:10pm");
      expect(TimeInterpreter.parse("1am").timeStr).toEqual("01:00am");
      expect(TimeInterpreter.parse("1pm").timeStr).toEqual("01:00pm");
      expect(TimeInterpreter.parse("901am").timeStr).toEqual("09:01am");
      expect(TimeInterpreter.parse("305pm").timeStr).toEqual("03:05pm");
      expect(TimeInterpreter.parse("1305am").timeStr).toEqual("01:05pm");
      expect(TimeInterpreter.parse("0310a").timeStr).toEqual("03:10am");
      expect(TimeInterpreter.parse("105p").timeStr).toEqual("01:05pm");

      expect(TimeInterpreter.parse("20:10").timeStr).toEqual("08:10pm");
      expect(TimeInterpreter.parse("10:10").timeStr).toEqual("10:10am");

      expect(TimeInterpreter.parse("1").timeStr).toEqual("01:00am");
      expect(TimeInterpreter.parse("12").timeStr).toEqual("12:00pm");
      expect(TimeInterpreter.parse("123").timeStr).toEqual("01:23am");
      expect(TimeInterpreter.parse("0123").timeStr).toEqual("01:23am");
      expect(TimeInterpreter.parse("1234").timeStr).toEqual("12:34pm");
      expect(TimeInterpreter.parse("20").timeStr).toEqual("08:00pm");
      expect(TimeInterpreter.parse("111").timeStr).toEqual("01:11am");

      expect(TimeInterpreter.parse("dxxx1:15cccpx").timeStr).toEqual("01:15am");
      expect(TimeInterpreter.parse("dxxx1:15cccxpm").timeStr).toEqual("01:15pm");
      expect(TimeInterpreter.parse("dxx1nxp15cccxpm").timeStr).toEqual("01:15pm");
      expect(TimeInterpreter.parse("abc115bpm").timeStr).toEqual("01:15pm");

      expect(TimeInterpreter.parse("10 10pm").timeStr).toEqual("10:10pm");
      expect(TimeInterpreter.parse(" 12 12").timeStr).toEqual("12:12pm");
      expect(TimeInterpreter.parse("9 0 0 am").timeStr).toEqual("09:00am");

      expect(TimeInterpreter.parse("10....22pm2").timeStr).toEqual("10:22am");
    });

    it("should return null in case that it can't interpret", () => {
      const resError = TimeInterpreter.parse("<script>adocumen</script");
      const res3333 = TimeInterpreter.parse("3333");
      const res2401 = TimeInterpreter.parse("2401");
      const res2466 = TimeInterpreter.parse("2466");

      expect(resError.timeStr).toEqual(null);
      expect(resError.error).toEqual("invalid time pattern");

      expect(res3333.timeStr).toEqual(null);
      expect(res3333.error).toEqual("invalid time pattern");

      expect(res2401.timeStr).toEqual(null);
      expect(res2401.error).toEqual("invalid time pattern");

      expect(res2466.timeStr).toEqual(null);
      expect(res2466.error).toEqual("invalid time pattern");
    });
  });
});
