module.exports = {
  "extends": [
    "airbnb-base",
    "plugin:react/recommended",
    "plugin:import/react",
  ],
  "env": {
    "browser": true,
    "node": true,
  },
  "rules": {
    // "linebreak-style": ["error", "windows"],
    "semi":["error", "always"],
    "camelcase":"error",
    "indent":["error", 2],
    "prefer-const": [
      "error",
      {
        "destructuring": "any",
        "ignoreReadBeforeAssign": false
      }
    ],
    "no-use-before-define": [
      "error",
      {
        "functions": false,
        "classes": true 
      }
    ],
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "no-console":"off",
  },
  // "overrides": [
  //   {
  //     "files": ["src/*.js"],
  //     "rules": {
  //       "no-console":"warn",
  //     }
  //   }
  // ],
  "settings": {
    "react": {
      "createClass": "createReactClass", // Regex for Component Factory to use,
                                         // default to "createReactClass"
      "pragma": "React",  // Pragma to use, default to "React"
      "version": "detect", // React version. "detect" automatically picks the version you have installed.
                           // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                           // default to latest and warns if missing
                           // It will default to "detect" in the future
    },
    "import/resolver": {
      "node": {
        "extensions": [".js",".jsx"]
      }
    }
  }
};