module.exports = {
    trailingComma: "es5",
    tabWidth: 2,
    semi: true,
    singleQuote: true,
    printWidth: 100,
    endOfLine: "auto",
    plugins: ["prettier-plugin-tailwindcss"],
    tailwindStylesheet: "./src/index.css",
    tailwindFunctions: ['cn']
}