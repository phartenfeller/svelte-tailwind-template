module.exports = {
  purge: {
    content: ['./public/index.html', './src/**/*.svelte'],
    options: {
      defaultExtractor: (content) => [
        ...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
        ...(content.match(/(?<=class:)[^=>\/\s]*/g) || []),
      ],
    },
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
