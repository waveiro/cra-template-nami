module.exports = {
  "plugins": ["prettier", "@typescript-eslint"],
  "extends": ["airbnb-typescript", "react-app", "prettier"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "settings": {
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true
      }
    }
  },
  "rules": {
    "react/jsx-one-expression-per-line": "off"
  }
}

