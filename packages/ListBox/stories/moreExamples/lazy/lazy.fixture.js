export default function fixture() {
  return [
    {
      code: 200,
      status: "Ok",
      copyright: "© 2019 MARVEL",
      attributionText: "Data provided by Marvel. © 2019 MARVEL",
      attributionHTML: '<a href="http://marvel.com">Data provided by Marvel. © 2019 MARVEL</a>',
      etag: "f39cac4095e806471135c9e3fbfcecfaf64c1928",
      data: {
        offset: 0,
        limit: 20,
        total: 45,
        count: 20,
        results: [
          {
            id: 1013483,
            name: "Nakia (Nakia)",
            description: "",
            modified: "2017-08-24T16:48:01-0400",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1013483",
            comics: {
              available: 2,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1013483/comics",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/67312",
                  name: "Avengers: Wakanda Forever (2018) #1",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/67593",
                  name: "X-Men: Wakanda Forever (2018) #1",
                },
              ],
              returned: 2,
            },
            series: {
              available: 2,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1013483/series",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/24325",
                  name: "Avengers: Wakanda Forever (2018)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/24375",
                  name: "X-Men: Wakanda Forever (2018)",
                },
              ],
              returned: 2,
            },
            stories: {
              available: 2,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1013483/stories",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/145810",
                  name: "cover from Avengers: Wakanda Forever (2018) #1",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/146372",
                  name: "cover from X-Men: Wakanda Forever (2018) #1",
                  type: "cover",
                },
              ],
              returned: 2,
            },
            events: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1013483/events",
              items: [],
              returned: 0,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1013483/nakia_nakia?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url:
                  "http://marvel.com/universe/Malice_(Nakia)?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1013483/nakia_nakia?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1009466,
            name: "Namor",
            description: "",
            modified: "2014-02-27T11:15:08-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/e/90/50febf4ae101d", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1009466",
            comics: {
              available: 278,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009466/comics",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/571", name: "4 (2004) #8" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/556", name: "4 (2004) #9" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/1550",
                  name: "4 Vol. 2: The Stuff of Nightmares (Trade Paperback)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/24348",
                  name: "Adam: Legend of the Blue Marvel (Trade Paperback)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/23562",
                  name: "Adam: Legend of the Blue Marvel (2008) #4",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/37996", name: "Age of X: Alpha (2010) #1" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/37973",
                  name: "Age of X: Alpha (2010) #1 (Variant)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/12690", name: "Alpha Flight (1983) #3" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/12701", name: "Alpha Flight (1983) #4" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/29211", name: "Avengers (2010) #8" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/29212", name: "Avengers (2010) #9" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/67766", name: "Avengers (2018) #9" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/29196", name: "Avengers (2010) #10" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/29197", name: "Avengers (2010) #11" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/38617",
                  name: "Avengers (2010) #11 (CAPTAIN AMERICA 70TH ANNIVERSARY VARIANT)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/29198", name: "Avengers (2010) #12" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/4956", name: "Avengers (1998) #84" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/7133", name: "Avengers (1963) #262" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/7134", name: "Avengers (1963) #263" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/7137", name: "Avengers (1963) #266" },
              ],
              returned: 20,
            },
            series: {
              available: 104,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009466/series",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/series/725", name: "4 (2004 - 2006)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1253",
                  name: "4 Vol. 2: The Stuff of Nightmares (2005)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/6079",
                  name: "Adam: Legend of the Blue Marvel (2008)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/7524",
                  name: "Adam: Legend of the Blue Marvel (2008)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/13603", name: "Age of X: Alpha (2010)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2116", name: "Alpha Flight (1983 - 1994)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/1991", name: "Avengers (1963 - 1996)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/24229", name: "Avengers (2018 - Present)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/354", name: "Avengers (1998 - 2004)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/9085", name: "Avengers (2010 - 2012)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/4864",
                  name: "Avengers/Invaders (2008 - 2009)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/6804", name: "Black Panther (2008 - 2010)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2115", name: "Black Panther (1998 - 2003)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1996",
                  name: "Captain America (1968 - 1996)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/23277",
                  name: "Captain America (2017 - 2018)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/485",
                  name: "Captain America (2002 - 2004)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/16325",
                  name: "Captain America and Bucky (2011 - 2012)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/22747",
                  name: "Captain America and the Avengers: The Complete Collection (2017)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/8213",
                  name: "Captain America: Reborn (2009 - 2010)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/23524",
                  name: "Captain America: Secret Empire (2017)",
                },
              ],
              returned: 20,
            },
            stories: {
              available: 321,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009466/stories",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/stories/1007", name: "Cover #1007", type: "cover" },
                { resourceURI: "http://gateway.marvel.com/v1/public/stories/1127", name: "Cover #1127", type: "cover" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/1606",
                  name: "WEAPON X (2002) #14",
                  type: "cover",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/stories/1907", name: "Cover #1907", type: "cover" },
                { resourceURI: "http://gateway.marvel.com/v1/public/stories/2009", name: "Cover #2009", type: "cover" },
                { resourceURI: "http://gateway.marvel.com/v1/public/stories/2043", name: "Cover #2043", type: "cover" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2231",
                  name: "WOLVERINE (2003) #44",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2233",
                  name: "WOLVERINE (2003) #45",
                  type: "cover",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/stories/3051", name: "4 (2004) #9", type: "cover" },
                { resourceURI: "http://gateway.marvel.com/v1/public/stories/3053", name: "4 (2004) #8", type: "cover" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/6057",
                  name: "Marvel 1602: Fantastick Four (2006) #3",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/6058",
                  name: "Interior #6058",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/6059",
                  name: "Marvel 1602: Fantastick Four (2006) #4",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/6060",
                  name: "4 of 5 - Fantastick Four - 5XLS",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/6062",
                  name: "5 of 5 - Fantastick Four - 5XLS",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/7847",
                  name: "Marvel 1602: Fantastick Four (2006) #5",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/8824",
                  name: "[Origin of the Sub-Mariner]",
                  type: "interiorStory",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/stories/9025", name: "Cover #9025", type: "cover" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/12411",
                  name: "FANTASTIC FOUR (1961) #102",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/12413",
                  name: "FANTASTIC FOUR (1961) #103",
                  type: "cover",
                },
              ],
              returned: 20,
            },
            events: {
              available: 16,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009466/events",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/events/116", name: "Acts of Vengeance!" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/303", name: "Age of X" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/233", name: "Atlantis Attacks" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/310", name: "Avengers VS X-Men" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/238", name: "Civil War" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/318", name: "Dark Reign" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/302", name: "Fear Itself" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/315", name: "Infinity" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/317", name: "Inhumanity" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/311", name: "Marvel NOW!" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/336", name: "Secret Empire" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/269", name: "Secret Invasion" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/271", name: "Secret Wars II" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/309", name: "Shattered Heroes" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/308", name: "X-Men: Regenesis" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/306", name: "X-Men: Schism" },
              ],
              returned: 16,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1009466/namor?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url:
                  "http://marvel.com/universe/Sub-Mariner?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1009466/namor?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1009468,
            name: "Namora",
            description: "",
            modified: "2011-09-07T16:36:43-0400",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/2/a0/4c003d248f331", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1009468",
            comics: {
              available: 50,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009468/comics",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/23659", name: "Agents of Atlas (2009) #1" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/23825", name: "Agents of Atlas (2009) #2" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/27402",
                  name: "Agents of Atlas (2009) #2 (BACHALO 2ND PRINTING VARIANT)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/23824",
                  name: "Agents of Atlas (2009) #2 (MCGUINNESS VARIANT)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/24015", name: "Agents of Atlas (2009) #3" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/5404", name: "Agents of Atlas (2006) #4" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/5665", name: "Agents of Atlas (2006) #5" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/24360", name: "Agents of Atlas (2009) #6" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/6318",
                  name: "AGENTS OF ATLAS PREMIERE HC (Hardcover)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/40360", name: "Avengers 1959 (2011) #1" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/40359", name: "Avengers 1959 (2011) #2" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/40357", name: "Avengers 1959 (2011) #3" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/40358", name: "Avengers 1959 (2011) #4" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/40393", name: "Avengers 1959 (2011) #5" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/7913",
                  name: "Captain America Comics (1941) #68",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/7916",
                  name: "Captain America Comics (1941) #70",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/30722",
                  name: "Hercules: Fall of an Avenger (2010) #1",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/8849", name: "Human Torch (1940) #28" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/8850", name: "Human Torch (1940) #29" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/8852", name: "Human Torch (1940) #30" },
              ],
              returned: 20,
            },
            series: {
              available: 17,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009468/series",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/series/6807", name: "Agents of Atlas (2009)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1097",
                  name: "Agents of Atlas (2006 - 2007)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1980",
                  name: "AGENTS OF ATLAS PREMIERE HC (2007)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/14985",
                  name: "Avengers 1959 (2011 - 2012)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1998",
                  name: "Captain America Comics (1941 - 1954)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/9350",
                  name: "Hercules: Fall of an Avenger (2010)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/465", name: "Hulk (1999 - 2008)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2019", name: "Human Torch (1940 - 1954)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/3762",
                  name: "Incredible Hercules (2008 - 2010)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/2981",
                  name: "Marvel Mystery Comics (1939 - 1949)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/9974", name: "Namora (2010)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/9922", name: "New Avengers (2010 - 2012)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/23001",
                  name: "Saga of the Sub-Mariner (1988 - 1989)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/23103",
                  name: "Secret Empire: Brave New World (2017)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2989", name: "Sub-Mariner (1968 - 1974)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/2077",
                  name: "Sub-Mariner Comics (1941 - 1955)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/702",
                  name: "Ultimate Fantastic Four (2003 - 2009)",
                },
              ],
              returned: 17,
            },
            stories: {
              available: 89,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009468/stories",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/6014",
                  name: "4 of 6 - 6 XLS -",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/6016",
                  name: "5 of 6 - 6 XLS -",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/8942",
                  name: "Case of the Bends",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/8945",
                  name: "The Pirates of the China Sea",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/8959",
                  name: "The Beast of the Bowery Barge",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/8964",
                  name: "Troubador of Terror",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/8969",
                  name: "The Roulette of Destiny",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/9647",
                  name: "My Son Is a Thief",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/9669",
                  name: "Scavengers of the Desert",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/9802",
                  name: "Trophies of Terror",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/9811",
                  name: "Firebrand, the Scourge of the Pacific",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/9813",
                  name: "Murder Through the Mind",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/9816",
                  name: "Murder Motor Mart",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/9818",
                  name: "Terror In the Lost Colony",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/9820",
                  name: "The Case of the Frantic Fisherman",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/9823",
                  name: "Monument To Murder",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/9825",
                  name: "A Case of King's Ransom",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/9826",
                  name: "Kids!  Kids!  Kids!",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/9828",
                  name: "Crime Makes the Writer",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/9830",
                  name: "The Mystery of the Pirate's Cove",
                  type: "interiorStory",
                },
              ],
              returned: 20,
            },
            events: {
              available: 3,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009468/events",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/events/318", name: "Dark Reign" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/336", name: "Secret Empire" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/277", name: "World War Hulk" },
              ],
              returned: 3,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1009468/namora?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url:
                  "http://marvel.com/universe/Namora_%28Earth-2189%29?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1009468/namora?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1009469,
            name: "Namorita",
            description: "",
            modified: "2013-11-20T17:14:56-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/4/03/528d33a253447", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1009469",
            comics: {
              available: 57,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009469/comics",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/17537", name: "Avengers (1998) #52" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/7015", name: "Avengers (1963) #156" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/5844",
                  name: "Avengers Assemble Vol. 4 (Hardcover)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/21565",
                  name: "Avengers/Invaders (2008) #3",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/1038",
                  name: "Avengers: The Kang Dynasty (Trade Paperback)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/15546", name: "Fantastic Four (1998) #27" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/15548", name: "Fantastic Four (1998) #29" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/15563", name: "Fantastic Four (1998) #42" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/15564", name: "Fantastic Four (1998) #43" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/15565", name: "Fantastic Four (1998) #44" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/15566", name: "Fantastic Four (1998) #45" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/15567", name: "Fantastic Four (1998) #46" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/15570", name: "Fantastic Four (1998) #49" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/13179", name: "Fantastic Four (1961) #356" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/13192", name: "Fantastic Four (1961) #368" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/10033",
                  name: "Marvel Comics Presents (1988) #12",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/19487",
                  name: "Marvel Two-in-One (1974) #2",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/19526",
                  name: "Marvel Two-in-One (1974) #55",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/19547",
                  name: "Marvel Two-in-One (1974) #74",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/10284", name: "Maximum Security (2000) #1" },
              ],
              returned: 20,
            },
            series: {
              available: 22,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009469/series",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/series/354", name: "Avengers (1998 - 2004)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/1991", name: "Avengers (1963 - 1996)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1816",
                  name: "Avengers Assemble Vol. 4 (2007)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/4864",
                  name: "Avengers/Invaders (2008 - 2009)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/98",
                  name: "Avengers: The Kang Dynasty (2002)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/421", name: "Fantastic Four (1998 - 2012)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/2121",
                  name: "Fantastic Four (1961 - 1998)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/2039",
                  name: "Marvel Comics Presents (1988 - 1995)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/3715",
                  name: "Marvel Two-in-One (1974 - 1983)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/2049",
                  name: "Maximum Security (2000 - 2001)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/23530",
                  name: "Namor: The Sub-Mariner (1990 - 1995)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/2053",
                  name: "New Mutants Annual (1984 - 1991)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/839", name: "New Warriors (2005)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/16341", name: "New Warriors (1990 - 1996)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2504", name: "Nova (2007 - 2010)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/23001",
                  name: "Saga of the Sub-Mariner (1988 - 1989)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2989", name: "Sub-Mariner (1968 - 1974)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/3674",
                  name: "Super-Villain Team-Up (1975 - 1980)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/9950",
                  name: "The Thanos Imperative (2010)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2083", name: "Thor (1966 - 1996)" },
              ],
              returned: 20,
            },
            stories: {
              available: 65,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009469/stories",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/4314",
                  name: "New Warriors (2005) #1",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/4315",
                  name: "1 of 6",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/4316",
                  name: "New Warriors (2005) #2",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/4317",
                  name: "2 of 6",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/4318",
                  name: "New Warriors (2005) #3",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/4319",
                  name: "3 of 6",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/4320",
                  name: "New Warriors (2005) #4",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/4321",
                  name: "4 of 6",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/4322",
                  name: "New Warriors (2005) #5",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/4323",
                  name: "5 of 6",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/4324",
                  name: "New Warriors (2005) #6",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/4325",
                  name: "6 of 6",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/13013",
                  name: '"War With the New Warriors"',
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/13107",
                  name: "Day of the Dark Side!",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/14568",
                  name: "The Private War of Doctor Doom!",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/17137",
                  name: "Thor (1966) #411",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/17140",
                  name: "Thor (1966) #412",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/21624",
                  name: "Here Be Monsters!",
                  type: "interiorStory",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/stories/22810", name: "Spring Break", type: "" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/26235",
                  name: "Illegal Aliens",
                  type: "interiorStory",
                },
              ],
              returned: 20,
            },
            events: {
              available: 7,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009469/events",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/events/116", name: "Acts of Vengeance!" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/233", name: "Atlantis Attacks" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/29", name: "Infinity War" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/32", name: "Kings of Pain" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/37", name: "Maximum Security" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/295", name: "Realm of Kings" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/294", name: "The Thanos Imperative" },
              ],
              returned: 7,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1009469/namorita?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url:
                  "http://marvel.com/universe/Namorita?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1009469/namorita?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1014978,
            name: "Naoko",
            description: "",
            modified: "2010-11-18T15:50:39-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/e/40/4cd054abbdc21", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1014978",
            comics: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1014978/comics",
              items: [],
              returned: 0,
            },
            series: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1014978/series",
              items: [],
              returned: 0,
            },
            stories: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1014978/stories",
              items: [],
              returned: 0,
            },
            events: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1014978/events",
              items: [],
              returned: 0,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/characters/1565/naoko?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1014978/naoko?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1009547,
            name: "Natasha Romanoff",
            description: "",
            modified: "1969-12-31T19:00:00-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1009547",
            comics: {
              available: 19,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009547/comics",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/50114", name: "1602 (2003) #2" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/377", name: "1602 (2003) #3" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/148", name: "1602 (2003) #4" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/29196", name: "Avengers (2010) #10" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/29197", name: "Avengers (2010) #11" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/38617",
                  name: "Avengers (2010) #11 (CAPTAIN AMERICA 70TH ANNIVERSARY VARIANT)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/29198", name: "Avengers (2010) #12" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/29202", name: "Avengers (2010) #16" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/7247", name: "Avengers (1963) #365" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/7248", name: "Avengers (1963) #366" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/13517",
                  name: "Marvel 1602: Fantastick Four (Trade Paperback)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/5103",
                  name: "Marvel 1602: Fantastick Four (2006) #1",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/5257",
                  name: "Marvel 1602: Fantastick Four (2006) #2",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/568", name: "Ultimate Nightmare (2004) #1" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/5682", name: "Wolverine Origins (2006) #9" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/16144",
                  name: "Wolverine Origins (2006) #16",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/16508",
                  name: "Wolverine Origins (2006) #18",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/16623",
                  name: "Wolverine: Origins Vol. 2 - Savior (Trade Paperback)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/20727",
                  name: "Wolverine: Origins Vol. 4 - Our War Premiere (Hardcover)",
                },
              ],
              returned: 19,
            },
            series: {
              available: 9,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009547/series",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/series/489", name: "1602 (2003 - 2004)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/9085", name: "Avengers (2010 - 2012)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/1991", name: "Avengers (1963 - 1996)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/2231",
                  name: "Marvel 1602: Fantastick Four (2007)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1102",
                  name: "Marvel 1602: Fantastick Four (2006 - 2007)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/760",
                  name: "Ultimate Nightmare (2004 - 2005)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/2375",
                  name: "Wolverine Origins (2006 - 2010)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/2926",
                  name: "Wolverine: Origins Vol. 2 - Savior (2007)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/3870",
                  name: "Wolverine: Origins Vol. 4 - Our War Premiere (2008)",
                },
              ],
              returned: 9,
            },
            stories: {
              available: 20,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009547/stories",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/stories/1600", name: "Cover #1600", type: "cover" },
                { resourceURI: "http://gateway.marvel.com/v1/public/stories/1616", name: "Cover #1616", type: "cover" },
                { resourceURI: "http://gateway.marvel.com/v1/public/stories/3558", name: "Cover #3558", type: "cover" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/6046",
                  name: "Wolverine Origins (2006) #9",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/6053",
                  name: "Marvel 1602: Fantastick Four (2006) #1",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/6054",
                  name: "Interior #6054",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/6055",
                  name: "Marvel 1602: Fantastick Four (2006) #2",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/6056",
                  name: "Interior #6056",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/15045",
                  name: "AVENGERS (1963) #365",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/15047",
                  name: "AVENGERS (1963) #366",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/32970",
                  name: "Wolverine Origins (2006) #16",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/33287",
                  name: "Wolverine Origins (2006) #18",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/63583",
                  name: "Avengers (2010) #10",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/63587",
                  name: "Avengers (2010) #12",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/63588",
                  name: "Avengers (2010) #12",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/63596",
                  name: "Avengers (2010) #16",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/75258",
                  name: "Avengers (2010) #10",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/75260",
                  name: "Avengers (2010) #11",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/90406",
                  name: "Avengers (2010) #11",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/113142",
                  name: "Cover from 1602 #2",
                  type: "cover",
                },
              ],
              returned: 20,
            },
            events: {
              available: 1,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009547/events",
              items: [{ resourceURI: "http://gateway.marvel.com/v1/public/events/302", name: "Fear Itself" }],
              returned: 1,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1009547/natasha_romanoff?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1009547/natasha_romanoff?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1010365,
            name: "Nebula",
            description: "",
            modified: "2013-11-20T17:14:56-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/e/30/528d339973337", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1010365",
            comics: {
              available: 24,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010365/comics",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/4219",
                  name: "Annihilation: Ronan (2006) #2",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/71310",
                  name: "Asgardians of the Galaxy (2018) #2",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/71311",
                  name: "Asgardians of the Galaxy (2018) #3",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/7131", name: "Avengers (1963) #260" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/7132", name: "Avengers (1963) #261" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/7194", name: "Avengers (1963) #317" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/7195", name: "Avengers (1963) #318" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/13158", name: "Fantastic Four (1961) #337" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/13159", name: "Fantastic Four (1961) #338" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/13163", name: "Fantastic Four (1961) #341" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/13169", name: "Fantastic Four (1961) #347" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/13535",
                  name: "FANTASTIC FOUR VISIONARIES: WALTER SIMONSON VOL. 1 TPB (Trade Paperback)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/57701",
                  name: "Guidebook to The Marvel Cinematic Universe - Marvel’s Guardians of the Galaxy (2016)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/9290", name: "Infinity Gauntlet (1991) #5" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/9291", name: "Infinity Gauntlet (1991) #6" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/61296",
                  name: "Marvel Universe Guardians of the Galaxy (2015) #21",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/61580",
                  name: "Marvel Universe Guardians of the Galaxy Vol. 6 (Digest)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/15196", name: "Silver Surfer (1987) #59" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/38966",
                  name: "Spider-Man: Am I an Avenger? (Trade Paperback)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/61698", name: "Thanos (2016) #2" },
              ],
              returned: 20,
            },
            series: {
              available: 14,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010365/series",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/series/1079", name: "Annihilation: Ronan (2006)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/25996",
                  name: "Asgardians of the Galaxy (2018 - Present)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/1991", name: "Avengers (1963 - 1996)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/2121",
                  name: "Fantastic Four (1961 - 1998)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/2254",
                  name: "FANTASTIC FOUR VISIONARIES: WALTER SIMONSON VOL. 1 TPB (2007)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/22724",
                  name: "Guidebook to The Marvel Cinematic Universe - Marvel’s Guardians of the Galaxy (2016)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2023", name: "Infinity Gauntlet (1991)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/20365",
                  name: "Marvel Universe Guardians of the Galaxy (2015 - Present)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/22629",
                  name: "Marvel Universe Guardians of the Galaxy Vol. 6 (2018)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2288", name: "Silver Surfer (1987 - 1998)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/14078",
                  name: "Spider-Man: Am I an Avenger? (2011 - Present)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/22653", name: "Thanos (2016 - 2018)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/211",
                  name: "X-Men Legends Vol. 3: Art Adams Book I (2003)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/242",
                  name: "X-Men Legends Vol. III: Arthur Adams Book I (2003)",
                },
              ],
              returned: 14,
            },
            stories: {
              available: 23,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010365/stories",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/5935",
                  name: "Annihilation: Ronan (2006) #2",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/12966",
                  name: "Fantastic Four (1961) #337",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/12967",
                  name: "Into the Time Stream!",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/12968",
                  name: "Fantastic Four (1961) #338",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/12969",
                  name: "Kangs for the Memories!!!",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/12977",
                  name: "The Ultimate Solution",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/12989",
                  name: "Big Trouble on Little Earth!",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/14801",
                  name: "Avengers (1963) #260",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/14803",
                  name: "Avengers (1963) #261",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/14928",
                  name: "AVENGERS (1963) #317",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/14930",
                  name: "AVENGERS (1963) #318",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/23958",
                  name: "Cover #23958",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/23960",
                  name: "Cover #23960",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/30862",
                  name: "Cover #30862",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/85502",
                  name: "Interior #85502",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/126158",
                  name: "story from Marvel Cinematic Universe Handbook (2015) #9",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/132996",
                  name: "cover from Marvel Universe Guardians of the Galaxy (2015) #21",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/133589",
                  name: "cover from Marvel Universe Guardians of the Galaxy (2017)",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/133812",
                  name: "cover from Thanos (2016) #2",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/133818",
                  name: "cover from Thanos (2016) #5",
                  type: "cover",
                },
              ],
              returned: 20,
            },
            events: {
              available: 2,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010365/events",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/events/229", name: "Annihilation" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/271", name: "Secret Wars II" },
              ],
              returned: 2,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1010365/nebula?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url:
                  "http://marvel.com/universe/Nebula?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1010365/nebula?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1011302,
            name: "Nehzno",
            description: "",
            modified: "1969-12-31T19:00:00-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1011302",
            comics: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011302/comics",
              items: [],
              returned: 0,
            },
            series: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011302/series",
              items: [],
              returned: 0,
            },
            stories: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011302/stories",
              items: [],
              returned: 0,
            },
            events: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011302/events",
              items: [],
              returned: 0,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/characters/1574/nehzno?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url:
                  "http://marvel.com/universe/Nehzno?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1011302/nehzno?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1011422,
            name: "Nekra",
            description: "",
            modified: "1969-12-31T19:00:00-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/4/c0/4c002e11323ba", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1011422",
            comics: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011422/comics",
              items: [],
              returned: 0,
            },
            series: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011422/series",
              items: [],
              returned: 0,
            },
            stories: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011422/stories",
              items: [],
              returned: 0,
            },
            events: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011422/events",
              items: [],
              returned: 0,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/characters/1576/nekra?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url: "http://marvel.com/universe/Nekra?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1011422/nekra?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1011086,
            name: "Nemesis",
            description: "",
            modified: "2004-04-14T00:00:00-0400",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1011086",
            comics: {
              available: 33,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011086/comics",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/393", name: "Alpha Flight (2004) #1" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/456", name: "Alpha Flight (2004) #2" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/616", name: "Alpha Flight (2004) #3" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/677", name: "Alpha Flight (2004) #4" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/613", name: "Alpha Flight (2004) #5" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/572", name: "Alpha Flight (2004) #6" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/790", name: "Alpha Flight (2004) #7" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/866", name: "Alpha Flight (2004) #8" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/67", name: "Alpha Flight (2004) #9" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/1558", name: "Alpha Flight (2004) #11" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/44761",
                  name: "Cable and X-Force (2012) #1",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/44769",
                  name: "Cable and X-Force (2012) #2",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/45939",
                  name: "Cable and X-Force (2012) #3",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/45942",
                  name: "Cable and X-Force (2012) #4",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/45945",
                  name: "Cable and X-Force (2012) #5",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/45948",
                  name: "Cable and X-Force (2012) #6",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/45949",
                  name: "Cable and X-Force (2012) #7",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/45950",
                  name: "Cable and X-Force (2012) #8",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/45951",
                  name: "Cable and X-Force (2012) #9",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/45952",
                  name: "Cable and X-Force (2012) #10",
                },
              ],
              returned: 20,
            },
            series: {
              available: 5,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011086/series",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/series/719", name: "Alpha Flight (2004 - 2005)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/16907",
                  name: "Cable and X-Force (2012 - Present)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2258", name: "Uncanny X-Men (1963 - 2011)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/9906", name: "X-Men (2010 - 2013)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/13878",
                  name: "X-Men: Prelude to Schism (2011)",
                },
              ],
              returned: 5,
            },
            stories: {
              available: 53,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011086/stories",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2921",
                  name: "Alpha Flight (2004) #9",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2922",
                  name: "1 of 4 - Days of Future Present Past Participle",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2923",
                  name: "Alpha Flight (2004) #1",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2924",
                  name: "Interior #2924",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2925",
                  name: "Alpha Flight (2004) #2",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2926",
                  name: "Interior #2926",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2927",
                  name: "Alpha Flight (2004) #6",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2928",
                  name: "Interior #2928",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2929",
                  name: "Alpha Flight (2004) #5",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2930",
                  name: "Interior #2930",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2931",
                  name: "Alpha Flight (2004) #3",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2932",
                  name: "Interior #2932",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2933",
                  name: "Alpha Flight (2004) #4",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2934",
                  name: "Interior #2934",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2935",
                  name: "Alpha Flight (2004) #7",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2936",
                  name:
                    '"WAXING POETIC" PART 1 (OF 2) Is the All-New, All-Different Alpha Flight really disbanding after only seven issues? Not if the r',
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2937",
                  name: "Alpha Flight (2004) #8",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2938",
                  name:
                    '"WAXING POETIC" PART 2 (OF 2) Montreal faces its gravest hour as it falls under attack by…wax statues of the entire Marvel Unive',
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2941",
                  name: "Alpha Flight (2004) #11",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/52192",
                  name: "Uncanny X-Men (1963) #506",
                  type: "cover",
                },
              ],
              returned: 20,
            },
            events: {
              available: 1,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011086/events",
              items: [{ resourceURI: "http://gateway.marvel.com/v1/public/events/306", name: "X-Men: Schism" }],
              returned: 1,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1011086/nemesis?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url:
                  "http://marvel.com/universe/Nemesis?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1011086/nemesis?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1010831,
            name: "Network",
            description: "",
            modified: "1969-12-31T19:00:00-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1010831",
            comics: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010831/comics",
              items: [],
              returned: 0,
            },
            series: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010831/series",
              items: [],
              returned: 0,
            },
            stories: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010831/stories",
              items: [],
              returned: 0,
            },
            events: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010831/events",
              items: [],
              returned: 0,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/characters/1582/network?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url:
                  "http://marvel.com/universe/Network?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1010831/network?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1010815,
            name: "New Goblin",
            description: "",
            modified: "1969-12-31T19:00:00-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1010815",
            comics: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010815/comics",
              items: [],
              returned: 0,
            },
            series: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010815/series",
              items: [],
              returned: 0,
            },
            stories: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010815/stories",
              items: [],
              returned: 0,
            },
            events: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010815/events",
              items: [],
              returned: 0,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/characters/2836/new_goblin?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1010815/new_goblin?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1011336,
            name: "New Mutants",
            description: "",
            modified: "2017-10-13T10:18:07-0400",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/8/e0/53ea47c1d41a6", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1011336",
            comics: {
              available: 242,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011336/comics",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/23645",
                  name: "Astonishing Tales (2009) #1",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/30346", name: "Cable (2008) #24" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/66188", name: "Cable (2017) #154" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/20946",
                  name: "Cable Classic Vol. 1 (Trade Paperback)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/66190",
                  name: "Color Your Own X-Men: The New Mutants (Trade Paperback)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/39443",
                  name: "ESSENTIAL X-MEN VOL. 4 TPB (Trade Paperback)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/42400", name: "Exiled (2011) #1" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/64879", name: "Fallen Angels (1987) #1" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/64878", name: "Fallen Angels (1987) #2" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/64877", name: "Fallen Angels (1987) #3" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/64875", name: "Fallen Angels (1987) #5" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/64874", name: "Fallen Angels (1987) #6" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/64873", name: "Fallen Angels (1987) #7" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/64872", name: "Fallen Angels (1987) #8" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/27443",
                  name: "Golden Age Marvel Comics Omnibus Vol. 1 (Hardcover)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/40566",
                  name: "Journey Into Mystery (2011) #637",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/40552",
                  name: "Journey Into Mystery (2011) #638",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/62185",
                  name: "Loki: Journey into Mystery by Kieron Gillen (Hardcover)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/71517",
                  name: "Marvel Age Annual (1985) #4",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/19821", name: "Marvel Fanfare (1982) #45" },
              ],
              returned: 20,
            },
            series: {
              available: 42,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011336/series",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/series/6792", name: "Astonishing Tales (2009)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/4002", name: "Cable (2008 - 2010)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/22386", name: "Cable (2017 - Present)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/4059", name: "Cable Classic Vol. 1 (2008)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/24000",
                  name: "Color Your Own X-Men: The New Mutants (2018)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/14398",
                  name: "ESSENTIAL X-MEN VOL. 4 TPB (2011 - Present)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/16139", name: "Exiled (2011 - 2012)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/23621", name: "Fallen Angels (1987)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/8765",
                  name: "Golden Age Marvel Comics Omnibus Vol. 1 (2009 - Present)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/14764",
                  name: "Journey Into Mystery (2011 - Present)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/22809",
                  name: "Loki: Journey into Mystery by Kieron Gillen (2017)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/26065",
                  name: "Marvel Age Annual (1985 - 1988)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/3719",
                  name: "Marvel Fanfare (1982 - 1992)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/8770",
                  name: "Marvel Masterworks: The Inhumans Vol. 1 (2009 - Present)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/8755",
                  name: "Marvel Masterworks: The Inhumans Vol.1 (2009 - Present)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/8771",
                  name: "Marvel Super Hero Squad (2009 - 2010)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/22492",
                  name: "Marvel Team-Up Annual (1976 - 1978)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1595",
                  name: "Marvel Visionaries: Chris Claremont (2005)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/563", name: "New Mutants (2003 - 2004)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/7455", name: "New Mutants (2009 - 2012)" },
              ],
              returned: 20,
            },
            stories: {
              available: 418,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011336/stories",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/596",
                  name: "New Mutants (2003) #8",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/597",
                  name: "Interior #597",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/1296",
                  name: "New Mutants (2003) #5",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/1297",
                  name: "Interior #1297",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/1596",
                  name: "New Mutants (2003) #10",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/1597",
                  name: "Interior #1597",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/1888",
                  name: "New Mutants (2003) #9",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/1889",
                  name: "Interior #1889",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/1901",
                  name: "New Mutants (2003) #12",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/1902",
                  name: "Interior #1902",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/1903",
                  name: "New Mutants (2003) #13",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/1904",
                  name: "Interior #1904",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2079",
                  name: "New Mutants (2003) #7",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2080",
                  name: "Interior #2080",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2155",
                  name: "New Mutants (2003) #11",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2156",
                  name: "Interior #2156",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2533",
                  name: "New Mutants (2003) #6",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2534",
                  name: "Interior #2534",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/3364",
                  name: "Interior #3364",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/3365",
                  name: "New X-Men (2004) #5",
                  type: "cover",
                },
              ],
              returned: 20,
            },
            events: {
              available: 16,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011336/events",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/events/116", name: "Acts of Vengeance!" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/303", name: "Age of X" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/233", name: "Atlantis Attacks" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/240", name: "Days of Future Present" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/246", name: "Evolutionary War" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/248", name: "Fall of the Mutants" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/302", name: "Fear Itself" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/252", name: "Inferno" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/32", name: "Kings of Pain" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/263", name: "Mutant Massacre" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/270", name: "Secret Wars" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/271", name: "Secret Wars II" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/273", name: "Siege" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/308", name: "X-Men: Regenesis" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/279", name: "X-Men: Second Coming" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/280", name: "X-Tinction Agenda" },
              ],
              returned: 16,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1011336/new_mutants?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url:
                  "http://marvel.com/universe/New_Mutants?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1011336/new_mutants?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1010683,
            name: "New Warriors",
            description: "",
            modified: "2013-11-01T16:41:52-0400",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/0/03/527411a7204f7", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1010683",
            comics: {
              available: 94,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010683/comics",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/6798",
                  name: "The Amazing Spider-Man (1963) #384",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/16901",
                  name: "Amazing Spider-Man Annual (1964) #26",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/7221", name: "Avengers (1963) #341" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/7222", name: "Avengers (1963) #342" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/27543",
                  name: "Avengers: The Initiative (2007) #26",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/27544",
                  name: "Avengers: The Initiative (2007) #27",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/5131", name: "Civil War Files (2006) #1" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/57673", name: "Damage Control (1991) #2" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/68446", name: "Green Goblin (1995) #2" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/9553", name: "Iron Man (1968) #302" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/9554", name: "Iron Man (1968) #303" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/9555", name: "Iron Man (1968) #304" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/9557", name: "Iron Man (1968) #306" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/10076",
                  name: "Marvel Comics Presents (1988) #159",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/10078",
                  name: "Marvel Comics Presents (1988) #160",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/10079",
                  name: "Marvel Comics Presents (1988) #161",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/10080",
                  name: "Marvel Comics Presents (1988) #162",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/10081",
                  name: "Marvel Comics Presents (1988) #163",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/15881", name: "New Warriors (2007) #1" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/42854", name: "New Warriors (1990) #1" },
              ],
              returned: 20,
            },
            series: {
              available: 19,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010683/series",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/2984",
                  name: "Amazing Spider-Man Annual (1964 - 2018)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/1991", name: "Avengers (1963 - 1996)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1945",
                  name: "Avengers: The Initiative (2007 - 2010)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/1101", name: "Civil War Files (2006)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/21004", name: "Damage Control (1991)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/7077", name: "Green Goblin (1995 - 1996)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2029", name: "Iron Man (1968 - 1996)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/2039",
                  name: "Marvel Comics Presents (1988 - 1995)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2409", name: "New Warriors (2007 - 2009)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/16341", name: "New Warriors (1990 - 1996)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/839", name: "New Warriors (2005)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/20024",
                  name: "New Warriors Annual (1991 - 1994)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/25661",
                  name: "New Warriors: Darkness & Light (2018)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2504", name: "Nova (2007 - 2010)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/23874",
                  name: "Spider-Man: Clone Saga Omnibus Vol. 2 (2017)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/13518",
                  name: "Spider-Man: The Complete Ben Reilly Epic Book 1 TPB (2010 - Present)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/22345",
                  name: "Spider-Man: The Complete Clone Saga Epic Book 4 (2017)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1987",
                  name: "The Amazing Spider-Man (1963 - 1998)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2262", name: "Wolverine (1988 - 2003)" },
              ],
              returned: 19,
            },
            stories: {
              available: 131,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010683/stories",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/4314",
                  name: "New Warriors (2005) #1",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/4315",
                  name: "1 of 6",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/4316",
                  name: "New Warriors (2005) #2",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/4317",
                  name: "2 of 6",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/4318",
                  name: "New Warriors (2005) #3",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/4319",
                  name: "3 of 6",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/4320",
                  name: "New Warriors (2005) #4",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/4321",
                  name: "4 of 6",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/4322",
                  name: "New Warriors (2005) #5",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/4323",
                  name: "5 of 6",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/4324",
                  name: "New Warriors (2005) #6",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/4325",
                  name: "6 of 6",
                  type: "interiorStory",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/stories/14209", name: "Juice", type: "ad" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/14989",
                  name: "Avengers (1963) #341",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/14991",
                  name: "Avengers (1963) #342",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/19586",
                  name: "Oil and Gold",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/19587",
                  name: "Kids These Days",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/19588",
                  name: "The Sound of Thunder",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/19590",
                  name: "Iron Man (1968) #306",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/23063",
                  name: "History Is What You Make Of It [Smells Like Teen Spirit]",
                  type: "",
                },
              ],
              returned: 20,
            },
            events: {
              available: 4,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010683/events",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/events/238", name: "Civil War" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/255", name: "Initiative" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/32", name: "Kings of Pain" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/269", name: "Secret Invasion" },
              ],
              returned: 4,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1010683/new_warriors?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url:
                  "http://marvel.com/universe/New_Warriors?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1010683/new_warriors?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1011271,
            name: "New X-Men",
            description: "",
            modified: "2014-04-29T14:50:14-0400",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/6/90/535ff4561d2d5", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1011271",
            comics: {
              available: 44,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011271/comics",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/5451", name: "New X-Men (Hardcover)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/654", name: "New X-Men (2004) #1" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/711", name: "New X-Men (2004) #2" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/533", name: "New X-Men (2004) #3" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/755", name: "New X-Men (2004) #4" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/827", name: "New X-Men (2004) #5" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/910", name: "New X-Men (2004) #6" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/80", name: "New X-Men (2004) #7" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/1483", name: "New X-Men (2004) #8" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/1568", name: "New X-Men (2004) #9" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/1657", name: "New X-Men (2004) #10" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/1751", name: "New X-Men (2004) #11" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/1857", name: "New X-Men (2004) #12" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/2007", name: "New X-Men (2004) #13" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/2008", name: "New X-Men (2004) #14" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/2112", name: "New X-Men (2004) #15" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/2221", name: "New X-Men (2004) #16" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/2991", name: "New X-Men (2004) #17" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/2466", name: "New X-Men (2004) #18" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/2518", name: "New X-Men (2004) #19" },
              ],
              returned: 20,
            },
            series: {
              available: 10,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011271/series",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/series/1807", name: "New X-Men (2006)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2281", name: "New X-Men (2001 - 2004)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/749", name: "New X-Men (2004 - 2008)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1511",
                  name: "New X-Men - Academy X Vol. 3: X-Posed (2005)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/339",
                  name: "New X-Men Vol. 7: Here Comes Tomorrow (2004)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/56",
                  name: "New X-Men Vol. III: New Worlds (1999)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/979",
                  name: "New X-Men: Academy X Yearbook Special (2005)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/25674",
                  name: "New X-Men: Childhood's End - The Complete Collection (2019)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1546",
                  name: "New X-Men: Childhood's End Vol. 1 (2006)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/868", name: "New X-Men: Hellions (2005)" },
              ],
              returned: 10,
            },
            stories: {
              available: 49,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011271/stories",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/stories/608", name: "Cover #608", type: "cover" },
                { resourceURI: "http://gateway.marvel.com/v1/public/stories/610", name: "Cover #610", type: "cover" },
                { resourceURI: "http://gateway.marvel.com/v1/public/stories/900", name: "Cover #900", type: "cover" },
                { resourceURI: "http://gateway.marvel.com/v1/public/stories/1046", name: "Cover #1046", type: "cover" },
                { resourceURI: "http://gateway.marvel.com/v1/public/stories/1490", name: "Cover #1490", type: "cover" },
                { resourceURI: "http://gateway.marvel.com/v1/public/stories/2057", name: "Cover #2057", type: "cover" },
                { resourceURI: "http://gateway.marvel.com/v1/public/stories/2277", name: "Cover #2277", type: "cover" },
                { resourceURI: "http://gateway.marvel.com/v1/public/stories/2448", name: "Cover #2448", type: "cover" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/3355",
                  name: "New X-Men (2004) #7",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/3356",
                  name: "1 of 3 Haunting at Xaviers",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/3357",
                  name: "New X-Men (2004) #3",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/3358",
                  name: "Interior #3358",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/3359",
                  name: "New X-Men (2004) #1",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/3360",
                  name: "Interior #3360",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/3361",
                  name: "New X-Men (2004) #2",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/3362",
                  name: "Interior #3362",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/3363",
                  name: "New X-Men (2004) #4",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/3364",
                  name: "Interior #3364",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/3365",
                  name: "New X-Men (2004) #5",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/3366",
                  name:
                    '"CHOOSING SIDES" PART 5 (OF 6) The school is divided over the fate of young Kevin Ford, the mutant whose very touch can kill. Wi',
                  type: "interiorStory",
                },
              ],
              returned: 20,
            },
            events: {
              available: 1,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011271/events",
              items: [{ resourceURI: "http://gateway.marvel.com/v1/public/events/251", name: "House of M" }],
              returned: 1,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1011271/new_x-men?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url:
                  "http://marvel.com/universe/New%20X-Men?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1011271/new_x-men?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1011269,
            name: "Newton Destine",
            description: "",
            modified: "1969-12-31T19:00:00-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1011269",
            comics: {
              available: 3,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011269/comics",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/20731",
                  name: "Clandestine Classic Premiere (Hardcover)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/21140",
                  name: "X-Men: Clan Destine (1996) #1",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/21141",
                  name: "X-Men: Clan Destine (1996) #2",
                },
              ],
              returned: 3,
            },
            series: {
              available: 2,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011269/series",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/3874",
                  name: "Clandestine Classic Premiere (2008)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/4773", name: "X-Men: Clan Destine (1996)" },
              ],
              returned: 2,
            },
            stories: {
              available: 2,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011269/stories",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/46644",
                  name: "Dreams of Darkest Destiny",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/46646",
                  name: "The Destine's Darkest Dreams",
                  type: "interiorStory",
                },
              ],
              returned: 2,
            },
            events: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011269/events",
              items: [],
              returned: 0,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1011269/newton_destine?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url:
                  "http://marvel.com/universe/Newton%20Destine?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1011269/newton_destine?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1011303,
            name: "Next Avengers",
            description: "",
            modified: "1969-12-31T19:00:00-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1011303",
            comics: {
              available: 1,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011303/comics",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/5476", name: "Avengers Next (2006) #2" },
              ],
              returned: 1,
            },
            series: {
              available: 1,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011303/series",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/series/1143", name: "Avengers Next (2006 - 2007)" },
              ],
              returned: 1,
            },
            stories: {
              available: 1,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011303/stories",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/6262",
                  name: "Interior #6262",
                  type: "interiorStory",
                },
              ],
              returned: 1,
            },
            events: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011303/events",
              items: [],
              returned: 0,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1011303/next_avengers?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1011303/next_avengers?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1010685,
            name: "Nextwave",
            description: "",
            modified: "1969-12-31T19:00:00-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/5/d0/4c0038e2924ca", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1010685",
            comics: {
              available: 13,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010685/comics",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/3395",
                  name: "Nextwave: Agents of H.a.T.E. (2006) #1",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/3506",
                  name: "Nextwave: Agents of H.a.T.E. (2006) #2",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/3912",
                  name: "Nextwave: Agents of H.a.T.E. (2006) #3",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/4043",
                  name: "Nextwave: Agents of H.a.T.E. (2006) #4",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/4155",
                  name: "Nextwave: Agents of H.a.T.E. (2006) #5",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/4265",
                  name: "Nextwave: Agents of H.a.T.E. (2006) #6",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/4424",
                  name: "Nextwave: Agents of H.a.T.E. (2006) #7",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/5039",
                  name: "Nextwave: Agents of H.a.T.E. (2006) #8",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/5193",
                  name: "Nextwave: Agents of H.a.T.E. (2006) #9",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/5492",
                  name: "Nextwave: Agents of H.a.T.E. (2006) #10",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/5623",
                  name: "Nextwave: Agents of H.a.T.E. (2006) #11",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/5772",
                  name: "Nextwave: Agents of H.a.T.E. (2006) #12",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/16037",
                  name: "Nextwave: Agents of H.a.T.E. Vol. 2 - I Kick Your Face Premiere (Hardcover)",
                },
              ],
              returned: 13,
            },
            series: {
              available: 2,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010685/series",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/950",
                  name: "Nextwave: Agents of H.a.T.E. (2006 - 2010)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/2571",
                  name: "Nextwave: Agents of H.a.T.E. Vol. 2 - I Kick Your Face Premiere (2007)",
                },
              ],
              returned: 2,
            },
            stories: {
              available: 12,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010685/stories",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/5303",
                  name: "NEXTWAVE: AGENTS OF H.A.T.E. (2006) #1",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/5305",
                  name: "NEXTWAVE: AGENTS OF H.A.T.E. (2006) #2",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/5307",
                  name: "NEXTWAVE: AGENTS OF H.A.T.E. (2006) #3",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/5309",
                  name: "NEXTWAVE: AGENTS OF H.A.T.E. (2006) #4",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/5311",
                  name: "NEXTWAVE: AGENTS OF H.A.T.E. (2006) #5",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/5313",
                  name: "NEXTWAVE: AGENTS OF H.A.T.E. (2006) #6",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/5315",
                  name: "NEXTWAVE: AGENTS OF H.A.T.E. (2006) #7",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/5317",
                  name: "NEXTWAVE: AGENTS OF H.A.T.E. (2006) #8",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/5319",
                  name: "NEXTWAVE: AGENTS OF H.A.T.E. (2006) #9",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/5321",
                  name: "NEXTWAVE: AGENTS OF H.A.T.E. (2006) #10",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/5323",
                  name: "NEXTWAVE: AGENTS OF H.A.T.E. (2006) #11",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/5325",
                  name: "NEXTWAVE: AGENTS OF H.A.T.E. (2006) #12",
                  type: "cover",
                },
              ],
              returned: 12,
            },
            events: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010685/events",
              items: [],
              returned: 0,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1010685/nextwave?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url:
                  "http://marvel.com/universe/Nextwave?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1010685/nextwave?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1009471,
            name: "Nick Fury",
            description: "",
            modified: "2016-02-10T10:01:27-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/3/c0/5261a745e658d", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1009471",
            comics: {
              available: 499,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009471/comics",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/20630", name: "1602 (2003) #1" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/50114", name: "1602 (2003) #2" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/377", name: "1602 (2003) #3" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/57930",
                  name: "A Year of Marvels: August Infinite Comic (2016) #1",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/60507",
                  name: "All-New Wolverine (2015) #17",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/60508",
                  name: "All-New Wolverine (2015) #18",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/22433",
                  name: "ANNIHILATION CLASSIC HC (Hardcover)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/531", name: "Astonishing X-Men (2004) #3" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/843", name: "Astonishing X-Men (2004) #5" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/24514",
                  name: "Astonishing X-Men by Joss Whedon & John Cassaday (Hardcover)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/4021",
                  name: "Astonishing X-Men Vol. 1 (Hardcover)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/1456",
                  name: "Astonishing X-Men Vol. 1: Gifted (Trade Paperback)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/17751", name: "Avengers (1996) #1" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/17756", name: "Avengers (1996) #2" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/17757", name: "Avengers (1996) #3" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/17759", name: "Avengers (1996) #5" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/17760", name: "Avengers (1996) #6" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/17761", name: "Avengers (1996) #7" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/17762", name: "Avengers (1996) #8" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/17763", name: "Avengers (1996) #9" },
              ],
              returned: 20,
            },
            series: {
              available: 195,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009471/series",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/series/489", name: "1602 (2003 - 2004)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/21114",
                  name: "A Year of Marvels: August Infinite Comic (2016 - Present)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/20682",
                  name: "All-New Wolverine (2015 - 2018)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/6056",
                  name: "ANNIHILATION CLASSIC HC (2008)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/744",
                  name: "Astonishing X-Men (2004 - 2013)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/7576",
                  name: "Astonishing X-Men by Joss Whedon & John Cassaday (2009 - Present)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1464",
                  name: "Astonishing X-Men Vol. 1 (2006)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1298",
                  name: "Astonishing X-Men Vol. 1: Gifted (2004)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/354", name: "Avengers (1998 - 2004)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/3621", name: "Avengers (1996 - 1997)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/14985",
                  name: "Avengers 1959 (2011 - 2012)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/2111",
                  name: "Avengers Forever (1998 - 2001)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/22381",
                  name: "Avengers K Book 5: Assembling the Avengers (2017)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/93",
                  name: "Avengers Legends Vol. I: Avengers Forever (2002)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/158",
                  name: "Avengers Vol. 1: World Trust (2003)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/4864",
                  name: "Avengers/Invaders (2008 - 2009)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/937",
                  name: "Avengers: Earth's Mightiest Heroes II (2006 - 2007)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/23777",
                  name: "Avengers: Tales to Astonish (2017)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1945",
                  name: "Avengers: The Initiative (2007 - 2010)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/15370", name: "Battle Scars (2011 - 2012)" },
              ],
              returned: 20,
            },
            stories: {
              available: 569,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009471/stories",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/798",
                  name: "Fantastic Four (1998) #507",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/799",
                  name: "Interior #799",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/800",
                  name: "Fantastic Four (1998) #508",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/801",
                  name: "Interior #801",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/1500",
                  name: "Interior #1500",
                  type: "interiorStory",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/stories/1616", name: "Cover #1616", type: "cover" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/1848",
                  name: "Fantastic Four (1998) #506",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/1849",
                  name: "Interior #1849",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/1850",
                  name: "Fantastic Four (1998) #505",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/1851",
                  name: "Interior #1851",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2190",
                  name: "6 of 6 - Enemy of the State",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2196",
                  name: "2 of 6 - Agent of S.H.I.E.L.D.",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2725",
                  name: "ULTIMATES 2 (2004) #2",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2731",
                  name: "ULTIMATES 2 (2004) #5",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2733",
                  name: "ULTIMATES 2 (2004) #6",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2737",
                  name: "ULTIMATES 2 (2004) #8",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2741",
                  name: "ULTIMATES 2 (2004) #9",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2743",
                  name: "ULTIMATES 2 (2004) #10",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/3193",
                  name: "Interior #3193",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/3308",
                  name: "Interior #3308",
                  type: "interiorStory",
                },
              ],
              returned: 20,
            },
            events: {
              available: 10,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009471/events",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/events/116", name: "Acts of Vengeance!" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/318", name: "Dark Reign" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/245", name: "Enemy of the State" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/249", name: "Fatal Attractions" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/302", name: "Fear Itself" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/37", name: "Maximum Security" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/319", name: "Original Sin" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/269", name: "Secret Invasion" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/309", name: "Shattered Heroes" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/273", name: "Siege" },
              ],
              returned: 10,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1009471/nick_fury?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url:
                  "http://marvel.com/universe/Fury%2C_Nick?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1009471/nick_fury?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1017298,
            name: "Nick Fury (LEGO Marvel Super Heroes)",
            description: "",
            modified: "2013-09-12T17:37:19-0400",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1017298",
            comics: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1017298/comics",
              items: [],
              returned: 0,
            },
            series: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1017298/series",
              items: [],
              returned: 0,
            },
            stories: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1017298/stories",
              items: [],
              returned: 0,
            },
            events: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1017298/events",
              items: [],
              returned: 0,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/characters/2782/nick_fury?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1017298/nick_fury_lego_marvel_super_heroes?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
        ],
      },
    },
    {
      code: 200,
      status: "Ok",
      copyright: "© 2019 MARVEL",
      attributionText: "Data provided by Marvel. © 2019 MARVEL",
      attributionHTML: '<a href="http://marvel.com">Data provided by Marvel. © 2019 MARVEL</a>',
      etag: "68d625c2adf8eeb43ccb18ef908af6a511f2510a",
      data: {
        offset: 0,
        limit: 20,
        total: 10,
        count: 10,
        results: [
          {
            id: 1009738,
            name: "Zaladane",
            description: "",
            modified: "1969-12-31T19:00:00-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1009738",
            comics: {
              available: 15,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009738/comics",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/20577", name: "Classic X-Men (1986) #22" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/19804", name: "Marvel Fanfare (1982) #3" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/19815", name: "Marvel Fanfare (1982) #4" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/1587",
                  name: "Marvel Masterworks: The Uncanny X-Men Vol. 5 (Hardcover)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/12431", name: "Uncanny X-Men (1963) #115" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/12432", name: "Uncanny X-Men (1963) #116" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/13791", name: "Uncanny X-Men (1963) #250" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/13816", name: "Uncanny X-Men (1963) #275" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/4100",
                  name: "Uncanny X-Men Omnibus Vol. 1 (Hardcover)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/18349", name: "What If? (1989) #46" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/12358", name: "X-Men Annual (1970) #12" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/1152",
                  name: "X-Men Legends Vol. 3: Art Adams Book I (Trade Paperback)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/1185",
                  name: "X-Men Legends Vol. III: Arthur Adams Book I (Trade Paperback)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/2314",
                  name: "X-Men Vignettes Vol. 2 (Trade Paperback)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/37491",
                  name: "X-Men: Earth's Mutant Heroes (2010) #1",
                },
              ],
              returned: 15,
            },
            series: {
              available: 11,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009738/series",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/series/3751", name: "Classic X-Men (1986 - 1990)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/3719",
                  name: "Marvel Fanfare (1982 - 1992)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1440",
                  name: "Marvel Masterworks: The Uncanny X-Men Vol. 5 (2005)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2258", name: "Uncanny X-Men (1963 - 2011)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1723",
                  name: "Uncanny X-Men Omnibus Vol. 1 (2006)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/3648", name: "What If? (1989 - 1998)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2100", name: "X-Men Annual (1970 - 1994)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/211",
                  name: "X-Men Legends Vol. 3: Art Adams Book I (2003)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/242",
                  name: "X-Men Legends Vol. III: Arthur Adams Book I (2003)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1460",
                  name: "X-Men Vignettes Vol. 2 (2005)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/13492",
                  name: "X-Men: Earth's Mutant Heroes (2010 - 2011)",
                },
              ],
              returned: 11,
            },
            stories: {
              available: 11,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009738/stories",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/15413",
                  name: "Visions of Death!",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/15415",
                  name: "To Save the Savage Land",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/19852",
                  name: "Resurrection",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/28009",
                  name: "Polaris No More!",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/28059",
                  name: "Cover #28059",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/39086",
                  name: "What If Cable Destroyed  the X-Men",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/42224",
                  name: "Into the Land of Death...",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/42307",
                  name: "Cover #42307",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/42309",
                  name: "Lost Souls!",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/43995",
                  name: "Frontispiece",
                  type: "pinup",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/82977",
                  name: "X-Men: Earth's Mutant Heroes #1",
                  type: "interiorStory",
                },
              ],
              returned: 11,
            },
            events: {
              available: 1,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009738/events",
              items: [{ resourceURI: "http://gateway.marvel.com/v1/public/events/246", name: "Evolutionary War" }],
              returned: 1,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1009738/zaladane?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1009738/zaladane?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1010841,
            name: "Zaran",
            description: "",
            modified: "1969-12-31T19:00:00-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1010841",
            comics: {
              available: 13,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010841/comics",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/7739", name: "Captain America (1968) #358" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/7793", name: "Captain America (1968) #412" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/40528",
                  name: "Captain America and Bucky (2011) #634",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/16064", name: "Marvel Knights (2000) #4" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/16065", name: "Marvel Knights (2000) #5" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/16066", name: "Marvel Knights (2000) #6" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/16067", name: "Marvel Knights (2000) #7" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/16057", name: "Marvel Knights (2000) #11" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/16058", name: "Marvel Knights (2000) #12" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/70874",
                  name: "Master of Kung Fu (1974) #78",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/70875",
                  name: "Master of Kung Fu (1974) #79",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/70905",
                  name: "Master of Kung Fu (1974) #109",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/17889",
                  name: "West Coast Avengers (1985) #11",
                },
              ],
              returned: 13,
            },
            series: {
              available: 5,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010841/series",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1996",
                  name: "Captain America (1968 - 1996)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/16325",
                  name: "Captain America and Bucky (2011 - 2012)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/2576",
                  name: "Marvel Knights (2000 - 2001)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/24265",
                  name: "Master of Kung Fu (1974 - 1979)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/3630",
                  name: "West Coast Avengers (1985 - 1994)",
                },
              ],
              returned: 5,
            },
            stories: {
              available: 16,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010841/stories",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/17986",
                  name: "Captain America (1968) #358",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/18144",
                  name: "Captain America (1968) #412",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/18145",
                  name: "Disguise the Limit",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/32756",
                  name: "Hero for Hire",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/32758",
                  name: "The Long, Long Night",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/32766",
                  name: "Cover #32766",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/32767",
                  name: "Zaran",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/32769",
                  name: "Family and Friends",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/32771",
                  name: "The Reckoning",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/32773",
                  name: "Strange Matters",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/38043",
                  name: "Cover #38043",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/91878",
                  name: "Captain America And... (2012) #634",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/91879",
                  name: "Interior #91879",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/157725",
                  name: "cover from Master of Kung Fu (1974) #78",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/157727",
                  name: "cover from Master of Kung Fu (1974) #79",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/157787",
                  name: "cover from Master of Kung Fu (1974) #109",
                  type: "cover",
                },
              ],
              returned: 16,
            },
            events: {
              available: 1,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010841/events",
              items: [{ resourceURI: "http://gateway.marvel.com/v1/public/events/37", name: "Maximum Security" }],
              returned: 1,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1010841/zaran?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1010841/zaran?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1010716,
            name: "Zarda",
            description: "",
            modified: "1969-12-31T19:00:00-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1010716",
            comics: {
              available: 3,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010716/comics",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/3908", name: "Squadron Supreme (2006) #1" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/5425",
                  name: "Squadron Supreme Vol. 1: The Pre-War Years Premiere (Hardcover)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/30602",
                  name: "Ultimate Comics New Ultimates (2010) #2",
                },
              ],
              returned: 3,
            },
            series: {
              available: 3,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010716/series",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/series/944", name: "Squadron Supreme (2006)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1791",
                  name: "Squadron Supreme Vol. 1: The Pre-War Years Premiere (2006)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/9026",
                  name: "Ultimate Comics New Ultimates (2010 - 2011)",
                },
              ],
              returned: 3,
            },
            stories: {
              available: 2,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010716/stories",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/5249",
                  name: "1 of 6 - The Pre-War Years",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/70030",
                  name: "Cover #70030",
                  type: "cover",
                },
              ],
              returned: 2,
            },
            events: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010716/events",
              items: [],
              returned: 0,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1010716/zarda?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1010716/zarda?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1011163,
            name: "Zarek",
            description:
              "Zarek is a member of the Kree race with no superhuman abilities or specialized weaponry, but as a blue Kree, he has enhanced strength, stamina and durability.",
            modified: "1969-12-31T19:00:00-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/5/90/4c002f38d0e05", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1011163",
            comics: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011163/comics",
              items: [],
              returned: 0,
            },
            series: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011163/series",
              items: [],
              returned: 0,
            },
            stories: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011163/stories",
              items: [],
              returned: 0,
            },
            events: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011163/events",
              items: [],
              returned: 0,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/characters/2659/zarek?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url: "http://marvel.com/universe/Zarek?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1011163/zarek?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1009739,
            name: "Zeigeist",
            description: "",
            modified: "1969-12-31T19:00:00-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1009739",
            comics: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009739/comics",
              items: [],
              returned: 0,
            },
            series: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009739/series",
              items: [],
              returned: 0,
            },
            stories: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009739/stories",
              items: [],
              returned: 0,
            },
            events: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009739/events",
              items: [],
              returned: 0,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/characters/2664/zeigeist?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1009739/zeigeist?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1010780,
            name: "Zemo",
            description: "",
            modified: "1969-12-31T19:00:00-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1010780",
            comics: {
              available: 14,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010780/comics",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/7310", name: "Avengers (1963) #6" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/7321", name: "Avengers (1963) #7" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/6953", name: "Avengers (1963) #10" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/7008", name: "Avengers (1963) #15" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/7306", name: "Avengers (1963) #56" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/29225",
                  name: "Captain America (2004) #608",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/29227",
                  name: "Captain America (2004) #610",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/87",
                  name: "Marvel Masterworks: The Avengers Vol. (Hardcover)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/5638",
                  name: "Marvel Masterworks: The Avengers Vol. (Hardcover)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/1213",
                  name: "Marvel Masterworks: The Avengers Vol. II - 2nd Edition (1st) (Trade Paperback)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/15368", name: "Thunderbolts (1997) #61" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/15371", name: "Thunderbolts (1997) #64" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/4056", name: "Thunderbolts (2006) #101" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/4748", name: "Thunderbolts (2006) #105" },
              ],
              returned: 14,
            },
            series: {
              available: 8,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010780/series",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/series/1991", name: "Avengers (1963 - 1996)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/832",
                  name: "Captain America (2004 - 2011)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1885",
                  name: "Civil War: Thunderbolts (2007)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1708",
                  name: "Marvel Masterworks: The Avengers Vol. (2006)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1390",
                  name: "Marvel Masterworks: The Avengers Vol. (2004)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/270",
                  name: "Marvel Masterworks: The Avengers Vol. II - 2nd Edition (1st) (2003)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2296", name: "Thunderbolts (1997 - 2003)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/18527", name: "Thunderbolts (2006 - 2012)" },
              ],
              returned: 8,
            },
            stories: {
              available: 11,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010780/stories",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/3906",
                  name: "THUNDERBOLTS (2006) #101",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/3914",
                  name: "THUNDERBOLTS (2006) #105",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/14441",
                  name: "Avengers (1963) #10 ",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/14553",
                  name: "AVENGERS (1963) #15",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/15173",
                  name: "AVENGERS (1963) #56",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/15181",
                  name: "Avengers (1963) #6 ",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/15203",
                  name: "AVENGERS (1963) #7",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/63641",
                  name: "CAPTAIN AMERICA (2004) #608",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/63645",
                  name: "CAPTAIN AMERICA (2004) #610",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/67388",
                  name: "Thunderbolts 61 cover",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/67391",
                  name: "Thunderbolts 64 cover",
                  type: "cover",
                },
              ],
              returned: 11,
            },
            events: {
              available: 1,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010780/events",
              items: [{ resourceURI: "http://gateway.marvel.com/v1/public/events/238", name: "Civil War" }],
              returned: 1,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1010780/zemo?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1010780/zemo?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1011127,
            name: "Zodiak",
            description:
              "Twelve demons merged with Norman Harrison, who, soon after, adopted the guise of Zodiac and used his abilities to harness powers based on the astrological Zodiac.",
            modified: "1969-12-31T19:00:00-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1011127",
            comics: {
              available: 1,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011127/comics",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/20360", name: "Defenders (1972) #50" },
              ],
              returned: 1,
            },
            series: {
              available: 1,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011127/series",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/series/3743", name: "Defenders (1972 - 1986)" },
              ],
              returned: 1,
            },
            stories: {
              available: 1,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011127/stories",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/43625",
                  name: "Story to Defenders #50",
                  type: "interiorStory",
                },
              ],
              returned: 1,
            },
            events: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011127/events",
              items: [],
              returned: 0,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1011127/zodiak?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url:
                  "http://marvel.com/universe/Zodiak?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1011127/zodiak?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1009741,
            name: "Zombie (Simon Garth)",
            description:
              "War hero Simon Garth was turned into a zombie by his secretary, Layla, who was also a voodoo priestess, after being killed by his gardener, Gyps.",
            modified: "1969-12-31T19:00:00-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/6/10/4c003937c9ba4", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1009741",
            comics: {
              available: 1,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009741/comics",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/22118", name: "Strange Tales (1998) #1" },
              ],
              returned: 1,
            },
            series: {
              available: 1,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009741/series",
              items: [{ resourceURI: "http://gateway.marvel.com/v1/public/series/5850", name: "Strange Tales (1998)" }],
              returned: 1,
            },
            stories: {
              available: 1,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009741/stories",
              items: [{ resourceURI: "http://gateway.marvel.com/v1/public/stories/49770", name: "", type: "recap" }],
              returned: 1,
            },
            events: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009741/events",
              items: [],
              returned: 0,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1009741/zombie_simon_garth?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url:
                  "http://marvel.com/universe/Zombie_(Simon_Garth)?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1009741/zombie_simon_garth?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1011183,
            name: "Zuras",
            description: "Zuras was once the leader of the Eternals.",
            modified: "1969-12-31T19:00:00-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1011183",
            comics: {
              available: 3,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011183/comics",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/8813", name: "Eternals (1976) #5" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/4322",
                  name: "Eternals by Jack Kirby (Hardcover)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/40645", name: "Hulk (2008) #49" },
              ],
              returned: 3,
            },
            series: {
              available: 3,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011183/series",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2017", name: "Eternals (1976 - 1978)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1770",
                  name: "Eternals by Jack Kirby (2006)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/3374", name: "Hulk (2008 - 2012)" },
              ],
              returned: 3,
            },
            stories: {
              available: 3,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011183/stories",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/20525",
                  name: "ETERNALS (1976) #5",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/92112",
                  name: "Hulk (2008) #49",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/92113",
                  name: "Interior #92113",
                  type: "interiorStory",
                },
              ],
              returned: 3,
            },
            events: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011183/events",
              items: [],
              returned: 0,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1011183/zuras?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url: "http://marvel.com/universe/Zuras?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1011183/zuras?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1009742,
            name: "Zzzax",
            description:
              "A chain reaction in an atomic reactor, a result of a terrorist attack, accidentally created a force that absorbed the electrolytes of the nearby humans' brains, granting the explosion of energy a rudimentary sentience.  ",
            modified: "2013-12-17T18:35:54-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/c/d0/4ced5ab9078c9", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1009742",
            comics: {
              available: 5,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009742/comics",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/37047", name: "Hulk (2008) #36" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/40023",
                  name: "Hulk (2008) #36 (I Am Captain America Variant)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/29541",
                  name: "Incredible Hulks (2010) #602 (SHS VARIANT)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/75831", name: "Power Man (1974) #47" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/17890",
                  name: "West Coast Avengers (1985) #12",
                },
              ],
              returned: 5,
            },
            series: {
              available: 4,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009742/series",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/series/3374", name: "Hulk (2008 - 2012)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/8842",
                  name: "Incredible Hulks (2010 - 2011)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/20672", name: "Power Man (1974 - 1978)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/3630",
                  name: "West Coast Avengers (1985 - 1994)",
                },
              ],
              returned: 4,
            },
            stories: {
              available: 6,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009742/stories",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/38045",
                  name: "Cover #38045",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/82130",
                  name: "Interior #82130",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/90817",
                  name: "Interior #90817",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/94784",
                  name: "Incredible Hulks (2009) #602, SHS VARIANT",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/96343",
                  name: "Hulk (2008) #36",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/168522",
                  name: "cover from Power Man (1978) #47",
                  type: "cover",
                },
              ],
              returned: 6,
            },
            events: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009742/events",
              items: [],
              returned: 0,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1009742/zzzax?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url: "http://marvel.com/universe/Zzzax?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1009742/zzzax?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
        ],
      },
    },
    {
      code: 200,
      status: "Ok",
      copyright: "© 2019 MARVEL",
      attributionText: "Data provided by Marvel. © 2019 MARVEL",
      attributionHTML: '<a href="http://marvel.com">Data provided by Marvel. © 2019 MARVEL</a>',
      etag: "2498f8f591d39631a23833b509338be0851ceef0",
      data: {
        offset: 0,
        limit: 20,
        total: 196,
        count: 20,
        results: [
          {
            id: 1009552,
            name: "S.H.I.E.L.D.",
            description: "",
            modified: "2016-04-14T12:23:14-0400",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/6/20/51097abb8e306", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1009552",
            comics: {
              available: 145,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009552/comics",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/24348",
                  name: "Adam: Legend of the Blue Marvel (Trade Paperback)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/22856",
                  name: "Adam: Legend of the Blue Marvel (2008) #2",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/56034",
                  name: "Agents of S.H.I.E.L.D. (2016) #6",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/56035",
                  name: "Agents of S.H.I.E.L.D. (2016) #7",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/56036",
                  name: "Agents of S.H.I.E.L.D. (2016) #8",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/56037",
                  name: "Agents of S.H.I.E.L.D. (2016) #9",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/56038",
                  name: "Agents of S.H.I.E.L.D. (2016) #10",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/6970", name: "Avengers (1963) #115" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/32477",
                  name: "Avengers & the Infinity Gauntlet (2010) #1",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/21247",
                  name: "Avengers/Invaders (2008) #1",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/21394",
                  name: "Avengers/Invaders (2008) #2",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/22524",
                  name: "Avengers/Invaders (2008) #6",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/64791",
                  name: "Avengers: Standoff (Trade Paperback)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/65326",
                  name: "Avengers: Tales to Astonish (Trade Paperback)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/73150",
                  name: "Blade: Vampire Hunter (1999) #4",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/73151",
                  name: "Blade: Vampire Hunter (1999) #5",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/73152",
                  name: "Blade: Vampire Hunter (1999) #6",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/66300",
                  name: "Cable & X-Force: Onslaught Rising (Trade Paperback)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/16248", name: "Cap Transport (2005) #9" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/2308", name: "Captain America (2004) #9" },
              ],
              returned: 20,
            },
            series: {
              available: 71,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009552/series",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/7524",
                  name: "Adam: Legend of the Blue Marvel (2008)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/6079",
                  name: "Adam: Legend of the Blue Marvel (2008)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/20607",
                  name: "Agents of S.H.I.E.L.D. (2016 - Present)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/1991", name: "Avengers (1963 - 1996)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/9859",
                  name: "Avengers & the Infinity Gauntlet (2010)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/4864",
                  name: "Avengers/Invaders (2008 - 2009)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/23601", name: "Avengers: Standoff (2017)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/23777",
                  name: "Avengers: Tales to Astonish (2017)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/26394",
                  name: "Blade: Vampire Hunter (1999 - Present)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/24019",
                  name: "Cable & X-Force: Onslaught Rising (2018)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2722", name: "Cap Transport (2005 - 2006)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/832",
                  name: "Captain America (2004 - 2011)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/21100",
                  name: "Captain America: Steve Rogers Vol. 2 - The Trial of Maria Hill (2017)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1613",
                  name: "Captain America: Winter Soldier Vol. 2 (2006)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/21417", name: "Civil War II (2016)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/10105", name: "Civil War: X-Men (2011)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2002", name: "Daredevil (1964 - 1998)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/23832",
                  name: "Deadpool & X-Force Omnibus (2017)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/24086",
                  name: "Deadpool by Posehn & Duggan: The Complete Collection Vol. 2 (2018)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/22481", name: "Deadpool the Duck (2017)" },
              ],
              returned: 20,
            },
            stories: {
              available: 171,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009552/stories",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/4243",
                  name: "2 of 6 - Winter Soldier",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/4244",
                  name: "2 of 6 - Winter Soldier",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/4271",
                  name: "1 of ? - Civil War",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/10240",
                  name: "Cover #10240",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/10241",
                  name: "Who Strikes at---Shield?",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/10249",
                  name: "Cover #10249",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/10261",
                  name: "Cover #10261",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/11993",
                  name: "The Warrior and the Whip!",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/14478",
                  name: "Below Us the Battle!",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/15611",
                  name: "Before I'd Be Slave...",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/15754",
                  name: "... And a HYDRA New Year!",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/16352",
                  name: "Flying Blind Part 3: Under the Gun",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/16354",
                  name: "Flying Blind Part 4: Face to Face with the Truth!",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/18823",
                  name: "Incredible Hulk (1962) #337",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/18824",
                  name: "Crossroads",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/25760",
                  name: "Out Of The Blue (Into The Fire) [Part 1 of 3]",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/25763",
                  name: "Broken! [Part 2 of 3]",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/25834",
                  name: "Doomsday!",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/27422",
                  name: "The Dogs of War, Part 7",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/28542",
                  name: "Out Of The Blue (Into The Fire) [Part 1 of 3]",
                  type: "interiorStory",
                },
              ],
              returned: 20,
            },
            events: {
              available: 1,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009552/events",
              items: [{ resourceURI: "http://gateway.marvel.com/v1/public/events/238", name: "Civil War" }],
              returned: 1,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1009552/shield.?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url:
                  "http://marvel.com/universe/S.H.I.E.L.D.?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1009552/shield.?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1009553,
            name: "Sabra",
            description:
              "Ruth Bat-Seraph is an Israeli national who, along with her family, was taken to a special community by the Israeli government when her genetic mutation manifested.",
            modified: "1969-12-31T19:00:00-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1009553",
            comics: {
              available: 21,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009553/comics",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/40116",
                  name: "Amazing Spider-Man (1999) #685",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/42760",
                  name: "Amazing Spider-Man: Ends of the Earth (2012) #1",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/8586", name: "Excalibur (1988) #120" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/8587", name: "Excalibur (1988) #121" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/9197", name: "Incredible Hulk (1962) #386" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/9198", name: "Incredible Hulk (1962) #387" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/15522",
                  name: "Marvel Super Heroes (1990) #6",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/5451", name: "New X-Men (Hardcover)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/14951", name: "New X-Men (2001) #132" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/994",
                  name: "New X-Men Vol. III: New Worlds (Trade Paperback)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/13907", name: "Uncanny X-Men (1963) #366" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/13909", name: "Uncanny X-Men (1963) #368" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/40860", name: "X-Men (2010) #36" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/40855", name: "X-Men (2010) #37" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/14358", name: "X-Men (1991) #67" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/14359", name: "X-Men (1991) #68" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/14360", name: "X-Men (1991) #69" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/14365", name: "X-Men (1991) #73" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/14295", name: "X-Men (1991) #111" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/1951",
                  name: "X-Men: Eve of Destruction (Trade Paperback)",
                },
              ],
              returned: 20,
            },
            series: {
              available: 13,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009553/series",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/454",
                  name: "Amazing Spider-Man (1999 - 2013)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/16312",
                  name: "Amazing Spider-Man: Ends of the Earth (2012)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2011", name: "Excalibur (1988 - 1998)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/2021",
                  name: "Incredible Hulk (1962 - 1999)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/2301",
                  name: "Marvel Super Heroes (1990 - 1993)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/1807", name: "New X-Men (2006)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2281", name: "New X-Men (2001 - 2004)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/56",
                  name: "New X-Men Vol. III: New Worlds (1999)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2258", name: "Uncanny X-Men (1963 - 2011)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/9906", name: "X-Men (2010 - 2013)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2265", name: "X-Men (1991 - 2001)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1319",
                  name: "X-Men: Eve of Destruction (2005)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1304",
                  name: "X-Statix Vol. 4: X-Statix Vs. the Avengers (2004)",
                },
              ],
              returned: 13,
            },
            stories: {
              available: 21,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009553/stories",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/18921",
                  name: "Incredible Hulk (1962) #386",
                  type: "cover",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/stories/18922", name: "Little Hitler", type: "" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/18923",
                  name: "Incredible Hulk (1962) #387",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/18924",
                  name: "Hiding Behind Mosques",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/22453",
                  name: "Current Events",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/22455",
                  name: "With Friends Like These...",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/28276",
                  name: "The Shot Heard Round The World (The Magneto War Part One)",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/28280",
                  name: "Mansions In Heaven",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/29143",
                  name: "Prelude to Destruction",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/29272",
                  name: "The End of Days",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/29274",
                  name: "Heart of the Matter",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/29275",
                  name: "Operation Zero Tolerance: The Conclusion",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/29276",
                  name: "Last Exit",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/29285",
                  name: "Identity Crisis !",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/30438",
                  name: "Ambient Magnetic Fields",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/31624",
                  name: "Cover #31624",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/31628",
                  name: "Fruits of the Wound",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/91029",
                  name: "Amazing Spider-Man (1999) #685",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/92534",
                  name: "X-Men (2010) #37",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/92544",
                  name: "X-Men (2010) #36",
                  type: "cover",
                },
              ],
              returned: 20,
            },
            events: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009553/events",
              items: [],
              returned: 0,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1009553/sabra?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url: "http://marvel.com/universe/Sabra?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1009553/sabra?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1009554,
            name: "Sabretooth",
            description: "",
            modified: "2014-01-27T16:04:53-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/1/00/4ce1895117793", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1009554",
            comics: {
              available: 293,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009554/comics",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/38524",
                  name: "Age of X: Universe (2011) #1",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/65892",
                  name: "All-New Wolverine (2015) #29",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/43474", name: "All-New X-Men (2012) #9" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/43475", name: "All-New X-Men (2012) #10" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/6732",
                  name: "The Amazing Spider-Man (1963) #324",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/45821",
                  name: "Astonishing X-Men (2004) #60",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/45823",
                  name: "Astonishing X-Men (2004) #62",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/40360", name: "Avengers 1959 (2011) #1" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/40359", name: "Avengers 1959 (2011) #2" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/40357", name: "Avengers 1959 (2011) #3" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/40358", name: "Avengers 1959 (2011) #4" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/40393", name: "Avengers 1959 (2011) #5" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/20731",
                  name: "Clandestine Classic Premiere (Hardcover)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/73576",
                  name: "Darkhold: Pages from The Book of Sins (1992) #4",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/8514", name: "Deadpool (1997) #57" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/8515", name: "Deadpool (1997) #58" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/8516", name: "Deadpool (1997) #59" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/8518", name: "Deadpool (1997) #60" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/64695",
                  name: "Deadpool: World's Greatest Vol. 2 (Hardcover)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/4094",
                  name: "Essential Wolverine Vol. 4 (Trade Paperback)",
                },
              ],
              returned: 20,
            },
            series: {
              available: 108,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009554/series",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/series/13896", name: "Age of X: Universe (2011)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/20682",
                  name: "All-New Wolverine (2015 - 2018)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/16449",
                  name: "All-New X-Men (2012 - Present)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/744",
                  name: "Astonishing X-Men (2004 - 2013)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/14985",
                  name: "Avengers 1959 (2011 - 2012)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/3874",
                  name: "Clandestine Classic Premiere (2008)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/21932",
                  name: "Darkhold: Pages from The Book of Sins (1992)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2005", name: "Deadpool (1997 - 2002)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/23571",
                  name: "Deadpool: World's Greatest Vol. 2 (2017)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1691",
                  name: "Essential Wolverine Vol. 4 (2006)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/14388",
                  name: "Essential X-Men Vol. 6 (All-New Edition) (2011 - Present)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/479", name: "Exiles (2001 - 2008)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/2553",
                  name: "Exiles Vol. 15: Enemy of the Stars (2007)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/24881",
                  name: "Hunt for Wolverine: Claws of a Killer (2018)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/24316",
                  name: "Hunt for Wolverine: Claws of a Killer (2018)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/1333", name: "Identity Disc (2004)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/782", name: "Identity Disc (2004)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/6252", name: "Iron Fist (1975 - 1977)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/22993", name: "Iron Fist (2017 - Present)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/24100",
                  name: "Iron Fist Vol. 2: Sabretooth - Round Two (2018)",
                },
              ],
              returned: 20,
            },
            stories: {
              available: 301,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009554/stories",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/594",
                  name: "X-MEN (2004) #164",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/624",
                  name: "X-MEN (2004) #162",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/676",
                  name: "X-MEN (2004) #189",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/680",
                  name: "4 of 6 - Supernovas",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/745",
                  name: "1 of 2 - Mojo Rising",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/1790",
                  name: "WEAPON X (2002) #26",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/1798",
                  name: "WEAPON X (2002) #28",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2243",
                  name: "WOLVERINE (2003) #50",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/3666",
                  name: "3 of 4 - 4XLS",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/3668",
                  name:
                    "PART 1 (OF 5) The most brutal villain in the Marvel Universe returns!  But has he gone too far this time?  Did Sabretooth destro",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/3670",
                  name:
                    "PART 2 (OF 5) The most brutal villain in the Marvel Universe returns!  But has he gone too far this time?  Did Sabretooth destro",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/3672",
                  name: "4 of 4 - 4XLS",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/3794",
                  name: "IDENTITY DISC (2004) #3",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/3796",
                  name: "IDENTITY DISC (2004) #2",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/3798",
                  name: "IDENTITY DISC (2004) #1",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/3800",
                  name: "IDENTITY DISC (2004) #4",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/3802",
                  name: "IDENTITY DISC (2004) #5",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/5463",
                  name: "X-Men and Power Pack (2005) #1",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/5464",
                  name: "1 of 4 - 4XLS",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/6038",
                  name: "Wolverine Origins (2006) #5",
                  type: "cover",
                },
              ],
              returned: 20,
            },
            events: {
              available: 8,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009554/events",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/events/227", name: "Age of Apocalypse" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/303", name: "Age of X" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/252", name: "Inferno" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/334", name: "Inhumans Vs. X-Men" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/299", name: "Messiah CompleX" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/263", name: "Mutant Massacre" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/154", name: "Onslaught" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/308", name: "X-Men: Regenesis" },
              ],
              returned: 8,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1009554/sabretooth?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url:
                  "http://marvel.com/universe/Sabretooth?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1009554/sabretooth?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1010969,
            name: "Sabretooth (Age of Apocalypse)",
            description: "",
            modified: "2013-10-24T13:25:35-0400",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/d/90/5269580126d71", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1010969",
            comics: {
              available: 22,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010969/comics",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/47070",
                  name: "Age of Apocalypse (2011) #14",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/17735",
                  name: "Astonishing X-Men (1995) #1",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/17736",
                  name: "Astonishing X-Men (1995) #2",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/17737",
                  name: "Astonishing X-Men (1995) #3",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/2085", name: "Exiles (2001) #65" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/2457", name: "Exiles (2001) #71" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/5806", name: "Exiles (2001) #90" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/6005", name: "Exiles (2001) #91" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/2426",
                  name: "Exiles Vol. 11: Time Breakers (Trade Paperback)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/3499",
                  name: "Exiles Vol. 12: World Tour Book 1 (Trade Paperback)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/16021",
                  name: "Exiles Vol. 15: Enemy of the Stars (Trade Paperback)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/1489",
                  name: "Official Handbook of the Marvel Universe (2004) #8",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/1590",
                  name: "Official Handbook of the Marvel Universe (2004) #9 (THE WOMEN OF MARVEL)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/1689",
                  name: "Official Handbook of the Marvel Universe (2004) #10 (MARVEL KNIGHTS)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/1749",
                  name: "Official Handbook of the Marvel Universe (2004) #11 (X-MEN - AGE OF APOCALYPSE)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/1886",
                  name: "Official Handbook of the Marvel Universe (2004) #12 (SPIDER-MAN)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/1994",
                  name: "Official Handbook of the Marvel Universe (2004) #13 (TEAMS)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/32578", name: "Uncanny X-Force (2010) #12" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/40102",
                  name: "Uncanny X-Force (2010) #12 (Kubert Variant)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/40018",
                  name: "Uncanny X-Force (2010) #12 (I Am Captain America Variant)",
                },
              ],
              returned: 20,
            },
            series: {
              available: 10,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010969/series",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/15331",
                  name: "Age of Apocalypse (2011 - 2013)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/3619", name: "Astonishing X-Men (1995)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/479", name: "Exiles (2001 - 2008)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1462",
                  name: "Exiles Vol. 11: Time Breakers (2005)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1563",
                  name: "Exiles Vol. 12: World Tour Book 1 (2006)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/2553",
                  name: "Exiles Vol. 15: Enemy of the Stars (2007)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/787",
                  name: "Official Handbook of the Marvel Universe (2004)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/9976",
                  name: "Uncanny X-Force (2010 - 2012)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/23702",
                  name: "X-Men: Age of Apocalypse - Termination (2017)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1684",
                  name: "X-Men: The Complete Age of Apocalypse Epic Book 3 (2006)",
                },
              ],
              returned: 10,
            },
            stories: {
              available: 19,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010969/stories",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/1542",
                  name: "4 of 4 - Time Breakers",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/1552",
                  name: "Exiles (2001) #71",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/1592",
                  name: "1 of 5 - Enemy of the Stars",
                  type: "cover",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/stories/4153", name: "Cover #4153", type: "cover" },
                { resourceURI: "http://gateway.marvel.com/v1/public/stories/4223", name: "Cover #4223", type: "cover" },
                { resourceURI: "http://gateway.marvel.com/v1/public/stories/4430", name: "Cover #4430", type: "cover" },
                { resourceURI: "http://gateway.marvel.com/v1/public/stories/4513", name: "Cover #4513", type: "cover" },
                { resourceURI: "http://gateway.marvel.com/v1/public/stories/4612", name: "Cover #4612", type: "cover" },
                { resourceURI: "http://gateway.marvel.com/v1/public/stories/4614", name: "Cover #4614", type: "cover" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/7637",
                  name: "2 of 5 - Enemy of the Stars",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/37637",
                  name: "Once More With Feeling",
                  type: "",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/37640",
                  name: "Sacrificial Lambs",
                  type: "",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/stories/37643", name: "In Excess", type: "" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/67707",
                  name: "Astonishing X-Men (1995) #2",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/73562",
                  name: "Interior #73562",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/90807",
                  name: "Interior #90807",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/90992",
                  name: "Cover #90992",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/105733",
                  name: "cover from Age of Apocalypse (2012) #14",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/141368",
                  name: "cover from X-MEN: AGE OF APOCALYPSE - TERMINATION TPB (2017) #1",
                  type: "cover",
                },
              ],
              returned: 19,
            },
            events: {
              available: 2,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010969/events",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/events/227", name: "Age of Apocalypse" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/251", name: "House of M" },
              ],
              returned: 2,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1010969/sabretooth_age_of_apocalypse?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url:
                  "http://marvel.com/universe/Sabretooth_%28Age_of_Apocalypse%29?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1010969/sabretooth_age_of_apocalypse?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1010970,
            name: "Sabretooth (House of M)",
            description: "",
            modified: "1969-12-31T19:00:00-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/5/80/4c0033dd26d33", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1010970",
            comics: {
              available: 1,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010970/comics",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/2323", name: "Black Panther (2005) #7" },
              ],
              returned: 1,
            },
            series: {
              available: 1,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010970/series",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/series/784", name: "Black Panther (2005 - 2008)" },
              ],
              returned: 1,
            },
            stories: {
              available: 1,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010970/stories",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/3824",
                  name: "1 of 1- House of M",
                  type: "cover",
                },
              ],
              returned: 1,
            },
            events: {
              available: 1,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010970/events",
              items: [{ resourceURI: "http://gateway.marvel.com/v1/public/events/251", name: "House of M" }],
              returned: 1,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1010970/sabretooth_house_of_m?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url:
                  "http://marvel.com/universe/Sabretooth_%28House_of_M%29?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1010970/sabretooth_house_of_m?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1010968,
            name: "Sabretooth (Ultimate)",
            description: "",
            modified: "2011-05-24T09:57:30-0400",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c0033dfc318e", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1010968",
            comics: {
              available: 23,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010968/comics",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/30609",
                  name: "Ultimate Comics X (2010) #2",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/30612",
                  name: "Ultimate Comics X (2010) #5",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/15785",
                  name: "Ultimate Marvel Team-Up (2001) #1",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/5132",
                  name: "Ultimate Marvel Team-Up Ultimate Collection (Trade Paperback)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/15767", name: "Ultimate X-Men (2000) #8" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/15768", name: "Ultimate X-Men (2000) #9" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/15700", name: "Ultimate X-Men (2000) #10" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/15701", name: "Ultimate X-Men (2000) #11" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/15702", name: "Ultimate X-Men (2000) #12" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/15717", name: "Ultimate X-Men (2000) #26" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/15718", name: "Ultimate X-Men (2000) #27" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/15722", name: "Ultimate X-Men (2000) #30" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/3394", name: "Ultimate X-Men (2000) #66" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/3505", name: "Ultimate X-Men (2000) #67" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/3911", name: "Ultimate X-Men (2000) #68" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/22472", name: "Ultimate X-Men (2000) #98" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/22869", name: "Ultimate X-Men (2000) #99" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/5057",
                  name: "Ultimate X-Men Vol. 14: Phoenix? (Trade Paperback)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/17377",
                  name: "Ultimates 3 (2007) #1 (Villains Gatefold)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/17617", name: "Ultimates 3 (2007) #2" },
              ],
              returned: 20,
            },
            series: {
              available: 7,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010968/series",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/8512",
                  name: "Ultimate Comics X (2010 - 2011)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/2311",
                  name: "Ultimate Marvel Team-Up (2001 - 2002)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1823",
                  name: "Ultimate Marvel Team-Up Ultimate Collection (2006)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/474", name: "Ultimate X-Men (2000 - 2009)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1662",
                  name: "Ultimate X-Men Vol. 14: Phoenix? (2006)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/3188", name: "Ultimates 3 (2007 - 2008)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/7515",
                  name: "Ultimates 3: Who Killed the Scarlet Witch? (2009 - Present)",
                },
              ],
              returned: 7,
            },
            stories: {
              available: 39,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010968/stories",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/1464",
                  name: "Ultimate X-Men (2001) #66",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/1465",
                  name: "1 of 3 -",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/1466",
                  name: "Ultimate X-Men (2001) #67",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/1467",
                  name: "2 of 3 -",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/1468",
                  name: "Ultimate X-Men (2001) #68",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/1469",
                  name: "3 of 3 - Date Night",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/31880",
                  name: "Ultimate X-Men (2001) #26",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/31882",
                  name: "Return of the King: Prelude",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/32142",
                  name: "Previously ...",
                  type: "recap",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/32143",
                  name: "Return To Weapon X Part Six",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/32153",
                  name: "Previously ...",
                  type: "recap",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/32154",
                  name: "Return To Weapon X Part Five",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/32156",
                  name: "Ultimate X-Men (2001) #10",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/32157",
                  name: "Previously ...",
                  type: "recap",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/32158",
                  name: "Return To Weapon X Part Four",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/32191",
                  name: "Ultimate X-Men (2001) #27",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/32193",
                  name: "Magneto Triumphant",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/32253",
                  name: "Ultimate X-Men (2001) #8",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/32255",
                  name: "Return To Weapon X Part Two",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/32259",
                  name: "Ultimate X-Men (2001) #9",
                  type: "cover",
                },
              ],
              returned: 20,
            },
            events: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010968/events",
              items: [],
              returned: 0,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/characters/1975/sabretooth?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url:
                  "http://marvel.com/universe/Sabretooth_%28Ultimate%29?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1010968/sabretooth_ultimate?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1009555,
            name: "Sage",
            description: "",
            modified: "1969-12-31T19:00:00-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/5/90/4c003c44095cb", extension: "png" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1009555",
            comics: {
              available: 28,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009555/comics",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/45821",
                  name: "Astonishing X-Men (2004) #60",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/45822",
                  name: "Astonishing X-Men (2004) #61",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/5085", name: "New Excalibur (2005) #11" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/6132",
                  name: "New Excalibur Vol. 2: Last Days of Camelot (Trade Paperback)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/14959", name: "New X-Men (2001) #140" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/14960", name: "New X-Men (2001) #141" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/2073", name: "Uncanny X-Men (1963) #460" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/2299",
                  name: "Uncanny X-Men - The New Age Vol. 3: On Ice (Trade Paperback)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/18017", name: "X-Force (1991) #50" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/16590",
                  name: "X-Men: Die by the Sword (2007) #1",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/16591",
                  name: "X-Men: Die by the Sword (2007) #2",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/17282",
                  name: "X-Men: Die by the Sword (2007) #3",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/17414",
                  name: "X-Men: Die by the Sword (2007) #4",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/17415",
                  name: "X-Men: Die by the Sword (2007) #5",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/15011", name: "X-Treme X-Men (2001) #1" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/15022", name: "X-Treme X-Men (2001) #2" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/15033", name: "X-Treme X-Men (2001) #3" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/15044", name: "X-Treme X-Men (2001) #4" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/15052", name: "X-Treme X-Men (2001) #5" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/15054", name: "X-Treme X-Men (2001) #7" },
              ],
              returned: 20,
            },
            series: {
              available: 13,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009555/series",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/744",
                  name: "Astonishing X-Men (2004 - 2013)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/935", name: "New Excalibur (2005 - 2007)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1897",
                  name: "New Excalibur Vol. 2: Last Days of Camelot (2007)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2281", name: "New X-Men (2001 - 2004)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2258", name: "Uncanny X-Men (1963 - 2011)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1399",
                  name: "Uncanny X-Men - The New Age Vol. 3: On Ice (2005)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/8086", name: "Wolverine Saga (2009)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/3633", name: "X-Force (1991 - 2004)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/2890",
                  name: "X-Men: Die by the Sword (2007 - 2008)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/646", name: "X-Treme X-Men (2001 - 2004)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/182",
                  name: "X-Treme X-Men Vol. 3: Schism (2003)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/144",
                  name: "X-Treme X-Men: Savage Land (1999)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/2107",
                  name: "X-Treme X-Men: The Savage Land (2001 - 2002)",
                },
              ],
              returned: 13,
            },
            stories: {
              available: 33,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009555/stories",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/745",
                  name: "1 of 2 - Mojo Rising",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/5162",
                  name: "NEW EXCALIBUR (2005) #11",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/26043",
                  name: "X-TREME X-MEN: THE SAVAGE LAND (2001) #1",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/26047",
                  name: "X-TREME X-MEN: THE SAVAGE LAND (2001) #3",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/26128",
                  name: "Day of the Atom Part One: Black Holes",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/26144",
                  name: "Hark How the Bells--!",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/30525",
                  name: "X-Treme X-Men (2001) #1",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/30530",
                  name: "X-Treme X-Men (2001) #10",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/30531",
                  name: "Keys of the Kingdom",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/30555",
                  name: "X-Treme X-Men (2001) #2",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/30556",
                  name: "Blindside",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/30561",
                  name: "X-TREME X-MEN (2001) #21",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/30579",
                  name: "X-Treme X-Men (2001) #3",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/30580",
                  name: "Hell To Pay !",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/30599",
                  name: "X-Treme X-Men (2001) #4",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/30600",
                  name: "Dreamtime Serenade",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/30608",
                  name: "Deadline !",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/30611",
                  name: "X-Treme X-Men (2001) #7",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/30612",
                  name: "Getting Even !",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/30613",
                  name: "X-Treme X-Men (2001) #8",
                  type: "cover",
                },
              ],
              returned: 20,
            },
            events: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009555/events",
              items: [],
              returned: 0,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1009555/sage?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url: "http://marvel.com/universe/Sage?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1009555/sage?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1011325,
            name: "Salem's Seven (Ultimate)",
            description: "",
            modified: "1969-12-31T19:00:00-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1011325",
            comics: {
              available: 4,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011325/comics",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/21182",
                  name: "Ultimate Fantastic Four (2003) #54",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/21332",
                  name: "Ultimate Fantastic Four (2003) #55",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/21510",
                  name: "Ultimate Fantastic Four (2003) #56",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/21713",
                  name: "Ultimate Fantastic Four (2003) #57",
                },
              ],
              returned: 4,
            },
            series: {
              available: 1,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011325/series",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/702",
                  name: "Ultimate Fantastic Four (2003 - 2009)",
                },
              ],
              returned: 1,
            },
            stories: {
              available: 8,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011325/stories",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/46790",
                  name: "Ultimate Fantastic Four (2003) #54",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/46791",
                  name: "Namor War 1 of 4",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/47112",
                  name: "Ultimate Fantastic Four (2003) #55",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/47113",
                  name: "Namor War 2 of 4",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/47425",
                  name: "Ultimate Fantastic Four (2003) #56",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/47426",
                  name: "3 of 4 - Salem Seven",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/47733",
                  name: "Ultimate Fantastic Four (2003) #57",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/47734",
                  name: "4 of 4 - Salem Seven",
                  type: "interiorStory",
                },
              ],
              returned: 8,
            },
            events: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011325/events",
              items: [],
              returned: 0,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1011325/salems_seven_ultimate?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url:
                  "http://marvel.com/universe/Salem%27s%20Seven%20(Ultimate)?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1011325/salems_seven_ultimate?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1011126,
            name: "Sally Floyd",
            description: "",
            modified: "1969-12-31T19:00:00-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/c/d0/4ce5a4ef4b966", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1011126",
            comics: {
              available: 7,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011126/comics",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/4275",
                  name: "Decimation: Generation M (Trade Paperback)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/17203", name: "Generation M (2005) #1" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/3209", name: "Generation M (2005) #2" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/3417", name: "Generation M (2005) #3" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/3532", name: "Generation M (2005) #4" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/3980", name: "Generation M (2005) #5" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/15879",
                  name: "World War Hulk: Front Line (2007) #1",
                },
              ],
              returned: 7,
            },
            series: {
              available: 3,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011126/series",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1635",
                  name: "Decimation: Generation M (2006)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/973", name: "Generation M (2005 - 2006)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/2407",
                  name: "World War Hulk: Front Line (2007)",
                },
              ],
              returned: 3,
            },
            stories: {
              available: 6,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011126/stories",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/5485",
                  name: "2 of 4 - 4XLS",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/5487",
                  name: "3 of 5 - 5XLS",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/5489",
                  name: "4 of 5 - 5XLS",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/5491",
                  name: "5 of 5 - 5XLS - Generation M",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/32428",
                  name: "WORLD WAR HULK: FRONT LINE (2007) #1",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/36630",
                  name: "Interior #36630",
                  type: "interiorStory",
                },
              ],
              returned: 6,
            },
            events: {
              available: 1,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011126/events",
              items: [{ resourceURI: "http://gateway.marvel.com/v1/public/events/277", name: "World War Hulk" }],
              returned: 1,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1011126/sally_floyd?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url:
                  "http://marvel.com/universe/Floyd,_Sally?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1011126/sally_floyd?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1011156,
            name: "Salo",
            description: "",
            modified: "1969-12-31T19:00:00-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/9/80/4c002f4ee689c", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1011156",
            comics: {
              available: 1,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011156/comics",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/4472",
                  name: "Annihilation: Super-Skrull (2006) #4",
                },
              ],
              returned: 1,
            },
            series: {
              available: 1,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011156/series",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1080",
                  name: "Annihilation: Super-Skrull (2006)",
                },
              ],
              returned: 1,
            },
            stories: {
              available: 1,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011156/stories",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/65611",
                  name: "Annihilation: Super-Skrull (2006) #4",
                  type: "cover",
                },
              ],
              returned: 1,
            },
            events: {
              available: 1,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011156/events",
              items: [{ resourceURI: "http://gateway.marvel.com/v1/public/events/229", name: "Annihilation" }],
              returned: 1,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1011156/salo?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url: "http://marvel.com/universe/Salo?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1011156/salo?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1009558,
            name: "Sandman",
            description: "",
            modified: "1969-12-31T19:00:00-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1009558",
            comics: {
              available: 122,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009558/comics",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/6815",
                  name: "The Amazing Spider-Man (1963) #4",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/37901",
                  name: "Amazing Spider-Man (1999) #4",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/6571",
                  name: "The Amazing Spider-Man (1963) #18",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/6582",
                  name: "The Amazing Spider-Man (1963) #19",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/6539",
                  name: "The Amazing Spider-Man (1963) #150",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/6543",
                  name: "The Amazing Spider-Man (1963) #154",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/6613",
                  name: "The Amazing Spider-Man (1963) #217",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/6684",
                  name: "The Amazing Spider-Man (1963) #281",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/6709",
                  name: "The Amazing Spider-Man (1963) #303",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/6746",
                  name: "The Amazing Spider-Man (1963) #337",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/6747",
                  name: "The Amazing Spider-Man (1963) #338",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/6748",
                  name: "The Amazing Spider-Man (1963) #339",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/6758",
                  name: "The Amazing Spider-Man (1963) #348",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/6824",
                  name: "The Amazing Spider-Man (1963) #407",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/24419",
                  name: "Amazing Spider-Man (1999) #612",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/28710",
                  name: "Amazing Spider-Man (1999) #612 (VARIANT)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/29555",
                  name: "Amazing Spider-Man (1999) #612 (GRANOV 50/50 COVER)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/24422",
                  name: "Amazing Spider-Man (1999) #615",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/29546",
                  name: "Amazing Spider-Man (1999) #615 (Variant Edition)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/24423",
                  name: "Amazing Spider-Man (1999) #616",
                },
              ],
              returned: 20,
            },
            series: {
              available: 47,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009558/series",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/454",
                  name: "Amazing Spider-Man (1999 - 2013)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/2984",
                  name: "Amazing Spider-Man Annual (1964 - 2018)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/354", name: "Avengers (1998 - 2004)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/1991", name: "Avengers (1963 - 1996)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/1340", name: "Avengers Assemble (2004)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/449", name: "Daredevil (1998 - 2011)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/18",
                  name: "Daredevil Visionaries: Kevin Smith (Daredevil Vol. I: Guardian Devil) (1999)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/378", name: "Earth X (1999)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/1806", name: "Earth X (New (2006)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/2121",
                  name: "Fantastic Four (1961 - 1998)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/2435",
                  name: "Fantastic Four Omnibus Vol. 2 (2007)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1458",
                  name: "FANTASTIC FOUR VISIONARIES: GEORGE PEREZ VOL. 1 TPB (2005)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/877",
                  name: "Friendly Neighborhood Spider-Man (2005 - 2007)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/3895",
                  name: "Friendly Neighborhood Spider-Man Annual (2007)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/1505", name: "Giant-Size Marvel (2005)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/3732",
                  name: "Giant-Size Super-Heroes (1974)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/7859",
                  name: "House of M: Masters of Evil (2009 - 2010)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/782", name: "Identity Disc (2004)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/1333", name: "Identity Disc (2004)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/2021",
                  name: "Incredible Hulk (1962 - 1999)",
                },
              ],
              returned: 20,
            },
            stories: {
              available: 150,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009558/stories",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/3794",
                  name: "IDENTITY DISC (2004) #3",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/3796",
                  name: "IDENTITY DISC (2004) #2",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/3798",
                  name: "IDENTITY DISC (2004) #1",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/3800",
                  name: "IDENTITY DISC (2004) #4",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/3802",
                  name: "IDENTITY DISC (2004) #5",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/4662",
                  name: "Friendly Neighborhood Spider-Man (2005) #5",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/4663",
                  name: "1 of 1 -",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/6053",
                  name: "Marvel 1602: Fantastick Four (2006) #1",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/6054",
                  name: "Interior #6054",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/6059",
                  name: "Marvel 1602: Fantastick Four (2006) #4",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/6060",
                  name: "4 of 5 - Fantastick Four - 5XLS",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/6062",
                  name: "5 of 5 - Fantastick Four - 5XLS",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/7847",
                  name: "Marvel 1602: Fantastick Four (2006) #5",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/8726",
                  name: "1 of 1 Sandman: Year One",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/12475",
                  name: "FANTASTIC FOUR (1961) #130",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/12513",
                  name: "The Frightful Four Strike Again!",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/12514",
                  name: "War on the Thirty-Sixth Floor!",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/12577",
                  name: "Fantastic Four (1961) #176",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/12578",
                  name: "Improbable As It May Seem--The Impossible Man Is Back In Town!",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/12580",
                  name: "Fantastic Four (1961) #177",
                  type: "cover",
                },
              ],
              returned: 20,
            },
            events: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009558/events",
              items: [],
              returned: 0,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1009558/sandman?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url:
                  "http://marvel.com/universe/Sandman_%28William_Baker%29?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1009558/sandman?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1010711,
            name: "Santa Claus",
            description: "",
            modified: "1969-12-31T19:00:00-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1010711",
            comics: {
              available: 2,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010711/comics",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/5713", name: "Blade (2006) #4" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/21089", name: "Howard the Duck (1979) #3" },
              ],
              returned: 2,
            },
            series: {
              available: 2,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010711/series",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/series/1123", name: "Blade (2006 - 2007)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/4766",
                  name: "Howard the Duck (1979 - 1981)",
                },
              ],
              returned: 2,
            },
            stories: {
              available: 4,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010711/stories",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/stories/6178", name: "Cover #6178", type: "cover" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/46587",
                  name: "Cover #46587",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/46589",
                  name: "a Christmas for Carol!",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/46590",
                  name: "Duck Soup",
                  type: "text article",
                },
              ],
              returned: 4,
            },
            events: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010711/events",
              items: [],
              returned: 0,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1010711/santa_claus?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1010711/santa_claus?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1009559,
            name: "Saracen (Muzzafar Lambert)",
            description: "",
            modified: "1969-12-31T19:00:00-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1009559",
            comics: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009559/comics",
              items: [],
              returned: 0,
            },
            series: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009559/series",
              items: [],
              returned: 0,
            },
            stories: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009559/stories",
              items: [],
              returned: 0,
            },
            events: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009559/events",
              items: [],
              returned: 0,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/characters/1994/saracen?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1009559/saracen_muzzafar_lambert?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1009560,
            name: "Sasquatch (Walter Langkowski)",
            description: "",
            modified: "2011-09-08T13:22:13-0400",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1009560",
            comics: {
              available: 91,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009560/comics",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/38570", name: "Alpha Flight (2011) #1" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/393", name: "Alpha Flight (2004) #1" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/12637", name: "Alpha Flight (1983) #1" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/39819",
                  name: "Alpha Flight (2011) #1 (Eaglesham Variant)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/12679", name: "Alpha Flight (1983) #2" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/38569", name: "Alpha Flight (2011) #2" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/456", name: "Alpha Flight (2004) #2" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/39818",
                  name: "Alpha Flight (2011) #2 (Eaglesham Variant)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/38565", name: "Alpha Flight (2011) #3" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/12690", name: "Alpha Flight (1983) #3" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/616", name: "Alpha Flight (2004) #3" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/39820",
                  name: "Alpha Flight (2011) #3 (Eaglesham Variant)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/38567", name: "Alpha Flight (2011) #4" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/677", name: "Alpha Flight (2004) #4" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/12701", name: "Alpha Flight (1983) #4" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/613", name: "Alpha Flight (2004) #5" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/572", name: "Alpha Flight (2004) #6" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/790", name: "Alpha Flight (2004) #7" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/866", name: "Alpha Flight (2004) #8" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/12756", name: "Alpha Flight (1983) #9" },
              ],
              returned: 20,
            },
            series: {
              available: 32,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009560/series",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/series/13907", name: "Alpha Flight (2011 - 2012)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/719", name: "Alpha Flight (2004 - 2005)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2116", name: "Alpha Flight (1983 - 1994)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2115", name: "Black Panther (1998 - 2003)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2005", name: "Deadpool (1997 - 2002)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/4605",
                  name: "Deadpool Classic Vol. 1 (2008)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/7713",
                  name: "Deadpool Vol. 1: Secret Invasion (2009 - Present)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/3741",
                  name: "Doctor Strange, Sorcerer Supreme (1988 - 1996)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/378", name: "Earth X (1999)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/1806", name: "Earth X (New (2006)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/479", name: "Exiles (2001 - 2008)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/154",
                  name: "Exiles Vol. 3: Out of Time (2003)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/116",
                  name: "Exiles Vol. II: A World Apart (1999)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/2121",
                  name: "Fantastic Four (1961 - 1998)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/823", name: "G.L.a. (2005)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/3374", name: "Hulk (2008 - 2012)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/24278",
                  name: "Immortal Hulk (2018 - Present)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/2021",
                  name: "Incredible Hulk (1962 - 1999)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/3289", name: "Infinity War (2005)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1440",
                  name: "Marvel Masterworks: The Uncanny X-Men Vol. 5 (2005)",
                },
              ],
              returned: 20,
            },
            stories: {
              available: 110,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009560/stories",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2921",
                  name: "Alpha Flight (2004) #9",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2922",
                  name: "1 of 4 - Days of Future Present Past Participle",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2923",
                  name: "Alpha Flight (2004) #1",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2924",
                  name: "Interior #2924",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2925",
                  name: "Alpha Flight (2004) #2",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2926",
                  name: "Interior #2926",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2927",
                  name: "Alpha Flight (2004) #6",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2928",
                  name: "Interior #2928",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2929",
                  name: "Alpha Flight (2004) #5",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2930",
                  name: "Interior #2930",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2931",
                  name: "Alpha Flight (2004) #3",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2932",
                  name: "Interior #2932",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2933",
                  name: "Alpha Flight (2004) #4",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2934",
                  name: "Interior #2934",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2935",
                  name: "Alpha Flight (2004) #7",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2936",
                  name:
                    '"WAXING POETIC" PART 1 (OF 2) Is the All-New, All-Different Alpha Flight really disbanding after only seven issues? Not if the r',
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2937",
                  name: "Alpha Flight (2004) #8",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2938",
                  name:
                    '"WAXING POETIC" PART 2 (OF 2) Montreal faces its gravest hour as it falls under attack by…wax statues of the entire Marvel Unive',
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2939",
                  name: "Alpha Flight (2004) #10",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/2940",
                  name: "2 of 4 - Days of Future Present Past Participle",
                  type: "interiorStory",
                },
              ],
              returned: 20,
            },
            events: {
              available: 3,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009560/events",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/events/302", name: "Fear Itself" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/29", name: "Infinity War" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/269", name: "Secret Invasion" },
              ],
              returned: 3,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1009560/sasquatch_walter_langkowski?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url:
                  "http://marvel.com/universe/Sasquatch_%28Walter_Langkowski%29?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1009560/sasquatch_walter_langkowski?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1011035,
            name: "Satana",
            description: "",
            modified: "2011-08-11T12:02:11-0400",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/9/a0/4ce5a46882aa9", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1011035",
            comics: {
              available: 33,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011035/comics",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/40771", name: "Dark Avengers (2012) #176" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/40776", name: "Dark Avengers (2012) #177" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/40780", name: "Dark Avengers (2012) #178" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/40773", name: "Dark Avengers (2012) #179" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/40774", name: "Dark Avengers (2012) #180" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/40778", name: "Dark Avengers (2012) #181" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/40787", name: "Dark Avengers (2012) #182" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/40786", name: "Dark Avengers (2012) #183" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/30856",
                  name: "Deadpool Team-Up Vol. 2: Special Relationship (Trade Paperback)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/55427", name: "Doctor Strange (2015) #13" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/55428", name: "Doctor Strange (2015) #14" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/5233",
                  name: "Essential Marvel Horror Vol. 1 (Trade Paperback)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/39012",
                  name: "Heroes for Hire (2010) #2 (2nd Printing Variant)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/64210",
                  name: "Heroes for Hire by Abnett & Lanning: The Complete Collection (Trade Paperback)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/16654",
                  name: "Legion of Monsters (Hardcover)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/15883",
                  name: "Legion of Monsters: Satana (2007) #1",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/64820",
                  name: "Marvel Horror: The Magazine Collection (Trade Paperback)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/10214", name: "Marvel Premiere (1972) #27" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/19779", name: "Marvel Preview (1977) #7" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/64734",
                  name: "Spirits of Vengeance (2017) #1",
                },
              ],
              returned: 20,
            },
            series: {
              available: 15,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011035/series",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/series/789", name: "Dark Avengers (2012 - 2013)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/10144",
                  name: "Deadpool Team-Up Vol. 2: Special Relationship (2011)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/20457",
                  name: "Doctor Strange (2015 - 2018)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1765",
                  name: "Essential Marvel Horror Vol. 1 (2006)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/13330",
                  name: "Heroes for Hire (2010 - 2011)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/23403",
                  name: "Heroes for Hire by Abnett & Lanning: The Complete Collection (2017)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2961", name: "Legion of Monsters (2007)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/2412",
                  name: "Legion of Monsters: Satana (2007)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/23606",
                  name: "Marvel Horror: The Magazine Collection (2017)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/2045",
                  name: "Marvel Premiere (1972 - 1981)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/3718",
                  name: "Marvel Preview (1977 - 1981)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/23587",
                  name: "Spirits of Vengeance (2017)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/18527", name: "Thunderbolts (2006 - 2012)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2089", name: "Vampire Tales (1973 - 1975)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/1035", name: "X-Factor (2005 - 2013)" },
              ],
              returned: 15,
            },
            stories: {
              available: 46,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011035/stories",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/stories/19928", name: "Deathcry!", type: "cover" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/19929",
                  name: "Deathsong",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/19930",
                  name: "Satana, the Devil's Daughter",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/20386",
                  name: "[Introducing Satana]",
                  type: "",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/20390",
                  name: "The Kiss of Death",
                  type: "",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/stories/32438", name: "1 of 1", type: "cover" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/42071",
                  name: "Cover #42071",
                  type: "cover",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/stories/42072", name: "pin-up", type: "" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/42073",
                  name: "textpiece: Why A Devil's Daughter...?",
                  type: "",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/42074",
                  name: "Damnation Waltz (Part1)",
                  type: "",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/42075",
                  name: "The Devil's Symphony (Part 2)",
                  type: "",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/42076",
                  name: "textpiece: From the Devil, A Daughter",
                  type: "",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/78867",
                  name: "Thunderbolts (2006) #156",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/80618",
                  name: "DEADPOOL TEAM-UP VOL. 2: SPECIAL RELATIONSHIP TPB",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/82690",
                  name: "Interior #82690",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/88547",
                  name: "Heroes for Hire #2 2nd Printing",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/92366",
                  name: "Dark Avengers (2012) #176",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/92367",
                  name: "Interior #92367",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/92370",
                  name: "Dark Avengers (2012) #179",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/92371",
                  name: "Interior #92371",
                  type: "interiorStory",
                },
              ],
              returned: 20,
            },
            events: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011035/events",
              items: [],
              returned: 0,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/characters/1997/satana?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url:
                  "http://marvel.com/universe/satana?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1011035/satana?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1009561,
            name: "Sauron",
            description: "",
            modified: "1969-12-31T19:00:00-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/3/00/4c003c3d85554", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1009561",
            comics: {
              available: 54,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009561/comics",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/20575", name: "Classic X-Men (1986) #20" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/8514", name: "Deadpool (1997) #57" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/8518", name: "Deadpool (1997) #60" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/19793", name: "Marvel Fanfare (1982) #2" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/19804", name: "Marvel Fanfare (1982) #3" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/19815", name: "Marvel Fanfare (1982) #4" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/4092",
                  name: "Marvel Masterworks: The X-Men Vol.6 (Hardcover)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/1720", name: "New Avengers (2004) #5" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/1829", name: "New Avengers (2004) #6" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/3345",
                  name: "New Avengers Vol. 1: Breakout (Trade Paperback)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/26048", name: "New Mutants (2009) #10" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/12511", name: "Uncanny X-Men (1963) #60" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/12512", name: "Uncanny X-Men (1963) #61" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/12513", name: "Uncanny X-Men (1963) #62" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/12431", name: "Uncanny X-Men (1963) #115" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/13894", name: "Uncanny X-Men (1963) #353" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/13895", name: "Uncanny X-Men (1963) #354" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/13896", name: "Uncanny X-Men (1963) #355" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/13897", name: "Uncanny X-Men (1963) #356" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/4100",
                  name: "Uncanny X-Men Omnibus Vol. 1 (Hardcover)",
                },
              ],
              returned: 20,
            },
            series: {
              available: 27,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009561/series",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/series/3751", name: "Classic X-Men (1986 - 1990)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2005", name: "Deadpool (1997 - 2002)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/3719",
                  name: "Marvel Fanfare (1982 - 1992)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1689",
                  name: "Marvel Masterworks: The X-Men Vol.6 (2006)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/753", name: "New Avengers (2004 - 2010)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1260",
                  name: "New Avengers Vol. 1: Breakout (2006)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/7455", name: "New Mutants (2009 - 2012)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2258", name: "Uncanny X-Men (1963 - 2011)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1723",
                  name: "Uncanny X-Men Omnibus Vol. 1 (2006)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/543", name: "Weapon X (2002 - 2004)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/163", name: "Weapon X Vol. 1 (2003)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/138", name: "Weapon X Vol. I (1999)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/3652",
                  name: "Weapon X: The Draft - Sauron (2002)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/3649",
                  name: "Weapon X: The Draft - Zero (2002)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2262", name: "Wolverine (1988 - 2003)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2098", name: "X-Factor (1986 - 1998)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/2941",
                  name: "X-Factor Visionaries: Peter David Vol. 3 (2007)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/3633", name: "X-Force (1991 - 2004)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/14480",
                  name: "X-Force: Under the Gun (2011 - Present)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/14479",
                  name: "X-Force: Under the Gun (2011 - Present)",
                },
              ],
              returned: 20,
            },
            stories: {
              available: 57,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009561/stories",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/3445",
                  name: "5 of 6 - Breakout!",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/3455",
                  name: "6 of 6 - Breakout!",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/15412",
                  name: "Enter: Sauron!",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/15599",
                  name: "Uncanny X-Men (1963) #60",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/15602",
                  name: "Uncanny X-Men (1963) #61",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/15603",
                  name: "Monsters Also Weep!",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/15604",
                  name: "Uncanny X-Men (1963) #62",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/15605",
                  name: "Strangers...In a Savage Land!",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/22358",
                  name: "Sittin' by the Dock of the Bay",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/28236",
                  name: "Blackbirds",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/28237",
                  name: "The Uncanny X-Men Vs. Sauron",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/28238",
                  name: "Meet The Uncanny X-Men",
                  type: "recap",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/28239",
                  name: "Prehistory",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/28242",
                  name: "North & South",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/28245",
                  name: "Reunion",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/28898",
                  name: "Cover #28898",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/28899",
                  name: "Induction in the Savage Land",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/28902",
                  name: "Cover #28902",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/28903",
                  name: "Tooth and Nail",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/28904",
                  name: "Savage Finale !",
                  type: "cover",
                },
              ],
              returned: 20,
            },
            events: {
              available: 1,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1009561/events",
              items: [{ resourceURI: "http://gateway.marvel.com/v1/public/events/227", name: "Age of Apocalypse" }],
              returned: 1,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1009561/sauron?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url:
                  "http://marvel.com/universe/Sauron?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1009561/sauron?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1011048,
            name: "Scalphunter",
            description: "",
            modified: "1969-12-31T19:00:00-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/9/10/4ce5a473b81b3", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1011048",
            comics: {
              available: 10,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011048/comics",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/29932",
                  name: "Deadpool & Cable (2010) #25",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/32898",
                  name: "Deadpool & Cable (2010) #25 (VARIANT)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/58988",
                  name: "Deadpool V Gambit (2016) #4",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/13781", name: "Uncanny X-Men (1963) #240" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/26969", name: "Uncanny X-Men (1963) #516" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/26970", name: "Uncanny X-Men (1963) #517" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/18186", name: "X-Man (1995) #18" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/18187", name: "X-Man (1995) #19" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/3416",
                  name: "X-Men and Power Pack (2005) #4",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/4060",
                  name: "X-Men and Power Pack: The Power of X (Digest)",
                },
              ],
              returned: 10,
            },
            series: {
              available: 6,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011048/series",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/series/9746", name: "Deadpool & Cable (2010)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/21488", name: "Deadpool V Gambit (2016)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2258", name: "Uncanny X-Men (1963 - 2011)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/3643", name: "X-Man (1995 - 2000)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/970",
                  name: "X-Men and Power Pack (2005 - 2006)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1634",
                  name: "X-Men and Power Pack: The Power of X (2006)",
                },
              ],
              returned: 6,
            },
            stories: {
              available: 10,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011048/stories",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/5469",
                  name: "X-Men and Power Pack (2005) #4",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/5470",
                  name: "4 of 4 - 4XLS",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/27990",
                  name: "Inferno, Part the First: Strike the Match",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/59251",
                  name: "Interior #59251",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/59253",
                  name: "Interior #59253",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/64977",
                  name: "Deadpool and Cable (2010) #25",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/64978",
                  name: "Interior #64978",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/67768",
                  name: "X-Man (1995) #18",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/67769",
                  name: "X-Man (1995) #19",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/128522",
                  name: "cover from Deadpool Vs. Gambit (2016) #4",
                  type: "cover",
                },
              ],
              returned: 10,
            },
            events: {
              available: 2,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011048/events",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/events/252", name: "Inferno" },
                { resourceURI: "http://gateway.marvel.com/v1/public/events/154", name: "Onslaught" },
              ],
              returned: 2,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1011048/scalphunter?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url:
                  "http://marvel.com/universe/Scalphunter?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1011048/scalphunter?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1010861,
            name: "Scarecrow (Ebenezer Laughton)",
            description:
              "Realizing the criminal potential of his abilities, Umberto stole a flock of trained birds from a fellow performer to assist him in his new costumed criminal guise as the Scarecrow.",
            modified: "1969-12-31T19:00:00-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1010861",
            comics: {
              available: 13,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010861/comics",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/17550", name: "Avengers (1998) #64" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/1170",
                  name: "Avengers Vol. 2: Red Zone (Trade Paperback)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/1214",
                  name: "Avengers Vol. II: Red Zone (Trade Paperback)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/7661", name: "Captain America (1968) #280" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/20757", name: "Dead of Night (1973) #11" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/20199",
                  name: "Doctor Strange, Sorcerer Supreme (1988) #38",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/65331",
                  name: "Doctor Strange: Lords of Fear (Trade Paperback)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/16654",
                  name: "Legion of Monsters (Hardcover)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/19743",
                  name: "Marvel Spotlight (1971) #26",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/19485",
                  name: "Marvel Two-in-One (1974) #18",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/5079",
                  name: "Sensational Spider-Man (2006) #30",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/12469", name: "Uncanny X-Men (1963) #22" },
                { resourceURI: "http://gateway.marvel.com/v1/public/comics/12470", name: "Uncanny X-Men (1963) #23" },
              ],
              returned: 13,
            },
            series: {
              available: 12,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010861/series",
              items: [
                { resourceURI: "http://gateway.marvel.com/v1/public/series/354", name: "Avengers (1998 - 2004)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/227",
                  name: "Avengers Vol. 2: Red Zone (2003)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/271",
                  name: "Avengers Vol. II: Red Zone (2003)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1996",
                  name: "Captain America (1968 - 1996)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/3898", name: "Dead of Night (1973 - 1975)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/3741",
                  name: "Doctor Strange, Sorcerer Supreme (1988 - 1996)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/23782",
                  name: "Doctor Strange: Lords of Fear (2017)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2961", name: "Legion of Monsters (2007)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/3717",
                  name: "Marvel Spotlight (1971 - 1977)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/3715",
                  name: "Marvel Two-in-One (1974 - 1983)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/722",
                  name: "Sensational Spider-Man (2006 - 2007)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/2258", name: "Uncanny X-Men (1963 - 2011)" },
              ],
              returned: 12,
            },
            stories: {
              available: 13,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010861/stories",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/3011",
                  name: "SENSATIONAL SPIDER-MAN (2006) #30",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/15491",
                  name: "Uncanny X-Men (1963) #22",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/15493",
                  name: "Uncanny X-Men (1963) #23",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/17824",
                  name: "Cover #17824",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/34335",
                  name: "All About Iron Man",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/37473",
                  name: "Sight Unseen",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/41327",
                  name: "Cover #41327",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/41856",
                  name: "Cover #41856",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/41857",
                  name: "Death Waters of the River Styx",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/43276",
                  name: "The Fury of the Fear Lords - The Great Fear Part 1 of 3",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/44512",
                  name: "Fires of Rebirth...Fires of Death!",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/44513",
                  name: "Enter:  The Scarecrow",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/141768",
                  name: "cover from DOCTOR STRANGE: LORDS OF FEAR TPB (2017) #1",
                  type: "cover",
                },
              ],
              returned: 13,
            },
            events: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1010861/events",
              items: [],
              returned: 0,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1010861/scarecrow_ebenezer_laughton?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url:
                  "http://marvel.com/universe/Scarecrow_(Ebenezer_Laughton)?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1010861/scarecrow_ebenezer_laughton?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1011197,
            name: "Scarlet Spider (Ben Reilly)",
            description: "",
            modified: "2012-01-31T11:54:31-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/9/20/4ce5a531089da", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1011197",
            comics: {
              available: 71,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011197/comics",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/62304",
                  name: "Spider-Man: 101 Ways to End the Clone Saga (1997) #1",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/6809",
                  name: "The Amazing Spider-Man (1963) #394",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/6814",
                  name: "The Amazing Spider-Man (1963) #399",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/6817",
                  name: "The Amazing Spider-Man (1963) #400",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/6818",
                  name: "The Amazing Spider-Man (1963) #401",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/6819",
                  name: "The Amazing Spider-Man (1963) #402",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/6821",
                  name: "The Amazing Spider-Man (1963) #404",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/6822",
                  name: "The Amazing Spider-Man (1963) #405",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/6823",
                  name: "The Amazing Spider-Man (1963) #406",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/24415",
                  name: "Amazing Spider-Man (1999) #608",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/28542",
                  name: "Amazing Spider-Man (1999) #608 (DJURDJEVIC 70TH ANNIVERSARY VARIANT)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/59436",
                  name: "Amazing Spider-Man: Worldwide Vol. 5 (Trade Paperback)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/62726",
                  name: "Ben Reilly: Scarlet Spider (2017) #1",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/63053",
                  name: "Ben Reilly: Scarlet Spider (2017) #2",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/63055",
                  name: "Ben Reilly: Scarlet Spider (2017) #3",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/63225",
                  name: "Ben Reilly: Scarlet Spider (2017) #4",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/63865",
                  name: "Ben Reilly: Scarlet Spider (2017) #5",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/64242",
                  name: "Ben Reilly: Scarlet Spider (2017) #6",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/64518",
                  name: "Ben Reilly: Scarlet Spider (2017) #7",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/64608",
                  name: "Ben Reilly: Scarlet Spider (2017) #8",
                },
              ],
              returned: 20,
            },
            series: {
              available: 27,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011197/series",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/454",
                  name: "Amazing Spider-Man (1999 - 2013)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/21654",
                  name: "Amazing Spider-Man: Worldwide Vol. 5 (2017)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/23021",
                  name: "Ben Reilly: Scarlet Spider (2017 - Present)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/23934",
                  name: "Ben Reilly: Scarlet Spider Vol. 1 - Back In the Hood (2017)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/24211",
                  name: "Ben Reilly: Scarlet Spider Vol. 2 - Death's Sting (2018)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/24479",
                  name: "Ben Reilly: Scarlet Spider Vol. 3 - The Slingers Return (2018)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/26134",
                  name: "Ben Reilly: Scarlet Spider Vol. 5 - Deal With the Devil (2019)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/25782",
                  name: "Doctor Strange: Damnation (2018)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/24016",
                  name: "Doctor Strange: Damnation (2018)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/7077", name: "Green Goblin (1995 - 1996)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1866",
                  name: "Mighty Avengers (2007 - 2010)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/2271",
                  name: "Peter Parker, the Spectacular Spider-Man (1976 - 1998)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/15298",
                  name: "Scarlet Spider (2011 - 2012)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/22893",
                  name: "Spider-Man: 101 Ways to End the Clone Saga (1997)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/25675",
                  name: "Spider-Man: Ben Reilly Omnibus Vol. 1 (2019)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/8860",
                  name: "Spider-Man: The Clone Saga (2009 - 2010)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/13518",
                  name: "Spider-Man: The Complete Ben Reilly Epic Book 1 TPB (2010 - Present)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/22344",
                  name: "Spider-Man: The Complete Clone Saga Epic Book 3 (2017)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/22345",
                  name: "Spider-Man: The Complete Clone Saga Epic Book 4 (2017)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/22346",
                  name: "Spider-Man: The Complete Clone Saga Epic Book 5 (2017)",
                },
              ],
              returned: 20,
            },
            stories: {
              available: 71,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011197/stories",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/14242",
                  name: "Amazing Spider-Man (1963) #394",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/29858",
                  name: "Peter Parker, The Spectacular Spider-Man (1976) #218",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/29874",
                  name: "Peter Parker, The Spectacular Spider-Man (1976) #222",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/29876",
                  name: "Peter Parker, The Spectacular Spider-Man (1976) #223",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/29885",
                  name: "Peter Parker, The Spectacular Spider-Man (1976) #224",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/36886",
                  name: "Venom Bomb 2 of 5",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/54188",
                  name: "Amazing Spider-Man (1999) #608 - Int",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/60831",
                  name: "Cover #60831",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/60833",
                  name: "Cover #60833",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/60835",
                  name: "Cover #60835",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/60837",
                  name: "Cover #60837",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/60839",
                  name: "Cover #60839",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/60841",
                  name: "Cover #60841",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/62308",
                  name: "Amazing Spider-Man (1999) #608, Djurdjevic 70th Anniversary Variant - Int",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/66260",
                  name: "Amazing Spider-Man (1963) #399",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/66263",
                  name: "Amazing Spider-Man (1963) #400",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/66264",
                  name: "Amazing Spider-Man (1963) #401",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/66265",
                  name: "Amazing Spider-Man (1963) #402",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/66267",
                  name: "Amazing Spider-Man (1963) #404",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/66268",
                  name: "Amazing Spider-Man (1963) #405",
                  type: "cover",
                },
              ],
              returned: 20,
            },
            events: {
              available: 0,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011197/events",
              items: [],
              returned: 0,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/characters/2014/scarlet_spider?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url:
                  "http://marvel.com/universe/Scarlet_Spider_(Ben_Reilly)?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1011197/scarlet_spider_ben_reilly?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
          {
            id: 1011426,
            name: "Scarlet Spider (Kaine)",
            description: "",
            modified: "2012-12-14T11:49:34-0500",
            thumbnail: { path: "http://i.annihil.us/u/prod/marvel/i/mg/6/b0/4ed7bd3756650", extension: "jpg" },
            resourceURI: "http://gateway.marvel.com/v1/public/characters/1011426",
            comics: {
              available: 83,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011426/comics",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/62304",
                  name: "Spider-Man: 101 Ways to End the Clone Saga (1997) #1",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/55319",
                  name: "The Amazing Spider-Man (2015) #21",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/6812",
                  name: "The Amazing Spider-Man (1963) #397",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/6813",
                  name: "The Amazing Spider-Man (1963) #398",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/6814",
                  name: "The Amazing Spider-Man (1963) #399",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/6817",
                  name: "The Amazing Spider-Man (1963) #400",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/6818",
                  name: "The Amazing Spider-Man (1963) #401",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/6820",
                  name: "The Amazing Spider-Man (1963) #403",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/6821",
                  name: "The Amazing Spider-Man (1963) #404",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/6826",
                  name: "The Amazing Spider-Man (1963) #409",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/24415",
                  name: "Amazing Spider-Man (1999) #608",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/28542",
                  name: "Amazing Spider-Man (1999) #608 (DJURDJEVIC 70TH ANNIVERSARY VARIANT)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/24416",
                  name: "Amazing Spider-Man (1999) #609",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/24417",
                  name: "Amazing Spider-Man (1999) #610",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/30306",
                  name: "Amazing Spider-Man (1999) #631",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/33325",
                  name: "Amazing Spider-Man (1999) #631 (HEROIC AGE VARIANT)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/30309",
                  name: "Amazing Spider-Man (1999) #634",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/32536",
                  name: "Amazing Spider-Man (1999) #634 (VILLAIN VARIANT)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/32537",
                  name: "Amazing Spider-Man (1999) #634 (50/50 VARIANT)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/comics/37039",
                  name: "Amazing Spider-Man (1999) #634 (2ND PRINTING VARIANT)",
                },
              ],
              returned: 20,
            },
            series: {
              available: 21,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011426/series",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/454",
                  name: "Amazing Spider-Man (1999 - 2013)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/21654",
                  name: "Amazing Spider-Man: Worldwide Vol. 5 (2017)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/23021",
                  name: "Ben Reilly: Scarlet Spider (2017 - Present)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/23934",
                  name: "Ben Reilly: Scarlet Spider Vol. 1 - Back In the Hood (2017)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/24211",
                  name: "Ben Reilly: Scarlet Spider Vol. 2 - Death's Sting (2018)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/16413",
                  name: "Minimum Carnage: Alpha (2012)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/16412",
                  name: "Minimum Carnage: Omega (2012)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/2271",
                  name: "Peter Parker, the Spectacular Spider-Man (1976 - 1998)",
                },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/15297", name: "Point One (2011)" },
                { resourceURI: "http://gateway.marvel.com/v1/public/series/22535", name: "Prowler (2016 - Present)" },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/22536",
                  name: "Prowler: The Clone Conspiracy (2017)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/15298",
                  name: "Scarlet Spider (2011 - 2012)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/22893",
                  name: "Spider-Man: 101 Ways to End the Clone Saga (1997)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/23874",
                  name: "Spider-Man: Clone Saga Omnibus Vol. 2 (2017)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/22889",
                  name: "Spider-Man: Redemption (1996)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/8860",
                  name: "Spider-Man: The Clone Saga (2009 - 2010)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/22345",
                  name: "Spider-Man: The Complete Clone Saga Epic Book 4 (2017)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/10439",
                  name: "SPIDER-MAN: THE GAUNTLET VOL. 5 - LIZARD  (2011)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/1987",
                  name: "The Amazing Spider-Man (1963 - 1998)",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/series/20432",
                  name: "The Amazing Spider-Man (2015 - 2018)",
                },
              ],
              returned: 20,
            },
            stories: {
              available: 89,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011426/stories",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/29866",
                  name: "Peter Parker, The Spectacular Spider-Man (1976) #220",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/29870",
                  name: "Peter Parker, The Spectacular Spider-Man (1976) #221",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/29874",
                  name: "Peter Parker, The Spectacular Spider-Man (1976) #222",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/29876",
                  name: "Peter Parker, The Spectacular Spider-Man (1976) #223",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/29885",
                  name: "Peter Parker, The Spectacular Spider-Man (1976) #224",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/54187",
                  name: "Amazing Spider-Man (1999) #608",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/54188",
                  name: "Amazing Spider-Man (1999) #608 - Int",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/54189",
                  name: "Amazing Spider-Man (1999) #609",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/54190",
                  name: "Amazing Spider-Man (1999) #609 - Int",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/54191",
                  name: "Amazing Spider-Man (1999) #610",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/54192",
                  name: "Amazing Spider-Man (1999) #610 - Int",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/60835",
                  name: "Cover #60835",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/60837",
                  name: "Cover #60837",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/62308",
                  name: "Amazing Spider-Man (1999) #608, Djurdjevic 70th Anniversary Variant - Int",
                  type: "interiorStory",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/66258",
                  name: "Amazing Spider-Man (1963) #397",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/66259",
                  name: "Amazing Spider-Man (1963) #398",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/66260",
                  name: "Amazing Spider-Man (1963) #399",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/66263",
                  name: "Amazing Spider-Man (1963) #400",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/66264",
                  name: "Amazing Spider-Man (1963) #401",
                  type: "cover",
                },
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/stories/66266",
                  name: "Amazing Spider-Man (1963) #403",
                  type: "cover",
                },
              ],
              returned: 20,
            },
            events: {
              available: 1,
              collectionURI: "http://gateway.marvel.com/v1/public/characters/1011426/events",
              items: [
                {
                  resourceURI: "http://gateway.marvel.com/v1/public/events/332",
                  name: "Dead No More: The Clone Conspiracy",
                },
              ],
              returned: 1,
            },
            urls: [
              {
                type: "detail",
                url:
                  "http://marvel.com/comics/characters/1011426/scarlet_spider_kaine?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "wiki",
                url: "http://marvel.com/universe/Kaine?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
              {
                type: "comiclink",
                url:
                  "http://marvel.com/comics/characters/1011426/scarlet_spider_kaine?utm_campaign=apiRef&utm_source=ac7726775d7f6e56add4f57ed5cd9a6b",
              },
            ],
          },
        ],
      },
    },
  ];
}
