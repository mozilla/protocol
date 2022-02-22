module.exports = {
    env: {
        'browser': true,
        'node': false,
        'jasmine': true
    },
    extends: [
        'eslint:recommended'
    ],
    rules: {
        // Require strict mode directive in top level functions
        // https://eslint.org/docs/rules/strict
        'strict': ['error', 'function'],

        // Require `let` or `const` instead of `var`
        // https://eslint.org/docs/rules/no-var
        'no-var': 'off',
    },
    globals: {
        'Mzp': 'writable'
    }
};
