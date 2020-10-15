const {defaults} = require('jest-config')

module.exports = {
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'js'],
    testMatch: [
        '**/spec/**/*.js?(x)',
        '**/?(*.)(spec|test).js?(x)',
    ],
    transform: {
        '^.+\\.m?jsx?$': 'babel-jest',
    },
}
