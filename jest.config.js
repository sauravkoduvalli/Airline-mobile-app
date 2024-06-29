module.exports = {
  preset: "react-native",
  moduleFileExtensions: ['ts', 'tsx','js','jsx','json','node'],
  // setupFilesAfterEnv: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  transformIgnorePatterns: ['node_modules/(?!(jest-)?react-native|@react-native|@react-navigation)'],
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  // the following line is needed in order to grab modules from the
  // src folder without the need to write them relatively
  moduleDirectories: ["node_modules", "src"],
};