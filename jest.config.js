module.exports = {
    verbose: true,
    setupFiles: ["./setupTests.js"],
    collectCoverage: true,
    collectCoverageOnlyFrom: {
        "src/App.jsx": true
    },
    transform: {".*": "<rootDir>/node_modules/babel-jest"},
    testFileExtensions: [
        "es6",
        "js"
    ],
    moduleFileExtensions: [
        "js","jsx"
    ],
    unmockedModulePathPatterns: [
        "react"
    ]
};