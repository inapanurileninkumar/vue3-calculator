module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended"
  ],
  parserOptions: {
    parser: "@babel/eslint-parser"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/require-default-prop": 0,
    "vue/one-component-per-file": 0,
    "vue/no-v-html": 0,
    "vue/attribute-hyphenation": ["error", "never", {
      ignore: []
    }],
    "vue/max-attributes-per-line": ["error", {
      singleline: {
        max: 1
      },
      multiline: {
        max: 1
      }
    }],
    "vue/first-attribute-linebreak": ["error", {
      "singleline": "ignore",
      "multiline": "below"
    }],
    "vue/multiline-html-element-content-newline": ["error", {
      "ignoreWhenEmpty": true,
      "ignores": ["pre", "textarea"],
      "allowEmptyLines": false
    }],
    "vue/html-indent": ["error", 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: []
    }],
    "vue/script-indent": ["error", 2, {
      "baseIndent": 1,
      "switchCase": 1,
      "ignores": []
    }],
    "vue/html-self-closing": ["error", {
      html: {
        void: "never",
        normal: "always",
        component: "always"
      },
      svg: "always",
      math: "always"
    }],
    "vue/html-closing-bracket-newline": ["error", {
      singleline: "never",
      multiline: "always"
    }],
    // https://eslint.org/docs/rules/quotes
    quotes: ["error", "double"],
    // https://eslint.org/docs/rules/jsx-quotes
    "jsx-quotes": ["error", "prefer-double"],
    // https://eslint.org/docs/rules/semi
    semi: ["error", "always"],
    // https://eslint.org/docs/2.0.0/rules/indent
    indent: ["warn", 2, { ignoredNodes: [""], SwitchCase: 1 }],
    // TBD: https://eslint.org/docs/rules/no-comma-dangle
    "comma-dangle": ["error", "never"],
    // TBD: https://eslint.org/docs/rules/curly
    curly: "error",
    // TBD: https://eslint.org/docs/rules/no-trailing-spaces
    "no-trailing-spaces": ["error", { skipBlankLines: true, ignoreComments: true }],
    // TBD: https://eslint.org/docs/rules/no-var
    "no-var": "error",
    // TBD: https://eslint.org/docs/rules/keyword-spacing
    "keyword-spacing": ["error", { before: true, after: true }],
    // TBD: https://eslint.org/docs/rules/comma-spacing
    "comma-spacing": ["error", { before: false, after: true }]
  },
  overrides: [
      {
          "files": ["*.vue"],
          "rules": {
              "indent": "off"
          }
      }
  ],
};
