module.exports = {
  /**
   * Use tab to indent.
   */
  useTabs: false,

  /**
   * Tab character width
   */
  tabWidth: 2,

  /**
   * Whether to use single quotes.
   */
  singleQuote: true,

  /**
   * Whether a semicolon is required at the end of a line.
   */
  semi: true,

  /**
   * Overrides the default configuration.
   */
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],

  /**
   * In view of the markdown files, if exceeded the maximum number of characters always wrap, never non-breaking, preserve the same display.
   */
  proseWrap: 'preserve',

  /**
   * HTML space sensitive.
   */
  htmlWhitespaceSensitivity: 'strict',

  /**
   * Arrow functions, if they have only one argument, they also need parentheses.
   */
  arrowParens: 'always',

  /**
   * Line end, same as editorConfig's end of line
   */
  endOfLine: 'auto',
};
