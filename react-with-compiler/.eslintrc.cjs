module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint-plugin-react-compiler",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh"],
    rules: {
        "react-compiler/react-compiler": 2,
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],
    },
};