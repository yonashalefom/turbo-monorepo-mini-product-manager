module.exports = {
    root: true,
    extends: ["@repo/eslint-config/base.js"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        tsconfigRootDir: __dirname,
    }
}
