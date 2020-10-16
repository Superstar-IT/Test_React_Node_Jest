// jest.config.js
module.exports = {
    transform: { '^.+\\.(js|jsx|ts|tsx)?$': 'ts-jest'},
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.{ts,tsx}",
        "!**/node_modules/**",
        "!src/serviceWorker.ts",
        "!src/react-app-env.d.ts",
        "!src/index.tsx"
    ],  
    "setupFiles": [
        "<rootDir>/config/setuptest.js",
    ],
}