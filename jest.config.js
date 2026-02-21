module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.js$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'vue', 'json'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': '<rootDir>/tests/__mocks__/fileMock.js',
    '\\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2|pdf)$':
      '<rootDir>/tests/__mocks__/fileMock.js',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['**/tests/unit/**/*.spec.js'],
};
