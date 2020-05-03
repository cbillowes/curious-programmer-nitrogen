module.exports = {
  site: {
    title: `Curious Programmer`,
  },
  theme: {
    colors: {
      darkest: "#181c1f",
      dark: "#1f2227",
      accentFirst: "#c6c91c",
      accentSecond: "#097acf",
      accentThird: "#9a9c16",
      faded: "#666",
      light: "#bfcbd2",
      lightest: "#ffffff",
    },
    buttons: {
      hover: "#202528",
      active: {
        static: "#c6c91c",
        hover: "#202528",
      },
    },
    fonts: {
      sans: "'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif",
      serif: "'Crimson Text','Times New Roman',serif",
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
      name: "Credits & Resources",
      to: "/credits",
    },
    {
      name: "License",
      to: "/license",
    },
    {
      name: "Privacy Policy",
      to: "https://www.iubenda.com/privacy-policy/7895922",
      external: true,
    },
    {
      name: "GitHub",
      to: "https://github.com/cbillowes",
      external: true,
    },
    {
      name: "LinkedIn",
      to: "https://www.linkedin.com/in/cbouwer/",
      external: true,
    },
  ],
}
