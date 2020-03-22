//https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
process.env.TZ = `EG`

module.exports = {
  verbose: true,
  testMatch: [
    `**/__tests__/**/*.(test|spec).[jt]s?(x)`,
    `!**/__tests__/_helpers.js`
  ],
  cacheDirectory: `<rootDir>/coverage`,
  transform: {
    "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [
    `node_modules`,
    `.cache`,
    `public`,
    `.test.js.snap`,
    `.stories.js`
  ],
  coveragePathIgnorePatterns: [
    `.test.js.snap`,
    `.stories.js`,
  ],
  collectCoverageFrom: [
    `src/components/**/*.{js,jsx}`,
    `!src/components/__tests__/**/*`
  ],
  transformIgnorePatterns: [
    `node_modules/(?!(gatsby)/)`,
  ],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [
    `<rootDir>/loadershim.js`
  ],
  setupFilesAfterEnv: [
    `<rootDir>/setupTests.js`
  ],
  snapshotSerializers: [
    `enzyme-to-json/serializer`
  ],
  testEnvironment: "jest-environment-jsdom-global",
}
