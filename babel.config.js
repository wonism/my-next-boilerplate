module.exports = (api) => {
  api.cache(true);

  const plugins = [
    '@emotion',
    'macros',
    ['module-resolver', {
      '@components/*': './src/components',
      '@constants/*': './src/constants',
      '@models/*': './src/models',
      '@pages/*': './src/pages',
      '@store/*': './src/store',
      '@utils/*': './src/utils',
    }],
  ];
  const presets = ['next/babel', '@emotion/babel-preset-css-prop'];

  return { plugins, presets };
};
