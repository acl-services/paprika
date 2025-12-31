import { mergeTranslation } from "./useI18n";

describe("useI18n", () => {
  describe("mergeTranslation", () => {
    it("should return an object with merged translations when given two valid translation objects", () => {
      const customLocales = {
        en: {
          translation: {
            greeting: "Hello",
            goodbye: "Goodbye",
          },
        },
        fr: {
          translation: {
            greeting: "Bonjour",
            goodbye: "Au revoir",
          },
        },
      };

      const paprikaLocales = {
        en: {
          translation: {
            welcome: "Welcome",
            farewell: "Farewell",
          },
        },
        fr: {
          translation: {
            welcome: "Bienvenue",
            farewell: "Adieu",
          },
        },
      };

      const result = mergeTranslation(customLocales, paprikaLocales);

      expect(result).toEqual({
        en: {
          translation: {
            greeting: "Hello",
            goodbye: "Goodbye",
            welcome: "Welcome",
            farewell: "Farewell",
          },
        },
        fr: {
          translation: {
            greeting: "Bonjour",
            goodbye: "Au revoir",
            welcome: "Bienvenue",
            farewell: "Adieu",
          },
        },
      });
    });

    it("should return an object with merged translations when given two empty translation objects", () => {
      const customLocales = {};
      const paprikaLocales = {};

      const result = mergeTranslation(customLocales, paprikaLocales);

      expect(result).toEqual({});
    });

    it("should return an object with merged translations when given one empty and one non-empty translation object", () => {
      const customLocales = {};
      const paprikaLocales = {
        en: {
          translation: {
            welcome: "Welcome",
            farewell: "Farewell",
          },
        },
        fr: {
          translation: {
            welcome: "Bienvenue",
            farewell: "Adieu",
          },
        },
      };

      const result = mergeTranslation(customLocales, paprikaLocales);

      expect(result).toEqual({
        en: {
          translation: {
            welcome: "Welcome",
            farewell: "Farewell",
          },
        },
        fr: {
          translation: {
            welcome: "Bienvenue",
            farewell: "Adieu",
          },
        },
      });
    });

    it("should return an empty translations object when given two invalid translation objects", () => {
      const customLocales = {
        en: {
          greeting: "Hello",
          goodbye: "Goodbye",
        },
        fr: {
          greeting: "Bonjour",
          goodbye: "Au revoir",
        },
      };

      const paprikaLocales = {
        en: {
          welcome: "Welcome",
          farewell: "Farewell",
        },
        fr: {},
      };

      const result = mergeTranslation(customLocales, paprikaLocales);

      expect(result).toEqual({
        en: { translation: {} },
        fr: { translation: {} },
      });
    });

    it("should return translations for all unique language keys included in customLocales even when they are not part of paprikaLocales", async () => {
      const customLocales = {
        es: {
          translation: {
            greeting: "Hola",
            goodbye: "Adiós",
          },
        },
        fr: {
          translation: {
            greeting: "Bonjour",
            goodbye: "Au revoir",
          },
        },
      };

      const paprikaLocales = {
        en: {
          translation: {
            welcome: "Welcome",
            farewell: "Farewell",
          },
        },
      };

      const result = mergeTranslation(customLocales, paprikaLocales);

      expect(result).toEqual({
        es: {
          translation: {
            greeting: "Hola",
            goodbye: "Adiós",
          },
        },
        fr: {
          translation: {
            greeting: "Bonjour",
            goodbye: "Au revoir",
          },
        },
        en: {
          translation: {
            welcome: "Welcome",
            farewell: "Farewell",
          },
        },
      });
    });

    it("should return translations for all unique language keys included in paprikaLocales even when they are not part of customLocales", async () => {
      const customLocales = {
        en: {
          translation: {
            greeting: "Hello",
            goodbye: "Goodbye",
          },
        },
      };

      const paprikaLocales = {
        es: {
          translation: {
            welcome: "Welcome",
            farewell: "Farewell",
          },
        },
        fr: {
          translation: {
            welcome: "Bienvenue",
            farewell: "Adieu",
          },
        },
      };

      const result = mergeTranslation(customLocales, paprikaLocales);

      expect(result).toEqual({
        en: {
          translation: {
            greeting: "Hello",
            goodbye: "Goodbye",
          },
        },
        es: {
          translation: {
            welcome: "Welcome",
            farewell: "Farewell",
          },
        },
        fr: {
          translation: {
            welcome: "Bienvenue",
            farewell: "Adieu",
          },
        },
      });
    });
  });
});
