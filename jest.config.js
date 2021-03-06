module.exports = {
  transform: {
    '^.+\\.(ts?|jsx?|tsx?)?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.jest.json',
      diagnostics: false,
    },
  },
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testPathIgnorePatterns: ['/node_modules/', '/src/styles/', '/cypress/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['<rootDir>/src/styles/', '<rootDir>/src/utils/', '<rootDir>/cypress'],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(jpe?g|png|gif|webp|svg|mp4|webm|ogg|mp3|wav|flac|aac|woff2?|eot|ttf|otf)$': '<rootDir>/__mocks__/fileMock.js',
    '@utils(.*)$': '<rootDir>/src/utils/$1',
    '@styles(.*)$': '<rootDir>/src/styles/$1',
    '@components(.*)$': '<rootDir>/src/components/$1',
    '@services(.*)$': '<rootDir>/services/$1',
    '@routes(.*)$': '<rootDir>/src/routes/$1',
    '@pages(.*)$': '<rootDir>/src/pages/$1',
    '@context(.*)$': '<rootDir>/src/context/$1',
  },
  moduleDirectories: ['node_modules', 'src'],
};
