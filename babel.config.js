module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module:react-native-dotenv",
      {
        moduleName: "@env",
        path: ".env",
        allowlist: null,
        blacklist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
    [
      "@babel/plugin-transform-class-properties",
      {
        loose: false,
      },
    ],
    [
      "@babel/plugin-transform-private-methods",
      {
        loose: false,
      },
    ],
    [
      "@babel/plugin-transform-private-property-in-object",
      {
        loose: false,
      },
    ],
  ],
};
