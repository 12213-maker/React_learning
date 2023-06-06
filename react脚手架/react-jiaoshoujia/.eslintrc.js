module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended"
    ],
    //解析器
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",//ECMAScript最新版本
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "rules": {
    }
}
