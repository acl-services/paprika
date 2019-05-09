export default {
  src: "../packages",
  public: "/assets",
  files: "**/*.mdx",
  title: "Paprika",
  port: 4000,
  description: "Paprika library",
  htmlContext: {
    favicon: "assests/favicon.ico",
  },
  themeConfig: {
    colors: {
      primary: "#785CBA",
      gray: "#110717",
      background: "linear-gradient(-180deg,#FAFAFB 0,#EFEFF1 438px)",
    },
    styles: {
      body: `
        @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,400,500,600');
        font-family: 'IBM Plex Sans', sans;
        font-size: 16px;
        line-height: 1.6;

        h1, h2, h3, h4, h5, h6 {
          font-family: 'IBM Plex Sans', sans !important;
        }

        ul {
          padding: 16px;

          li {
            line-height: 1.4;
            margin-bottom: 8px;
          }
        }

      `,
    },
  },
  menu: [
    "Getting started",
    {
      name: "Listbox",
      menu: ["Intro", "Single", "Multiple", "Props", "Accessibility", "Examples"],
    },
  ],
};
