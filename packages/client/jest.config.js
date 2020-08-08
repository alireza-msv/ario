module.exports = {
  clearMocks: true,
  coverageProvider: 'v8',
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/test/jest.setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
