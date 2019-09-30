module.exports = {
  theme: {
    colors: {
      darkest: "#141719",
      dark: "#181c1f",
      accentFirst: "#c6c91c",
      accentSecond: "#097acf",
      accentThird: "#9a9c16",
      light: "#bfcbd2",
      lightest: "#ffffff",
    },
    buttons: {
      hover: "#202528",
      active: {
        color: "#202528",
        hover: "#202528",
      },
    },
    fonts: {
      heading: "Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif",
      button: "Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif",
      text: "Crimson Text,Times New Roman,serif",
      navigation: "Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif",
    },
    transitions: {
      transition: ".3s",
      property: ".3s",
      duration: ".3s",
      timing: "ease",
      delay: "0s",
    },
  },
  navigation: [
    {
      name: "Blog",
      to: "/blog",
    },
    {
      name: "About",
      to: "/about",
    },
    {
      name: "Archives",
      to: "/archives",
    },
    {
      name: "Tags",
      to: "/tags",
    },
    {
      name: "Credits",
      to: "/credits",
    },
    {
      name: "Privacy Policy",
      to: "/privacy-policy",
    },
    {
      name: "License",
      to: "/license",
    },
    {
      name: "Github",
      to: "https://github.com/cbillowes",
      external: true,
    },
  ],
};
