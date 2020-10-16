const {defaults} = require('jest-config')

module.exports = {
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'js'],
    testMatch: [
        '**/spec/**/*.js?(x)',
        '**/?(*.)(spec|test).js?(x)',
    ],
    transform: {
        '^.+\\.m?js?$': 'babel-jest',
    },
    collectCoverage: true,
    collectCoverageFrom: ['client/src/**/*.js'],
}
